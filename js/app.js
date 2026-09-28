/**
 * BÍ KÍP TÁN GÁI - Main Application Coordinator
 * Quản lý trạng thái, hoạt ảnh 3D sách, lật trang, chat tuần tự, lưu trữ localStorage
 */

class App {
  constructor() {
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
    this.isPageTurning = false;
    this.hasAnsweredCurrent = false;
    this.miniGameScore = 0;
    this.currentChapterChoice = null;
    this.isAnsweringBranch = false;

    // DOM Elements
    this.bookContainer = document.getElementById("book-container");
    this.book3D = document.getElementById("book-3d");
    this.bookCoverFront = document.getElementById("book-cover-front");
    this.bookPageFlipper = document.getElementById("book-page-flipper");
    
    // Screens
    this.introOverlay = document.getElementById("intro-overlay");
    this.readingUI = document.getElementById("reading-ui");
    this.cinematicOverlay = document.getElementById("cinematic-overlay");
    this.minigameScreen = document.getElementById("minigame-screen");
    this.resultsScreen = document.getElementById("results-screen");

    // Audio & Controls
    this.soundToggleBtn = document.getElementById("sound-toggle-btn");
    this.resetBtn = document.getElementById("reset-btn");
    this.openBookBtn = document.getElementById("btn-open-book");
    this.startMinigameBtn = document.getElementById("btn-start-minigame");

    // Chat Elements
    this.chatMessagesContainer = document.getElementById("chat-messages");
    this.choicesContainer = document.getElementById("scenario-choices");
    this.nextPageBtn = document.getElementById("btn-next-page");
    this.ancientCommentBox = document.getElementById("ancient-comment-box");
    this.reselectHint = document.getElementById("reselect-hint");

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

    // Mouse tilt tracking
    this.tiltX = 0;
    this.tiltY = 0;
    this.targetTiltX = 0;
    this.targetTiltY = 0;
    this.isBookOpen = false;

    this.init();
  }

  init() {
    this.loadState();
    this.bindEvents();
    this.setupTiltEffect();
    this.updateSoundButtonUI();

    // Khởi tạo mini-game engine
    this.miniGame = new MiniGame({
      onComplete: (score, maxScore) => this.handleMiniGameComplete(score, maxScore)
    });
  }

  loadState() {
    try {
      const savedChapter = localStorage.getItem("bktg_chapter");
      const savedStats = localStorage.getItem("bktg_stats");
      const savedHistory = localStorage.getItem("bktg_history");
      const savedStep = localStorage.getItem("bktg_step");

      if (savedStats) this.stats = JSON.parse(savedStats);
      if (savedHistory) this.choicesHistory = JSON.parse(savedHistory);
      if (savedChapter !== null) this.currentChapterIndex = parseInt(savedChapter, 10);

      // Nếu đã từng mở sách và đang ở dở dang
      if (savedStep === "reading" && this.currentChapterIndex < window.SCENARIOS_DATA.length) {
        if (this.openBookBtn) {
          this.openBookBtn.innerHTML = `✨ TIẾP TỤC ĐỌC (CHƯƠNG ${this.currentChapterIndex + 1}) ✨`;
        }
      }
    } catch (e) {
      console.warn("Could not load saved state:", e);
    }
  }

