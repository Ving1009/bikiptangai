/**
 * BÍ KÍP TÁN GÁI V2 - Main Application Coordinator
 * - Quản lý trạng thái duy nhất qua `bktg_state_v2`
 * - Hệ thống timer an toàn (setSafeTimeout / clearPendingTimers) chống race condition
 * - Tính điểm chính xác qua `recalculateStats()` loại bỏ 100% rủi ro cộng dồn / drift điểm
 * - Phân biệt rõ ràng "Đọc Lại Bí Kíp" và "Chơi Lại Từ Đầu"
 * - Chế độ "Trình chiếu" (Presentation Mode) toàn màn hình
 * - Hỗ trợ Single-Page Book trên mobile qua tab chuyển trang
 * - Phân tích kết quả theo profile kỹ năng mềm: điểm mạnh, điểm rèn giũa, khoảnh khắc đáng nhớ
 */

const STORAGE_KEY = "bktg_state_v2";

const ANIMATION = {
  pageFlip: 950,
  halfFlip: 475,
  playerReplyDelay: 250,
  typingDelay: 850,
  girlReplyDelay: 2000
};

class App {
  constructor() {
    this.version = 2;
    this.phase = "cover"; // "cover" | "reading" | "cinematic" | "minigame" | "results"
    this.currentChapterIndex = 0;
    this.stats = {
      communication: 0,
      confidence: 0,
      humor: 0,
      empathy: 0,
      respect: 0,
      impression: 0
    };
    this.choicesHistory = [];
    this.miniGameScore = 0;

    // Runtime state flags
    this.isPageTurning = false;
    this.hasAnsweredCurrent = false;
    this.currentChapterChoice = null;
    this.isAnsweringBranch = false;
    this.isBookOpen = false;

    // Timer and race-condition control
    this.pendingTimers = [];
    this.renderVersion = 0;

    // DOM Elements - Book Containers
    this.bookContainer = document.getElementById("book-container");
    this.book3D = document.getElementById("book-3d");
    this.bookCoverFront = document.getElementById("book-cover-front");
    this.bookPageFlipper = document.getElementById("book-page-flipper");
    this.readingUI = document.getElementById("reading-ui");
    this.bookPageLeft = document.getElementById("book-page-left");
    this.bookPageRight = document.getElementById("book-page-right");

    // Screens
    this.cinematicOverlay = document.getElementById("cinematic-overlay");
    this.minigameScreen = document.getElementById("minigame-screen");
    this.resultsScreen = document.getElementById("results-screen");

    // Navigation & Buttons
    this.soundToggleBtn = document.getElementById("sound-toggle-btn");
    this.resetBtn = document.getElementById("reset-btn");
    this.fullscreenBtn = document.getElementById("fullscreen-btn");
    this.openBookBtn = document.getElementById("btn-open-book");
    this.startMinigameBtn = document.getElementById("btn-start-minigame");
    this.btnRereadBook = document.getElementById("btn-reread-book");
    this.btnReplayAll = document.getElementById("btn-replay-all");

    // Left Page Elements
    this.chapterBadge = document.getElementById("chapter-badge");
    this.chapterTitle = document.getElementById("chapter-title");
    this.chapterSetting = document.getElementById("chapter-setting");
    this.chapterContext = document.getElementById("chapter-context");
    this.chapterWisdom = document.getElementById("chapter-wisdom");
    this.bookmarkProgress = document.getElementById("bookmark-progress");
    this.prevPageBtn = document.getElementById("btn-prev-page");
    this.cornerPeelLeft = document.getElementById("page-corner-peel-left");
    this.shadowLeft = document.getElementById("page-turn-shadow-left");
    this.shadowRight = document.getElementById("page-turn-shadow-right");
    this.flipperFrontContent = document.getElementById("flipper-front-content");
    this.chapterAnalysisBox = document.getElementById("chapter-analysis-box");
    this.analysisSkillsTags = document.getElementById("analysis-skills-tags");
    this.chapterAnalysisText = document.getElementById("chapter-analysis-text");

    // Right Page (Chat & Choices)
    this.chatMessagesContainer = document.getElementById("chat-messages");
    this.choicesContainer = document.getElementById("scenario-choices");
    this.nextPageBtn = document.getElementById("btn-next-page");
    this.ancientCommentBox = document.getElementById("ancient-comment-box");
    this.reselectHint = document.getElementById("reselect-hint");
    this.relationshipBadge = document.getElementById("relationship-badge");

    // Mobile Tabs
    this.tabLeftPage = document.getElementById("tab-left-page");
    this.tabRightPage = document.getElementById("tab-right-page");

    // Mouse tilt tracking
    this.tiltX = 0;
    this.tiltY = 0;
    this.targetTiltX = 0;
    this.targetTiltY = 0;

    this.init();
  }

  init() {
    this.loadState();
    this.bindEvents();
    this.setupTiltEffect();
    this.setupMobileTabs();
    this.updateSoundButtonUI();

    // Khởi tạo mini-game engine
    this.miniGame = new MiniGame({
      onComplete: (score, maxScore) => this.handleMiniGameComplete(score, maxScore)
    });

    // Phục hồi màn hình dựa trên phase đã lưu
    this.restorePhaseUI();
  }

  // ==========================================
  // 1. QUẢN LÝ TIMER & CHỐNG RACE CONDITION
  // ==========================================
  setSafeTimeout(fn, delay) {
    const currentVersion = this.renderVersion;
    const timerId = setTimeout(() => {
      this.pendingTimers = this.pendingTimers.filter((id) => id !== timerId);
      if (this.renderVersion === currentVersion) {
        fn();
      }
    }, delay);
    this.pendingTimers.push(timerId);
    return timerId;
  }

