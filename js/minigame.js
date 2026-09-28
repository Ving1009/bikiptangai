/**
 * BÍ KÍP TÁN GÁI - Mini-game "Phản Xạ Tán Gái" (Speed Dating Reflex)
 * 5 câu hỏi tình huống dồn dập, đồng hồ đếm ngược 10 giây kịch tính
 */

class MiniGame {
  constructor(options = {}) {
    this.questions = window.MINIGAME_QUESTIONS || [];
    this.currentIndex = 0;
    this.totalScore = 0;
    this.timer = null;
    this.timeLeft = 10;
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
    this.timeLeft = q.timeLimit || 10;

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

    // Render 4 lựa chọn
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

    // Khởi động đồng hồ đếm ngược 10 giây
    this.startTimer();
  }

  startTimer() {
    clearInterval(this.timer);
    this.updateTimerDisplay();

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      // Âm thanh tích tắc
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
      const percentage = (this.timeLeft / 10) * 100;
      this.timerBar.style.width = `${percentage}%`;
      if (this.timeLeft <= 3) {
        this.timerBar.classList.add("urgent");
      } else {
        this.timerBar.classList.remove("urgent");
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

    const isGood = choice.score >= 2;
    if (isGood) {
      buttonEl.classList.add("good");
      this.totalScore += choice.score;
      if (window.soundEngine) setTimeout(() => window.soundEngine.playSuccess(), 120);
    } else {
      buttonEl.classList.add("bad");
    }

    if (this.scoreBadgeEl) {
      this.scoreBadgeEl.textContent = `Điểm: ${this.totalScore}`;
    }

    // Hiển thị phản ứng tức thì của nàng
    this.showReaction(choice.reaction, choice.feedback, isGood);

    // Chuyển câu tiếp theo sau 2.2 giây
    setTimeout(() => {
      this.loadQuestion(this.currentIndex + 1);
    }, 2400);
  }

  handleTimeout() {
    if (!this.isAnswering) return;
    this.isAnswering = false;

    const allBtns = this.choicesContainer.querySelectorAll(".mg-choice-btn");
    allBtns.forEach((b) => b.classList.add("disabled"));

    this.showReaction("⏳", "Hết giờ! Do dự là tự sát trong tình trường! (0 điểm)", false);

    setTimeout(() => {
      this.loadQuestion(this.currentIndex + 1);
    }, 2400);
  }

  showReaction(emoji, feedback, isGood) {
    if (!this.reactionBanner) return;
    this.reactionBanner.classList.remove("hidden");
    this.reactionBanner.className = `minigame-reaction-banner ${isGood ? "reaction-good" : "reaction-bad"}`;

    if (this.girlReactionEl) {
      this.girlReactionEl.textContent = emoji;
    }
    if (this.feedbackTextEl) {
      this.feedbackTextEl.textContent = feedback;
    }
  }

  finish() {
    clearInterval(this.timer);
    if (this.onComplete) {
      this.onComplete(this.totalScore, this.questions.length * 3);
    }
  }
}

window.MiniGame = MiniGame;
