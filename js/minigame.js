/**
 * BÍ KÍP TÁN GÁI V2 - Mini-game "Phản Xạ Tán Gái" (Speed Dating Reflex)
 * - Sửa lỗi tính điểm (choice.score luôn được cộng đầy đủ)
 * - Timer tính theo timeLimit thực tế của từng câu
 * - Phân loại 4 cấp độ phản hồi (excellent / good / neutral / poor)
 * - Đếm ngược 3..2..1 kịch tính nhẹ, feedback kỹ năng mềm rõ ràng
 */

class MiniGame {
  constructor(options = {}) {
    this.questions = window.MINIGAME_QUESTIONS || [];
    this.currentIndex = 0;
    this.totalScore = 0;
    this.timer = null;
    this.timeLeft = 10;
    this.currentTimeLimit = 10;
    this.isAnswering = false;
    this.onComplete = options.onComplete || (() => {});
    
    this.container = document.getElementById("minigame-screen");
    this.timerBar = document.getElementById("minigame-timer-bar");
    this.timerText = document.getElementById("minigame-timer-text");
    this.questionPrompt = document.getElementById("minigame-prompt");
    this.questionIndexEl = document.getElementById("minigame-q-index");
    this.choicesContainer = document.getElementById("minigame-choices");
    this.reactionBanner = document.getElementById("minigame-reaction-banner");
    this.girlReactionEl = document.getElementById("minigame-girl-reaction");
    this.feedbackTextEl = document.getElementById("minigame-feedback-text");
    this.scoreBadgeEl = document.getElementById("minigame-score-badge");
  }

  // Tính maxScore linh hoạt theo data thực tế
  getMaxScore() {
    return this.questions.reduce((sum, q) => {
      const best = Math.max(...q.choices.map(c => c.score || 0));
      return sum + best;
    }, 0);
  }

  start() {
    this.currentIndex = 0;
    this.totalScore = 0;
    this.isAnswering = false;
    if (this.scoreBadgeEl) this.scoreBadgeEl.textContent = "Điểm: 0";
    this.loadQuestion(0);
  }

  loadQuestion(index) {
    if (index >= this.questions.length) {
      this.finish();
      return;
    }

    this.currentIndex = index;
    const q = this.questions[index];
    this.isAnswering = true;
    this.currentTimeLimit = q.timeLimit || 10;
    this.timeLeft = this.currentTimeLimit;

    // Cập nhật UI
    if (this.questionIndexEl) {
      this.questionIndexEl.textContent = `Thử Thách ${index + 1} / ${this.questions.length}`;
    }
    if (this.questionPrompt) {
      this.questionPrompt.innerHTML = `<span class="mg-quote-mark">“</span>${q.prompt}<span class="mg-quote-mark">”</span>`;
    }
    if (this.reactionBanner) {
      this.reactionBanner.classList.add("hidden");
    }

    // Render 4 lựa chọn phản xạ
    if (this.choicesContainer) {
      this.choicesContainer.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      q.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.className = "mg-choice-btn";
        btn.innerHTML = `
          <span class="mg-choice-letter">${letters[i]}</span>
          <span class="mg-choice-text">${choice.text}</span>
        `;
        btn.onclick = () => this.handleAnswer(choice, btn);
        this.choicesContainer.appendChild(btn);
      });
    }

    this.startTimer();
  }

  startTimer() {
    clearInterval(this.timer);
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      // Âm thanh tích tắc cảnh báo
      if (window.soundEngine) {
        window.soundEngine.playTick(this.timeLeft <= 3);
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeout();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    if (this.timerText) {
      this.timerText.textContent = `${this.timeLeft}s`;
    }
    if (this.timerBar) {
      const percentage = Math.max(0, (this.timeLeft / this.currentTimeLimit) * 100);
      this.timerBar.style.width = `${percentage}%`;
      if (this.timeLeft <= 3) {
        this.timerBar.classList.add("urgent");
        if (this.timerText) this.timerText.classList.add("pulse-urgent");
      } else {
        this.timerBar.classList.remove("urgent");
        if (this.timerText) this.timerText.classList.remove("pulse-urgent");
      }
    }
  }

  handleAnswer(choice, buttonEl) {
    if (!this.isAnswering) return;
    this.isAnswering = false;
    clearInterval(this.timer);

    if (window.soundEngine) {
      window.soundEngine.playChoiceClick();
    }

    // Khóa tất cả các nút
    const allBtns = this.choicesContainer.querySelectorAll(".mg-choice-btn");
    allBtns.forEach((b) => b.classList.add("disabled"));
    buttonEl.classList.add("selected");

    // SỬA LỖI ĐIỂM: Luôn cộng điểm của lựa chọn (kể cả 1, 2 hay 3)
    this.totalScore += (choice.score || 0);

    // Phân loại visual feedback: 3=excellent, 2=good, 1=neutral, 0=poor
    let tierClass = "tier-neutral";
    if (choice.score >= 3) {
      tierClass = "tier-excellent";
      if (window.soundEngine) setTimeout(() => window.soundEngine.playSuccess(), 120);
    } else if (choice.score === 2) {
      tierClass = "tier-good";
      if (window.soundEngine) setTimeout(() => window.soundEngine.playSuccess(), 120);
    } else if (choice.score === 1) {
      tierClass = "tier-neutral";
    } else {
      tierClass = "tier-poor";
    }

    buttonEl.classList.add(tierClass);

    if (this.scoreBadgeEl) {
      this.scoreBadgeEl.textContent = `Điểm: ${this.totalScore}`;
    }

    // Hiển thị phản ứng tức thì & Kỹ năng liên quan
    this.showReaction(choice.reaction, choice.feedback, choice.skill, tierClass);

    // Chuyển sang câu tiếp theo
    setTimeout(() => {
      this.loadQuestion(this.currentIndex + 1);
    }, 2400);
  }

  handleTimeout() {
    if (!this.isAnswering) return;
    this.isAnswering = false;

    const allBtns = this.choicesContainer.querySelectorAll(".mg-choice-btn");
    allBtns.forEach((b) => b.classList.add("disabled"));

    this.showReaction(
      "⏳",
      "Hết giờ! Đại hiệp suy nghĩ lâu quá, cơ hội đã trôi theo gió... (+0 điểm)",
      "Do dự quá lâu",
      "tier-poor"
    );

    setTimeout(() => {
      this.loadQuestion(this.currentIndex + 1);
    }, 2400);
  }

  showReaction(emoji, feedback, skill, tierClass) {
    if (!this.reactionBanner) return;
    this.reactionBanner.classList.remove("hidden");
    this.reactionBanner.className = `minigame-reaction-banner ${tierClass}`;

    if (this.girlReactionEl) {
      this.girlReactionEl.textContent = emoji;
    }
    if (this.feedbackTextEl) {
      const skillTag = skill ? `<span class="mg-skill-tag">💡 ${skill}</span>` : "";
      this.feedbackTextEl.innerHTML = `<div>${feedback}</div>${skillTag}`;
    }
  }

  finish() {
    clearInterval(this.timer);
    if (this.onComplete) {
      this.onComplete(this.totalScore, this.getMaxScore());
    }
  }
}

window.MiniGame = MiniGame;