  clearPendingTimers() {
    this.pendingTimers.forEach((id) => clearTimeout(id));
    this.pendingTimers = [];
    this.renderVersion++;
    this.removeTypingIndicator();
    this.isAnsweringBranch = false;
  }

  // ==========================================
  // 2. LƯU & PHỤC HỒI TRẠNG THÁI (STATE MANAGEMENT)
  // ==========================================
  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version === 2) {
          this.phase = parsed.phase || "cover";
          this.currentChapterIndex = typeof parsed.currentChapterIndex === "number" ? parsed.currentChapterIndex : 0;
          this.choicesHistory = Array.isArray(parsed.choicesHistory) ? parsed.choicesHistory : [];
          this.miniGameScore = (parsed.miniGame && parsed.miniGame.score) || 0;
          this.recalculateStats();
          return;
        }
      }

      // Migration từ V1 nếu có dữ liệu cũ
      const oldChapter = localStorage.getItem("bktg_chapter");
      const oldHistory = localStorage.getItem("bktg_history");
      const oldStep = localStorage.getItem("bktg_step");

      if (oldChapter !== null || oldHistory !== null) {
        if (oldChapter !== null) this.currentChapterIndex = parseInt(oldChapter, 10) || 0;
        if (oldHistory) {
          try {
            const hist = JSON.parse(oldHistory);
            this.choicesHistory = Array.isArray(hist)
              ? hist.map((h) => ({ chapterId: h.chapter, choiceId: h.choiceId }))
              : [];
          } catch (e) {}
        }
        this.phase = oldStep === "reading" ? "reading" : "cover";
        this.recalculateStats();
        this.saveState();
      }
    } catch (e) {
      console.warn("Could not load state, falling back to default:", e);
      this.resetStateToDefault();
    }
  }

  saveState() {
    try {
      const state = {
        version: 2,
        phase: this.phase,
        currentChapterIndex: this.currentChapterIndex,
        stats: this.stats,
        choicesHistory: this.choicesHistory,
        miniGame: {
          score: this.miniGameScore,
          completed: this.phase === "results"
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  resetStateToDefault() {
    this.phase = "cover";
    this.currentChapterIndex = 0;
    this.choicesHistory = [];
    this.miniGameScore = 0;
    this.recalculateStats();
    try {
      localStorage.removeItem(STORAGE_KEY);
      // Xóa các key cũ của V1
      localStorage.removeItem("bktg_step");
      localStorage.removeItem("bktg_chapter");
      localStorage.removeItem("bktg_stats");
      localStorage.removeItem("bktg_history");
    } catch (e) {}
  }

  // TÍNH TOÁN ĐIỂM ĐỘC LẬP TỪ choicesHistory (Ngăn chặn 100% lỗi sai/trùng điểm)
  recalculateStats() {
    const base = {
      communication: 0,
      confidence: 0,
      humor: 0,
      empathy: 0,
      respect: 0,
      impression: 0
    };

    if (Array.isArray(this.choicesHistory)) {
      this.choicesHistory.forEach((h) => {
        const scenario = window.SCENARIOS_DATA.find((s) => s.id === h.chapterId);
        if (scenario) {
          const choice = scenario.choices.find((c) => c.id === h.choiceId);
          if (choice && choice.effects) {
            for (let k in choice.effects) {
              if (base[k] !== undefined) base[k] += choice.effects[k];
            }
          }
        }
      });
    }

    this.stats = base;
  }

  // Phục hồi màn hình phù hợp khi người dùng reload trang
  restorePhaseUI() {
    if (this.phase === "results") {
      this.renderFinalResults();
      this.hideBookAndOverlays();
      if (this.resultsScreen) {
        this.resultsScreen.classList.remove("hidden");
      }
    } else if (this.phase === "minigame") {
      this.hideBookAndOverlays();
      if (this.minigameScreen) {
        this.minigameScreen.classList.remove("hidden");
      }
      this.miniGame.start();
    } else if (this.phase === "cinematic") {
      this.hideBookAndOverlays();
      if (this.cinematicOverlay) {
        this.cinematicOverlay.classList.remove("hidden");
      }
    } else if (this.phase === "reading") {
      if (this.openBookBtn) {
        this.openBookBtn.innerHTML = `✨ TIẾP TỤC ĐỌC (CHƯƠNG ${this.currentChapterIndex + 1}) ✨`;
      }
    }
  }

  hideBookAndOverlays() {
    if (this.bookContainer) this.bookContainer.classList.add("hidden");
    if (this.cinematicOverlay) this.cinematicOverlay.classList.add("hidden");
    if (this.minigameScreen) this.minigameScreen.classList.add("hidden");
    if (this.resultsScreen) this.resultsScreen.classList.add("hidden");
  }

  // ==========================================
  // 3. SỰ KIỆN & ĐIỀU KHIỂN (EVENTS & ACCESSIBILITY)
  // ==========================================
  bindEvents() {
    // Nút Toàn Màn Hình Trình Chiếu (Presentation Mode)
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener("click", () => this.togglePresentationMode());
    }

    // Nút Bật/Tắt Âm Thanh
    if (this.soundToggleBtn) {
      this.soundToggleBtn.addEventListener("click", () => {
        const isMuted = window.soundEngine.toggleMute();
        this.updateSoundButtonUI(isMuted);
      });
    }

    // Nút Chơi Lại Từ Đầu
    if (this.resetBtn) {
      this.resetBtn.addEventListener("click", () => this.resetProgress());
    }

    // Nút Mở Bí Kíp ở trang bìa
    if (this.openBookBtn) {
      this.openBookBtn.addEventListener("click", () => this.openBook());
    }

    // Nút Lật Sang Trang Tiếp Theo
    if (this.nextPageBtn) {
      this.nextPageBtn.addEventListener("click", () => this.nextChapter());
    }

    // Nút Lùi Lại Chương Trước
    if (this.prevPageBtn) {
      this.prevPageBtn.addEventListener("click", () => this.prevChapter());
    }

    // Click góc trang phải (Dog-Ear)
    const cornerPeel = document.getElementById("page-corner-peel");
    if (cornerPeel) {
      cornerPeel.addEventListener("click", () => {
        if (this.hasAnsweredCurrent && !this.isPageTurning) {
          this.nextChapter();
        }
      });
    }

    // Click góc trang trái để lùi
    if (this.cornerPeelLeft) {
      this.cornerPeelLeft.addEventListener("click", () => {
        if (!this.isPageTurning && this.currentChapterIndex > 0) {
          this.prevChapter();
        }
      });
    }

    // Nút Bước Vào Thử Thách Cuối Cùng
    if (this.startMinigameBtn) {
      this.startMinigameBtn.addEventListener("click", () => this.startFinalTrial());
    }

    // Nút Đọc Lại Bí Kíp (Giữ lịch sử)
    if (this.btnRereadBook) {
      this.btnRereadBook.addEventListener("click", () => this.rereadBook());
    }

    // Nút Chơi Lại Từ Đầu ở màn kết quả
    if (this.btnReplayAll) {
      this.btnReplayAll.addEventListener("click", () => this.resetProgress());
    }

    // Phím tắt bàn phím (Có kiểm tra bảo vệ form control)
    window.addEventListener("keydown", (e) => {
      // Bỏ qua nếu đang focus vào nút bấm hoặc ô nhập liệu
      if (e.target && e.target.closest("button, input, textarea, select, a")) {
        // Cho phép phím Enter click vào button hiện tại, không chuyển trang bất ngờ
        return;
      }

      if (e.key === "ArrowRight") {
        if (this.hasAnsweredCurrent && !this.isPageTurning && this.isBookOpen) {
          this.nextChapter();
        }
      } else if (e.key === "ArrowLeft") {
        if (!this.isPageTurning && this.isBookOpen && this.currentChapterIndex > 0) {
          this.prevChapter();
        }
      }
    });

    // Lắng nghe sự kiện thoát fullscreen
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        document.body.classList.remove("in-presentation-mode");
      }
    });
  }

  togglePresentationMode() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      document.body.classList.add("in-presentation-mode");
    } else {
      document.exitFullscreen().catch(() => {});
      document.body.classList.remove("in-presentation-mode");
    }
  }

  setupMobileTabs() {
    if (this.tabLeftPage && this.tabRightPage && this.readingUI) {
      this.tabLeftPage.addEventListener("click", () => {
        this.readingUI.setAttribute("data-mobile-active", "left");
        this.tabLeftPage.classList.add("active");
        this.tabLeftPage.setAttribute("aria-selected", "true");
        this.tabRightPage.classList.remove("active");
        this.tabRightPage.setAttribute("aria-selected", "false");
      });

      this.tabRightPage.addEventListener("click", () => {
        this.readingUI.setAttribute("data-mobile-active", "right");
        this.tabRightPage.classList.add("active");
        this.tabRightPage.setAttribute("aria-selected", "true");
        this.tabLeftPage.classList.remove("active");
        this.tabLeftPage.setAttribute("aria-selected", "false");
      });
    }
  }

  updateSoundButtonUI(isMuted = window.soundEngine.isMuted) {
    if (!this.soundToggleBtn) return;
    this.soundToggleBtn.innerHTML = isMuted
      ? `<span class="sound-icon">🔇</span><span class="btn-text">Âm thanh: Tắt</span>`
      : `<span class="sound-icon">🔊</span><span class="btn-text">Âm thanh: Bật</span>`;
  }

  setupTiltEffect() {
    // Chỉ kích hoạt khi con trỏ chuột chính xác (không chạy trên cảm ứng)
    const canTilt = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canTilt || reducedMotion) return;

    window.addEventListener("mousemove", (e) => {
      // Chỉ tính toán khi sách đang hiển thị
      if (this.phase !== "cover" && this.phase !== "reading") return;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const intensity = this.isBookOpen ? 4.5 : 10;
      this.targetTiltY = ((e.clientX - cx) / cx) * intensity;
      this.targetTiltX = -((e.clientY - cy) / cy) * intensity;
    });

    window.addEventListener("mouseleave", () => {
      this.targetTiltX = 0;
      this.targetTiltY = 0;
    });

    let currentOffsetX = !this.isBookOpen && window.innerWidth > 992 ? -240 : 0;

    const updateTilt = () => {
      if (this.phase === "cover" || this.phase === "reading") {
        this.tiltX += (this.targetTiltX - this.tiltX) * 0.08;
        this.tiltY += (this.targetTiltY - this.tiltY) * 0.08;

        if (this.book3D) {
          const isMobile = window.innerWidth <= 992;
          const targetOffsetX = !this.isBookOpen && !isMobile ? -240 : 0;
          currentOffsetX += (targetOffsetX - currentOffsetX) * 0.08;

          // Cập nhật vị trí nguồn sáng và góc nghiêng 3D động cho CSS shader
          const lightX = 50 + this.tiltY * 3.5;
          const lightY = 40 - this.tiltX * 3.5;
          this.book3D.style.setProperty("--tilt-x", `${this.tiltX.toFixed(2)}deg`);
          this.book3D.style.setProperty("--tilt-y", `${this.tiltY.toFixed(2)}deg`);
          this.book3D.style.setProperty("--light-x", `${lightX.toFixed(1)}%`);
          this.book3D.style.setProperty("--light-y", `${lightY.toFixed(1)}%`);

          if (!this.isBookOpen) {
            this.book3D.style.transform = `translateX(${currentOffsetX.toFixed(1)}px) rotateX(${this.tiltX.toFixed(2)}deg) rotateY(${this.tiltY.toFixed(2)}deg)`;
          } else {
            this.book3D.style.transform = `translateX(${currentOffsetX.toFixed(1)}px) rotateX(${(this.tiltX * 0.35).toFixed(2)}deg) rotateY(${(this.tiltY * 0.35).toFixed(2)}deg)`;
          }
        }
      }
      requestAnimationFrame(updateTilt);
    };

    requestAnimationFrame(updateTilt);
  }

  // ==========================================
  // 4. MỞ SÁCH & QUẢN LÝ CHƯƠNG (READING FLOW)
  // ==========================================
  openBook() {
    window.soundEngine.initContext();
    window.soundEngine.playBookOpen();
    window.soundEngine.startAmbient();

    if (this.openBookBtn) this.openBookBtn.disabled = true;

    // Animation mở bìa sách
    this.bookContainer.classList.add("camera-zoom-in");
    this.book3D.classList.remove("book-state-closed");
    this.book3D.classList.add("book-state-open");
    this.bookCoverFront.classList.add("cover-opened");
    this.isBookOpen = true;
    this.phase = "reading";

    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex);
      this.saveState();
    }, 750);
  }

  // Tải nội dung chương (Hỗ trợ phục hồi đầy đủ khi quay lại hoặc reload)
  loadChapter(index) {
    if (index >= window.SCENARIOS_DATA.length) {
      this.triggerBookClosingSequence();
      return;
    }

    // Xóa mọi timer của chương trước
    this.clearPendingTimers();

    this.currentChapterIndex = index;
    const scenario = window.SCENARIOS_DATA[index];

    // Kiểm tra xem chương này đã từng được chọn hay chưa
    const existingHistory = this.choicesHistory.find((h) => h.chapterId === scenario.id);
    if (existingHistory) {
      this.currentChapterChoice = scenario.choices.find((c) => c.id === existingHistory.choiceId) || null;
      this.hasAnsweredCurrent = !!this.currentChapterChoice;
    } else {
      this.currentChapterChoice = null;
      this.hasAnsweredCurrent = false;
    }

    // 1. Cập nhật Trang Trái
    if (this.chapterBadge) this.chapterBadge.textContent = scenario.badge;
    if (this.chapterTitle) this.chapterTitle.textContent = `${scenario.chapter}: ${scenario.chapterTitle}`;
    if (this.chapterSetting) this.chapterSetting.textContent = scenario.setting;
    if (this.chapterContext) this.chapterContext.textContent = scenario.context;
    if (this.chapterWisdom) this.chapterWisdom.textContent = scenario.ancientWisdom;
    if (this.bookmarkProgress) {
      this.bookmarkProgress.textContent = `Chương ${index + 1} / ${window.SCENARIOS_DATA.length}`;
    }

    // Cập nhật nút lật lùi
    if (this.prevPageBtn) {
      if (index > 0) this.prevPageBtn.classList.remove("hidden");
      else this.prevPageBtn.classList.add("hidden");
    }
    if (this.cornerPeelLeft) {
      if (index > 0) this.cornerPeelLeft.classList.remove("hidden");
      else this.cornerPeelLeft.classList.add("hidden");
    }

    // Cập nhật mức độ gắn kết cảm xúc
    this.updateRelationshipBadge();

    // 2. Render nội dung chat và phân tích
    if (this.hasAnsweredCurrent && this.currentChapterChoice) {
      // Đã trả lời trước đó: hiển thị lại tức thì không cần delay
      this.renderChatImmediate(scenario, this.currentChapterChoice);
      this.showOutcomeFeedback(this.currentChapterChoice);
      this.showAnalysisFeedback(this.currentChapterChoice);
    } else {
      // Chưa trả lời: chạy tuần tự các tin nhắn mở màn
      if (this.chapterAnalysisBox) this.chapterAnalysisBox.classList.add("hidden");
      if (this.ancientCommentBox) this.ancientCommentBox.classList.add("hidden");
      if (this.nextPageBtn) this.nextPageBtn.classList.add("hidden");
      if (this.reselectHint) this.reselectHint.classList.add("hidden");
      this.renderChatSequence(scenario);
    }

    // 3. Render 4 lựa chọn (đánh dấu thẻ đã chọn nếu có)
    this.renderChoices(scenario);

    this.saveState();
  }

  updateRelationshipBadge() {
    if (!this.relationshipBadge) return;
    const imp = this.stats.impression || 0;
    let label = "Mới quen";
    let cls = "";

    if (imp >= 12) {
      label = "Đang rung động ✨";
      cls = "rel-love";
    } else if (imp >= 8) {
      label = "Rất tin tưởng 💖";
      cls = "rel-love";
    } else if (imp >= 4) {
      label = "Khá thân 🌿";
      cls = "rel-close";
    } else if (imp >= 1) {
      label = "Có thiện cảm 🌸";
      cls = "rel-close";
    }

    this.relationshipBadge.textContent = label;
    this.relationshipBadge.className = `relationship-badge ${cls}`;
  }

  // Render tin nhắn mở đầu với safe timeout
  renderChatSequence(scenario) {
    if (!this.chatMessagesContainer) return;
    this.chatMessagesContainer.innerHTML = "";

    let delay = 300;
    scenario.initialMessages.forEach((msg, idx) => {
      this.setSafeTimeout(() => {
        this.appendMessage(msg.sender, msg.text, msg.time);
        if (msg.sender === "girl") {
          window.soundEngine.playMessageReceived();
        }
      }, delay);
      delay += 800;
    });
  }

  // Phục hồi tin nhắn tức thì khi quay lại chương đã trả lời
  renderChatImmediate(scenario, choice) {
    if (!this.chatMessagesContainer) return;
    this.chatMessagesContainer.innerHTML = "";

    scenario.initialMessages.forEach((msg) => {
      this.appendMessage(msg.sender, msg.text, msg.time);
    });

    this.appendMessage("player", choice.playerMessage, "Đã gửi", "branch-msg-player");

    // Lấy phản hồi phù hợp (Chương 7 có branching dựa trên lựa chọn và toàn bộ hành trình)
    let replyText = choice.girlReply;
    if (scenario.id === 7 && typeof window.getChapter7BranchingResponse === "function") {
      const branchRes = window.getChapter7BranchingResponse(choice, this.stats, this.choicesHistory);
      replyText = branchRes.reply;
    }

    this.appendMessage("girl", replyText, "Vừa xong", "branch-msg-girl");
  }

  // Thêm tin nhắn với tính năng Grouping Bubble (tin liên tiếp cùng người gửi chỉ hiện avatar ở tin cuối)
  appendMessage(sender, text, time = "Vừa xong", customClass = "") {
    if (!this.chatMessagesContainer) return;

    // Kiểm tra grouping với tin nhắn liền trước
    const lastRow = this.chatMessagesContainer.lastElementChild;
    if (lastRow && lastRow.classList.contains(`chat-row-${sender}`)) {
      lastRow.classList.add("chat-row-grouped");
    }

    const row = document.createElement("div");
    row.className = `chat-row chat-row-${sender} message-enter ${customClass}`;

    if (sender === "girl") {
      row.innerHTML = `
        <div class="chat-avatar-wrapper">
          <div class="chat-avatar girl-avatar" title="Thanh Thảo">
            <span class="avatar-text">Thảo</span>
          </div>
        </div>
        <div class="chat-bubble-group">
          <div class="chat-bubble girl-bubble">${this.escapeHTML(text)}</div>
          <span class="chat-time">${time}</span>
        </div>
      `;
    } else if (sender === "player") {
      row.innerHTML = `
        <div class="chat-bubble-group">
          <div class="chat-bubble player-bubble">${this.escapeHTML(text)}</div>
          <span class="chat-time">${time}</span>
        </div>
        <div class="chat-avatar-wrapper">
          <div class="chat-avatar player-avatar" title="Bạn">
            <span class="avatar-text">Bạn</span>
          </div>
        </div>
      `;
    } else if (sender === "system") {
      row.innerHTML = `
        <div class="chat-system-badge">
          <span class="system-icon">📜</span>
          <span>${this.escapeHTML(text)}</span>
        </div>
      `;
    }

    this.chatMessagesContainer.appendChild(row);
    this.scrollChatToBottom();
  }

  showTypingIndicator() {
    this.removeTypingIndicator();
    const typing = document.createElement("div");
    typing.id = "chat-typing-indicator";
    typing.className = "chat-row chat-row-girl typing-enter";
    typing.innerHTML = `
      <div class="chat-avatar-wrapper">
        <div class="chat-avatar girl-avatar">
          <span class="avatar-text">Thảo</span>
        </div>
      </div>
      <div class="typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    this.chatMessagesContainer.appendChild(typing);
    this.scrollChatToBottom();
    window.soundEngine.playTyping();
  }

  removeTypingIndicator() {
    const existing = document.getElementById("chat-typing-indicator");
    if (existing && typeof existing.remove === "function") existing.remove();
  }

  scrollChatToBottom() {
    if (this.chatMessagesContainer) {
      this.chatMessagesContainer.scrollTop = this.chatMessagesContainer.scrollHeight;
    }
  }

  // Render 4 lựa chọn (Tag trung tính trước khi chọn, đánh dấu thẻ đã chọn)
  renderChoices(scenario) {
    if (!this.choicesContainer) return;
    this.choicesContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    scenario.choices.forEach((choice, index) => {
      const card = document.createElement("button");
      card.className = "choice-card choice-enter";
      card.id = `choice-card-${choice.id}`;
      card.setAttribute("aria-label", `Lựa chọn ${letters[index]}`);

      // Nếu đã từng chọn thẻ này
      if (this.currentChapterChoice && this.currentChapterChoice.id === choice.id) {
        card.classList.add("selected-card");
      } else if (this.currentChapterChoice) {
        card.classList.add("can-reselect");
        card.title = "Bấm để thử cách phản ứng này!";
      }

      // Không hiển thị choice-tag để người chơi tự phân vân và suy ngẫm
      card.innerHTML = `
        <div class="choice-letter-seal">${letters[index]}</div>
        <div class="choice-body">
          <div class="choice-text">${choice.text}</div>
        </div>
      `;

      card.onclick = () => this.handleChoiceSelect(choice, card, scenario);
      this.choicesContainer.appendChild(card);
    });
  }

  // ==========================================
  // 5. XỬ LÝ LỰA CHỌN & CHỌN LẠI (RE-SELECTION)
  // ==========================================
  handleChoiceSelect(choice, cardEl, scenario) {
    if (this.isAnsweringBranch) return;
    if (this.currentChapterChoice && this.currentChapterChoice.id === choice.id) return;

    this.isAnsweringBranch = true;
    window.soundEngine.playChoiceClick();

    // 1. Cập nhật lịch sử và tính lại toàn bộ điểm số sạch sẽ (100% không bị double count)
    const existingIdx = this.choicesHistory.findIndex((h) => h.chapterId === scenario.id);
    if (existingIdx >= 0) {
      this.choicesHistory[existingIdx] = {
        chapterId: scenario.id,
        choiceId: choice.id
      };
    } else {
      this.choicesHistory.push({
        chapterId: scenario.id,
        choiceId: choice.id
      });
    }

    this.recalculateStats();
    this.currentChapterChoice = choice;
    this.hasAnsweredCurrent = true;
    this.saveState();

    // 2. Cập nhật giao diện các card
    const allCards = this.choicesContainer.querySelectorAll(".choice-card");
    allCards.forEach((c) => {
      c.classList.remove("selected-card");
      c.classList.remove("can-reselect");
      c.classList.add("choice-busy");
    });
    cardEl.classList.add("selected-card");

    // Xóa tin nhắn branch cũ nếu có
    const oldBranchMsgs = this.chatMessagesContainer.querySelectorAll(
      ".branch-msg-player, .branch-msg-girl, #chat-typing-indicator"
    );
    oldBranchMsgs.forEach((m) => {
      if (m && typeof m.remove === "function") m.remove();
    });

    // 3. Tin nhắn người chơi xuất hiện
    this.setSafeTimeout(() => {
      this.appendMessage("player", choice.playerMessage, "Vừa xong", "branch-msg-player");
      window.soundEngine.playMessageSent();
    }, ANIMATION.playerReplyDelay);

    // 4. Hiện hiệu ứng typing
    this.setSafeTimeout(() => {
      this.showTypingIndicator();
    }, ANIMATION.typingDelay);

    // 5. Cô gái phản hồi tin nhắn
    this.setSafeTimeout(() => {
      this.removeTypingIndicator();

      // Branching logic đặc biệt ở Chương 7: phụ thuộc lựa chọn và toàn bộ hành trình
      let replyText = choice.girlReply;
      let commentText = choice.ancientComment;
      if (scenario.id === 7 && typeof window.getChapter7BranchingResponse === "function") {
        const branchRes = window.getChapter7BranchingResponse(choice, this.stats, this.choicesHistory);
        replyText = branchRes.reply;
        commentText = branchRes.ancientComment;
      }

      this.appendMessage("girl", replyText, "Vừa xong", "branch-msg-girl");
      window.soundEngine.playMessageReceived();

      // Hiện nhận xét cổ thư và phân tích kỹ năng mềm trên trang trái
      this.showOutcomeFeedback(choice, commentText);
      this.showAnalysisFeedback(choice);
      this.updateRelationshipBadge();

      // Mở khóa các card khác để người chơi có thể thử lại
      allCards.forEach((c) => {
        c.classList.remove("choice-busy");
        if (c !== cardEl) {
          c.classList.add("can-reselect");
          c.title = "Bấm để thử cách phản ứng này!";
        }
      });

      this.isAnsweringBranch = false;
      this.saveState();
    }, ANIMATION.girlReplyDelay);
  }

  showOutcomeFeedback(choice, overrideComment) {
    if (this.ancientCommentBox) {
      this.ancientCommentBox.classList.remove("hidden");
      this.ancientCommentBox.innerHTML = `
        <div class="ancient-comment-header">
          <span class="seal-mini">BÌNH</span>
          <span class="ancient-comment-title">Lời Bình Tiền Nhân:</span>
        </div>
        <div class="ancient-comment-content">
          ${overrideComment || choice.ancientComment}
        </div>
      `;
      // Scroll trang trái để lời bình hiển thị nếu cần
      if (typeof this.ancientCommentBox.scrollIntoView === "function") {
        this.ancientCommentBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    // Hiện gợi ý "bấm lại" sau khi đã chọn
    if (this.reselectHint) {
      this.reselectHint.classList.remove("hidden");
    }

    if (this.nextPageBtn) {
      this.nextPageBtn.classList.remove("hidden");
      this.nextPageBtn.classList.add("pulse-glow");
      if (typeof this.nextPageBtn.scrollIntoView === "function") {
        this.nextPageBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  showAnalysisFeedback(choice) {
    if (this.chapterAnalysisBox && choice.softSkills) {
      this.chapterAnalysisBox.classList.remove("hidden");
      if (this.analysisSkillsTags) {
        this.analysisSkillsTags.innerHTML = choice.softSkills
          .map((s) => `<span class="skill-tag-pill">🌱 ${s}</span>`)
          .join("");
      }
      if (this.chapterAnalysisText) {
        this.chapterAnalysisText.textContent = choice.evaluation || choice.ancientComment;
      }
    }
  }

  // ==========================================
  // 6. LẬT TRANG 3D (FORWARD & BACKWARD)
  // ==========================================
  nextChapter() {
    if (this.isPageTurning) return;

    if (this.currentChapterIndex >= window.SCENARIOS_DATA.length - 1) {
      this.triggerBookClosingSequence();
      return;
    }

    this.isPageTurning = true;
    window.soundEngine.playPageFlip();

    // Chuẩn bị preview trên mặt flipper
    if (this.flipperFrontContent) {
      const curScenario = window.SCENARIOS_DATA[this.currentChapterIndex];
      this.flipperFrontContent.innerHTML = `
        <div style="font-family: var(--font-title); font-size: 13px; color: var(--seal-red);">${curScenario.chapter}</div>
        <div style="font-family: var(--font-serif); font-size: 16px; font-weight: bold; color: var(--ink-primary);">${curScenario.chapterTitle}</div>
        <div style="font-size: 11px; color: var(--ink-secondary); font-style: italic;">Đang lật sang chương tiếp theo...</div>
      `;
    }

    if (this.bookPageFlipper) {
      this.bookPageFlipper.classList.remove("hidden", "flip-backward");
      this.bookPageFlipper.classList.add("flip-forward");
    }

    if (this.shadowLeft) this.shadowLeft.classList.add("shadow-active");
    if (this.shadowRight) this.shadowRight.classList.add("shadow-active");

    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex + 1);
    }, ANIMATION.halfFlip);

    setTimeout(() => {
      if (this.bookPageFlipper) {
        this.bookPageFlipper.classList.remove("flip-forward");
        this.bookPageFlipper.classList.add("hidden");
      }
      if (this.shadowLeft) this.shadowLeft.classList.remove("shadow-active");
      if (this.shadowRight) this.shadowRight.classList.remove("shadow-active");
      this.isPageTurning = false;
    }, ANIMATION.pageFlip);
  }

  prevChapter() {
    if (this.isPageTurning || this.currentChapterIndex <= 0) return;
    this.isPageTurning = true;

    window.soundEngine.playPageFlip();

    if (this.bookPageFlipper) {
      this.bookPageFlipper.classList.remove("hidden", "flip-forward");
      this.bookPageFlipper.classList.add("flip-backward");
    }

    if (this.shadowLeft) this.shadowLeft.classList.add("shadow-active");
    if (this.shadowRight) this.shadowRight.classList.add("shadow-active");

    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex - 1);
    }, ANIMATION.halfFlip);

    setTimeout(() => {
      if (this.bookPageFlipper) {
        this.bookPageFlipper.classList.remove("flip-backward");
        this.bookPageFlipper.classList.add("hidden");
      }
      if (this.shadowLeft) this.shadowLeft.classList.remove("shadow-active");
      if (this.shadowRight) this.shadowRight.classList.remove("shadow-active");
      this.isPageTurning = false;
    }, ANIMATION.pageFlip);
  }

  // ==========================================
  // 7. CINEMATIC CLOSING, MINIGAME & RESULTS
  // ==========================================
  triggerBookClosingSequence() {
    this.clearPendingTimers();
    this.phase = "cinematic";
    this.saveState();

    if (this.readingUI) this.readingUI.classList.add("fade-out");

    setTimeout(() => {
      if (this.readingUI) this.readingUI.classList.add("hidden");

      if (this.bookCoverFront) {
        this.bookCoverFront.classList.remove("cover-opened");
        this.bookCoverFront.classList.add("cover-closing");
      }
      this.bookContainer.classList.remove("camera-zoom-in");
      this.bookContainer.classList.add("camera-zoom-out");
      this.isBookOpen = false;

      window.soundEngine.playBookClose();

      setTimeout(() => {
        window.soundEngine.playSealStamp();
        if (this.cinematicOverlay) {
          this.cinematicOverlay.classList.remove("hidden");
          this.cinematicOverlay.classList.add("fade-in");
        }
      }, 700);
    }, 600);
  }

  startFinalTrial() {
    this.clearPendingTimers();
    this.phase = "minigame";
    this.saveState();

    if (this.cinematicOverlay) this.cinematicOverlay.classList.add("hidden");
    if (this.bookContainer) this.bookContainer.classList.add("hidden");
    if (this.minigameScreen) {
      this.minigameScreen.classList.remove("hidden");
      this.minigameScreen.classList.add("fade-in");
    }

    this.miniGame.start();
  }

  handleMiniGameComplete(score, maxScore) {
    this.miniGameScore = score;
    this.phase = "results";
    this.saveState();

    if (this.minigameScreen) this.minigameScreen.classList.add("hidden");
    if (this.resultsScreen) {
      this.resultsScreen.classList.remove("hidden");
      this.resultsScreen.classList.add("fade-in");
    }

    this.renderFinalResults();
  }

  // Render Màn hình kết quả vinh danh với phân tích profile sâu sắc
  renderFinalResults() {
    const totalScore =
      this.stats.communication +
      this.stats.confidence +
      this.stats.humor +
      this.stats.empathy +
      this.stats.respect +
      this.miniGameScore;

    // Xác định danh hiệu dựa trên Profile
    let finalTitle = window.TITLES_DATA.find((t) => t.id === "apprentice"); // default fallback
    for (let t of window.TITLES_DATA) {
      if (typeof t.matches === "function" && t.matches(this.stats, totalScore)) {
        finalTitle = t;
        break;
      }
    }

    const titleMain = document.getElementById("res-title-main");
    const titleSub = document.getElementById("res-title-sub");
    const titleDesc = document.getElementById("res-title-desc");
    const sealEl = document.getElementById("res-seal-stamp");
    const miniScoreText = document.getElementById("res-minigame-score");

    if (titleMain) titleMain.textContent = finalTitle.title;
    if (titleSub) titleSub.textContent = finalTitle.subTitle;
    if (titleDesc) titleDesc.textContent = finalTitle.description;
    if (sealEl) sealEl.textContent = finalTitle.stamp;
    if (miniScoreText) {
      const maxPossible = this.miniGame ? this.miniGame.getMaxScore() : 15;
      miniScoreText.textContent = `Điểm Phản Xạ: ${this.miniGameScore} / ${maxPossible}`;
    }

    // Phân tích 3 điểm nổi bật có giá trị cho môn Kỹ Năng Mềm
    this.renderResultsInsights();

    // Vẽ biểu đồ Radar ngũ giác
    setTimeout(() => {
      const radar = new MartialRadarChart("radar-canvas");
      radar.setStats(this.stats);
      window.soundEngine.playSuccess();
    }, 300);
  }

  renderResultsInsights() {
    const strengthEl = document.getElementById("res-insight-strength");
    const growthEl = document.getElementById("res-insight-growth");
    const momentEl = document.getElementById("res-insight-moment");

    // Điểm mạnh nổi bật
    if (strengthEl) {
      if (this.stats.respect >= this.stats.humor && this.stats.respect >= 10) {
        strengthEl.textContent = "Bạn luôn tôn trọng ranh giới và cảm xúc của đối phương, tạo cảm giác an toàn và tin cậy.";
      } else if (this.stats.empathy >= 10) {
        strengthEl.textContent = "Khả năng lắng nghe thấu cảm vượt trội, biết đặt mình vào vị trí của người khác khi họ yếu lòng.";
      } else if (this.stats.humor >= 10) {
        strengthEl.textContent = "Khiếu hài hước duyên dáng, phá vỡ khoảng cách ban đầu một cách tự nhiên và đầy năng lượng.";
      } else {
        strengthEl.textContent = "Sự điềm đạm, không hấp tấp và biết suy nghĩ trước khi đưa ra phản hồi.";
      }
    }

    // Điểm cần rèn giũa
    if (growthEl) {
      if (this.stats.confidence <= 5) {
        growthEl.textContent = "Đôi khi bạn hơi an toàn hoặc ngần ngại bày tỏ mong muốn; hãy dũng cảm và quyết đoán hơn.";
      } else if (this.stats.respect <= 5) {
        growthEl.textContent = "Cần chú ý hơn đến ranh giới cá nhân, tránh việc sắp đặt hoặc nôn nóng khi người khác cần không gian.";
      } else if (this.stats.empathy <= 5) {
        growthEl.textContent = "Nên ưu tiên lắng nghe giải tỏa cảm xúc trước khi vội vã đưa ra lời khuyên hoặc phân tích logic.";
      } else {
        growthEl.textContent = "Tiếp tục duy trì sự cân bằng giữa hài hước vui vẻ và chiều sâu lắng nghe chân thành.";
      }
    }

    // Khoảnh khắc đáng nhớ
    if (momentEl) {
      if (this.choicesHistory.length > 0) {
        // Tìm 1 khoảnh khắc tiêu biểu
        const ch6 = this.choicesHistory.find((h) => h.chapterId === 6);
        const ch5 = this.choicesHistory.find((h) => h.chapterId === 5);
        if (ch6 && ch6.choiceId === "A") {
          momentEl.textContent = "Chương 6: Bạn chọn làm chỗ dựa tĩnh lặng lắng nghe khi Thảo bật khóc vì áp lực dự án.";
        } else if (ch5 && ch5.choiceId === "A") {
          momentEl.textContent = "Chương 5: Lời mời hẹn đi triển lãm tinh tế đúng sở thích và mở lối lui thoải mái cho nàng.";
        } else {
          const first = this.choicesHistory[0];
          momentEl.textContent = `Chương 1: Cách tiếp cận ban đầu tự nhiên giúp phá vỡ sự ngượng ngùng tại quán cafe.`;
        }
      } else {
        momentEl.textContent = "Những bài học giao tiếp chân thành được tích lũy xuyên suốt hành trình.";
      }
    }
  }

  // ==========================================
  // 8. ĐỌC LẠI BÍ KÍP vs CHƠI LẠI TỪ ĐẦU
  // ==========================================
  rereadBook() {
    // ĐỌC LẠI: Giữ nguyên lịch sử, mở lại Chương 1 để người chơi xem lại và có thể đổi đáp án
    this.phase = "reading";
    this.currentChapterIndex = 0;
    this.saveState();

    this.resultsScreen.classList.add("hidden");
    this.bookContainer.classList.remove("hidden");
    this.readingUI.classList.remove("hidden", "fade-out");
    this.bookCoverFront.classList.remove("cover-closing");
    this.bookCoverFront.classList.add("cover-opened");
    this.book3D.classList.remove("book-state-closed");
    this.book3D.classList.add("book-state-open");
    this.bookContainer.classList.remove("camera-zoom-out");
    this.bookContainer.classList.add("camera-zoom-in");
    this.isBookOpen = true;

    this.loadChapter(0);
  }

  resetProgress() {
    if (confirm("Thiếu hiệp có chắc muốn tẩy tủy công phu, bắt đầu lại toàn bộ hành trình từ đầu không?")) {
      this.resetStateToDefault();
      window.location.reload();
    }
  }

  escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

if (typeof window !== "undefined") {
  window.App = App;
  window.addEventListener("DOMContentLoaded", () => {
    window.bktgApp = new App();
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = App;
}