  saveState(step = "reading") {
    try {
      localStorage.setItem("bktg_step", step);
      localStorage.setItem("bktg_chapter", this.currentChapterIndex);
      localStorage.setItem("bktg_stats", JSON.stringify(this.stats));
      localStorage.setItem("bktg_history", JSON.stringify(this.choicesHistory));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  resetProgress() {
    if (confirm("Thiếu hiệp có chắc muốn tẩy tủy công phu, đọc lại bí kíp từ đầu không?")) {
      localStorage.removeItem("bktg_step");
      localStorage.removeItem("bktg_chapter");
      localStorage.removeItem("bktg_stats");
      localStorage.removeItem("bktg_history");
      window.location.reload();
    }
  }

  bindEvents() {
    // Nút Âm Thanh
    if (this.soundToggleBtn) {
      this.soundToggleBtn.addEventListener("click", () => {
        const isMuted = window.soundEngine.toggleMute();
        this.updateSoundButtonUI(isMuted);
      });
    }

    // Nút Đặt Lại Tiến Trình
    if (this.resetBtn) {
      this.resetBtn.addEventListener("click", () => this.resetProgress());
    }

    // Nút MỞ BÍ KÍP ở trang bìa
    if (this.openBookBtn) {
      this.openBookBtn.addEventListener("click", () => this.openBook());
    }

    // Nút Lật sang trang tiếp theo
    if (this.nextPageBtn) {
      this.nextPageBtn.addEventListener("click", () => this.nextChapter());
    }

    // Nút Lùi lại chương trước
    if (this.prevPageBtn) {
      this.prevPageBtn.addEventListener("click", () => this.prevChapter());
    }

    // Click góc trang phải để lật trang tới
    const cornerPeel = document.getElementById("page-corner-peel");
    if (cornerPeel) {
      cornerPeel.addEventListener("click", () => {
        if (this.hasAnsweredCurrent && !this.isPageTurning) {
          this.nextChapter();
        }
      });
    }

    // Click góc trang trái để lật trang lùi
    if (this.cornerPeelLeft) {
      this.cornerPeelLeft.addEventListener("click", () => {
        if (!this.isPageTurning && this.currentChapterIndex > 0) {
          this.prevChapter();
        }
      });
    }

    // Nút THỬ THÁCH CUỐI CÙNG (sau khi đóng sách)
    if (this.startMinigameBtn) {
      this.startMinigameBtn.addEventListener("click", () => this.startFinalTrial());
    }

    // Phím tắt bàn phím
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (this.hasAnsweredCurrent && !this.isPageTurning && this.isBookOpen) {
          this.nextChapter();
        }
      } else if (e.key === "ArrowLeft") {
        if (!this.isPageTurning && this.isBookOpen && this.currentChapterIndex > 0) {
          this.prevChapter();
        }
      }
    });
  }

  updateSoundButtonUI(isMuted = window.soundEngine.isMuted) {
    if (!this.soundToggleBtn) return;
    this.soundToggleBtn.innerHTML = isMuted
      ? `<span class="sound-icon">🔇</span><span class="btn-text">Âm thanh: Tắt</span>`
      : `<span class="sound-icon">🔊</span><span class="btn-text">Âm thanh: Bật</span>`;
  }

  setupTiltEffect() {
    window.addEventListener("mousemove", (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Khi sách đóng thì nghiêng nhiều hơn, khi mở thì nghiêng nhẹ để dễ đọc
      const intensity = this.isBookOpen ? 4.5 : 12;
      this.targetTiltY = ((e.clientX - cx) / cx) * intensity;
      this.targetTiltX = -((e.clientY - cy) / cy) * intensity;
    });

    const updateTilt = () => {
      this.tiltX += (this.targetTiltX - this.tiltX) * 0.08;
      this.tiltY += (this.targetTiltY - this.tiltY) * 0.08;

      if (this.book3D) {
        const isMobile = window.innerWidth <= 992;
        const offsetX = (!this.isBookOpen && !isMobile) ? -240 : 0;
        if (!this.isBookOpen) {
          this.book3D.style.transform = `translateX(${offsetX}px) rotateX(${this.tiltX}deg) rotateY(${this.tiltY}deg)`;
        } else {
          this.book3D.style.transform = `translateX(0px) rotateX(${this.tiltX * 0.4}deg) rotateY(${this.tiltY * 0.4}deg)`;
        }
      }
      requestAnimationFrame(updateTilt);
    };

    requestAnimationFrame(updateTilt);
  }

  // Mở sách từ màn hình bìa
  openBook(immediate = false) {
    window.soundEngine.initContext();
    if (!immediate) {
      window.soundEngine.playBookOpen();
      window.soundEngine.startAmbient();
    }

    if (this.openBookBtn) this.openBookBtn.disabled = true;

    // Animation mở bìa sách
    this.bookContainer.classList.add("camera-zoom-in");
    this.book3D.classList.remove("book-state-closed");
    this.book3D.classList.add("book-state-open");
    this.bookCoverFront.classList.add("cover-opened");
    this.isBookOpen = true;

    const delay = immediate ? 0 : 800;
    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex);
      this.saveState("reading");
    }, delay);
  }

  // Tải nội dung chương tương ứng
  loadChapter(index) {
    if (index >= window.SCENARIOS_DATA.length) {
      this.triggerBookClosingSequence();
      return;
    }

    this.currentChapterIndex = index;
    this.hasAnsweredCurrent = false;
    this.currentChapterChoice = null;
    this.isAnsweringBranch = false;
    const scenario = window.SCENARIOS_DATA[index];

    // Cập nhật Trang Trái
    if (this.chapterBadge) this.chapterBadge.textContent = scenario.badge;
    if (this.chapterTitle) this.chapterTitle.textContent = `${scenario.chapter}: ${scenario.chapterTitle}`;
    if (this.chapterSetting) this.chapterSetting.textContent = scenario.setting;
    if (this.chapterContext) this.chapterContext.textContent = scenario.context;
    if (this.chapterWisdom) this.chapterWisdom.textContent = scenario.ancientWisdom;
    if (this.bookmarkProgress) {
      this.bookmarkProgress.textContent = `Chương ${index + 1} / ${window.SCENARIOS_DATA.length}`;
    }

    // Cập nhật nút lật lùi chương trước
    if (this.prevPageBtn) {
      if (index > 0) this.prevPageBtn.classList.remove("hidden");
      else this.prevPageBtn.classList.add("hidden");
    }
    if (this.cornerPeelLeft) {
      if (index > 0) this.cornerPeelLeft.classList.remove("hidden");
      else this.cornerPeelLeft.classList.add("hidden");
    }

    // Ẩn bình chú cổ thư & nút tiếp theo
    if (this.ancientCommentBox) this.ancientCommentBox.classList.add("hidden");
    if (this.nextPageBtn) this.nextPageBtn.classList.add("hidden");

    // Xóa chat cũ và tải tuần tự
    this.renderChatSequence(scenario);
    this.renderChoices(scenario);

    // Lưu lại tiến trình
    this.saveState("reading");
  }

  // Render đoạn chat theo tuần tự mượt mà
  renderChatSequence(scenario) {
    if (!this.chatMessagesContainer) return;
    this.chatMessagesContainer.innerHTML = "";

    // 1. Hiện các tin nhắn mở màn (initial messages)
    let delay = 350;
    scenario.initialMessages.forEach((msg, idx) => {
      setTimeout(() => {
        this.appendMessage(msg.sender, msg.text, msg.time);
        if (msg.sender === "girl") {
          window.soundEngine.playMessageReceived();
        }
      }, delay);
      delay += 850;
    });
  }

  // Thêm tin nhắn vào khung chat
  appendMessage(sender, text, time = "Vừa xong", customClass = "") {
    if (!this.chatMessagesContainer) return;

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

  // Hiển thị bong bóng typing "● ● ●"
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
    if (existing) existing.remove();
  }

  scrollChatToBottom() {
    if (this.chatMessagesContainer) {
      this.chatMessagesContainer.scrollTop = this.chatMessagesContainer.scrollHeight;
    }
  }

  // Render 4 lựa chọn (Hỗ trợ chọn lại linh hoạt)
  renderChoices(scenario) {
    if (!this.choicesContainer) return;
    this.choicesContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];
    scenario.choices.forEach((choice, index) => {
      const card = document.createElement("button");
      card.className = "choice-card choice-enter";
      card.id = `choice-card-${choice.id}`;
      card.style.animationDelay = `${index * 110}ms`;
      card.innerHTML = `
        <div class="choice-letter-seal">${letters[index]}</div>
        <div class="choice-body">
          <div class="choice-tag">${choice.tag}</div>
          <div class="choice-text">${choice.text}</div>
        </div>
      `;
      card.onclick = () => this.handleChoiceSelect(choice, card, scenario);
      this.choicesContainer.appendChild(card);
    });
  }

  // Xử lý khi người chơi bấm 1 trong 4 lựa chọn (HỖ TRỢ CHỌN LẠI BẤT KỲ LÚC NÀO)
  handleChoiceSelect(choice, cardEl, scenario) {
    if (this.isAnsweringBranch) return; // Đang chạy animation typing thì chờ 1 chút
    if (this.currentChapterChoice && this.currentChapterChoice.id === choice.id) return; // Đang chọn chính thẻ này

    this.isAnsweringBranch = true;
    window.soundEngine.playChoiceClick();

    // 1. Nếu trước đó đã chọn lựa chọn khác ở chương này, hoàn lại (rollback) điểm số cũ
    if (this.currentChapterChoice) {
      for (let key in this.currentChapterChoice.effects) {
        if (this.stats[key] !== undefined) {
          this.stats[key] -= this.currentChapterChoice.effects[key];
        }
      }
    }

    // 2. Ghi nhận lựa chọn mới
    this.currentChapterChoice = choice;
    this.hasAnsweredCurrent = true;

    for (let key in choice.effects) {
      if (this.stats[key] !== undefined) {
        this.stats[key] += choice.effects[key];
      }
    }

    // Cập nhật lịch sử
    const histIdx = this.choicesHistory.findIndex((h) => h.chapter === scenario.id);
    if (histIdx >= 0) {
      this.choicesHistory[histIdx] = {
        chapter: scenario.id,
        choiceId: choice.id,
        tag: choice.tag
      };
    } else {
      this.choicesHistory.push({
        chapter: scenario.id,
        choiceId: choice.id,
        tag: choice.tag
      });
    }

    // 3. Cập nhật giao diện các card:
    const allCards = this.choicesContainer.querySelectorAll(".choice-card");
    allCards.forEach((c) => {
      c.classList.remove("selected-card");
      c.classList.remove("can-reselect");
      c.classList.add("choice-busy"); // Khóa tạm trong lúc hiển thị tin nhắn
    });
    cardEl.classList.add("selected-card");

    // Xóa tin nhắn branch cũ nếu có để thay thế bằng cách ứng đối mới
    const oldBranchMsgs = this.chatMessagesContainer.querySelectorAll(".branch-msg-player, .branch-msg-girl");
    oldBranchMsgs.forEach((m) => m.remove());

    // 4. Tin nhắn người chơi xuất hiện trong khung chat
    setTimeout(() => {
      this.appendMessage("player", choice.playerMessage, "Vừa xong", "branch-msg-player");
      window.soundEngine.playMessageSent();
    }, 250);

    // 5. Hiện hiệu ứng "đang nhập..."
    setTimeout(() => {
      this.showTypingIndicator();
    }, 950);

    // 6. Cô gái phản hồi tin nhắn
    setTimeout(() => {
      this.removeTypingIndicator();
      this.appendMessage("girl", choice.girlReply, "Vừa xong", "branch-msg-girl");
      window.soundEngine.playMessageReceived();

      // 7. Hiển thị bình chú cổ thư và nút tiếp tục
      this.showOutcomeFeedback(choice);

      // 8. Mở khóa cho phép chọn lại các thẻ khác!
      allCards.forEach((c) => {
        c.classList.remove("choice-busy");
        if (c !== cardEl) {
          c.classList.add("can-reselect");
          c.title = "Bấm để thử cách trả lời này!";
        }
      });
      this.isAnsweringBranch = false;
      this.saveState("reading");
    }, 2200);
  }

  showOutcomeFeedback(choice) {
    if (this.ancientCommentBox) {
      this.ancientCommentBox.classList.remove("hidden");
      this.ancientCommentBox.innerHTML = `
        <div class="ancient-comment-header">
          <span class="seal-mini">BÌNH</span>
          <span class="ancient-comment-title">Bí Kíp Tiền Nhân Nhận Xét:</span>
        </div>
        <div class="ancient-comment-content">
          ${choice.ancientComment}
        </div>
      `;
    }

    if (this.nextPageBtn) {
      this.nextPageBtn.classList.remove("hidden");
      this.nextPageBtn.classList.add("pulse-glow");
      this.nextPageBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  // Lật sang chương tiếp theo với Animation 3D chân thực
  nextChapter() {
    if (this.isPageTurning) return;

    if (this.currentChapterIndex >= window.SCENARIOS_DATA.length - 1) {
      this.triggerBookClosingSequence();
      return;
    }

    this.isPageTurning = true;
    window.soundEngine.playPageFlip();

    // Chuẩn bị nội dung preview trên mặt lá trang lật
    if (this.flipperFrontContent) {
      const curScenario = window.SCENARIOS_DATA[this.currentChapterIndex];
      this.flipperFrontContent.innerHTML = `
        <div style="font-family: var(--font-title); font-size: 13px; color: var(--seal-red);">${curScenario.chapter}</div>
        <div style="font-family: var(--font-serif); font-size: 16px; font-weight: bold; color: var(--ink-primary);">${curScenario.chapterTitle}</div>
        <div style="font-size: 11px; color: var(--ink-secondary); font-style: italic;">Đang lật sang chương tiếp theo...</div>
      `;
    }

    if (this.bookPageFlipper) {
      this.bookPageFlipper.classList.remove("hidden");
      this.bookPageFlipper.classList.remove("flip-backward");
      this.bookPageFlipper.classList.add("flip-forward");
    }

    if (this.shadowLeft) this.shadowLeft.classList.add("shadow-active");
    if (this.shadowRight) this.shadowRight.classList.add("shadow-active");

    // Đổi nội dung chương mới khi trang xoay được 90 độ (475ms)
    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex + 1);
    }, 475);

    setTimeout(() => {
      if (this.bookPageFlipper) {
        this.bookPageFlipper.classList.remove("flip-forward");
        this.bookPageFlipper.classList.add("hidden");
      }
      if (this.shadowLeft) this.shadowLeft.classList.remove("shadow-active");
      if (this.shadowRight) this.shadowRight.classList.remove("shadow-active");
      this.isPageTurning = false;
    }, 950);
  }

  // Lật lùi lại chương trước với Animation 3D (Lật từ trái sang phải)
  prevChapter() {
    if (this.isPageTurning || this.currentChapterIndex <= 0) return;
    this.isPageTurning = true;

    window.soundEngine.playPageFlip();

    if (this.bookPageFlipper) {
      this.bookPageFlipper.classList.remove("hidden");
      this.bookPageFlipper.classList.remove("flip-forward");
      this.bookPageFlipper.classList.add("flip-backward");
    }

    if (this.shadowLeft) this.shadowLeft.classList.add("shadow-active");
    if (this.shadowRight) this.shadowRight.classList.add("shadow-active");

    // Đổi nội dung chương trước khi trang xoay được 90 độ
    setTimeout(() => {
      this.loadChapter(this.currentChapterIndex - 1);
    }, 475);

    setTimeout(() => {
      if (this.bookPageFlipper) {
        this.bookPageFlipper.classList.remove("flip-backward");
        this.bookPageFlipper.classList.add("hidden");
      }
      if (this.shadowLeft) this.shadowLeft.classList.remove("shadow-active");
      if (this.shadowRight) this.shadowRight.classList.remove("shadow-active");
      this.isPageTurning = false;
    }, 950);
  }

  // Chuỗi đóng sách sau khi hoàn thành 7 chương
  triggerBookClosingSequence() {
    if (this.readingUI) this.readingUI.classList.add("fade-out");

    setTimeout(() => {
      if (this.readingUI) this.readingUI.classList.add("hidden");
      
      // Animation đóng bìa sách 3D
      if (this.bookCoverFront) {
        this.bookCoverFront.classList.remove("cover-opened");
        this.bookCoverFront.classList.add("cover-closing");
      }
      this.bookContainer.classList.remove("camera-zoom-in");
      this.bookContainer.classList.add("camera-zoom-out");
      this.isBookOpen = false;

      // Tiếng đóng sách
      window.soundEngine.playBookClose();

      // Hiện con dấu đã lĩnh hội sau 600ms
      setTimeout(() => {
        window.soundEngine.playSealStamp();
        if (this.cinematicOverlay) {
          this.cinematicOverlay.classList.remove("hidden");
          this.cinematicOverlay.classList.add("fade-in");
        }
      }, 700);
    }, 600);
  }

  // Bắt đầu Mini Game phản xạ
  startFinalTrial() {
    if (this.cinematicOverlay) this.cinematicOverlay.classList.add("hidden");
    if (this.bookContainer) this.bookContainer.classList.add("hidden");
    if (this.minigameScreen) {
      this.minigameScreen.classList.remove("hidden");
      this.minigameScreen.classList.add("fade-in");
    }

    this.miniGame.start();
  }

  // Hoàn thành Mini Game -> Tính toán & Hiện màn hình kết quả
  handleMiniGameComplete(score, maxScore) {
    this.miniGameScore = score;
    if (this.minigameScreen) this.minigameScreen.classList.add("hidden");
    if (this.resultsScreen) {
      this.resultsScreen.classList.remove("hidden");
      this.resultsScreen.classList.add("fade-in");
    }

    this.renderFinalResults();
  }

  // Render Màn hình kết quả vinh danh
  renderFinalResults() {
    // 1. Tính tổng điểm
    const totalScore =
      this.stats.communication +
      this.stats.confidence +
      this.stats.humor +
      this.stats.empathy +
      this.stats.respect +
      this.miniGameScore;

    // 2. Xác định danh hiệu phù hợp
    let finalTitle = window.TITLES_DATA[window.TITLES_DATA.length - 1]; // Mặc định tự hủy nếu âm
    for (let t of window.TITLES_DATA) {
      if (totalScore >= t.minTotalScore && this.miniGameScore >= t.minMiniScore) {
        finalTitle = t;
        break;
      }
    }

    // 3. Render HTML
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
      miniScoreText.textContent = `Điểm Phản Xạ: ${this.miniGameScore} / 15`;
    }

    // 4. Vẽ Radar Chart ngũ giác
    setTimeout(() => {
      const radar = new MartialRadarChart("radar-canvas");
      radar.setStats(this.stats);
      window.soundEngine.playSuccess();
    }, 300);

    // 5. Gắn sự kiện nút đọc lại & chơi lại
    const btnReRead = document.getElementById("btn-reread-book");
    const btnReplay = document.getElementById("btn-replay-all");

    if (btnReRead) {
      btnReRead.onclick = () => {
        this.resultsScreen.classList.add("hidden");
        this.bookContainer.classList.remove("hidden");
        this.readingUI.classList.remove("hidden");
        this.readingUI.classList.remove("fade-out");
        this.bookCoverFront.classList.remove("cover-closing");
        this.bookCoverFront.classList.add("cover-opened");
        this.book3D.classList.remove("book-state-closed");
        this.book3D.classList.add("book-state-open");
        this.bookContainer.classList.remove("camera-zoom-out");
        this.bookContainer.classList.add("camera-zoom-in");
        this.isBookOpen = true;
        this.loadChapter(0);
      };
    }

    if (btnReplay) {
      btnReplay.onclick = () => this.resetProgress();
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

window.addEventListener("DOMContentLoaded", () => {
  window.bktgApp = new App();
});
