/**
 * BÍ KÍP TÁN GÁI - Web Audio API Procedural Sound Engine
 * Tự tổng hợp âm thanh chân thực, không cần tải file ngoài, hoạt động 100% offline!
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientInterval = null;
    this.ambientPlaying = false;
    this.masterGain = null;
    
    // Đọc trạng thái mute từ localStorage
    const savedMute = localStorage.getItem("bktg_muted");
    if (savedMute !== null) {
      this.isMuted = savedMute === "true";
    }
  }

  // Khởi tạo AudioContext sau tương tác người dùng
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.65, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.initContext();
    this.isMuted = !this.isMuted;
    localStorage.setItem("bktg_muted", this.isMuted);
    
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.65, now + 0.1);
    }

    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }

    return this.isMuted;
  }

  // Âm thanh lật sách (Tiếng sột soạt giấy da cổ 2 tầng chân thực)
  playPageFlip() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Lớp 1: Tiếng nhấc mép giấy (ma sát ban đầu)
    const dur1 = 0.18;
    const bufSize1 = Math.floor(this.ctx.sampleRate * dur1);
    const buf1 = this.ctx.createBuffer(1, bufSize1, this.ctx.sampleRate);
    const data1 = buf1.getChannelData(0);
    for (let i = 0; i < bufSize1; i++) {
      data1[i] = (Math.random() * 2 - 1) * (1 - i / bufSize1);
    }
    const noise1 = this.ctx.createBufferSource();
    noise1.buffer = buf1;

    const filter1 = this.ctx.createBiquadFilter();
    filter1.type = "bandpass";
    filter1.frequency.setValueAtTime(1400, t);
    filter1.frequency.exponentialRampToValueAtTime(3200, t + 0.08);
    filter1.Q.setValueAtTime(2.8, t);

    const gain1 = this.ctx.createGain();
    gain1.gain.setValueAtTime(0.01, t);
    gain1.gain.linearRampToValueAtTime(0.35, t + 0.04);
    gain1.gain.exponentialRampToValueAtTime(0.001, t + dur1);

    noise1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(this.masterGain);
    noise1.start(t);

    // Lớp 2: Tiếng lá trang lượn qua không khí và đáp xuống (flutter & landing)
    const t2 = t + 0.11;
    const dur2 = 0.32;
    const bufSize2 = Math.floor(this.ctx.sampleRate * dur2);
    const buf2 = this.ctx.createBuffer(1, bufSize2, this.ctx.sampleRate);
    const data2 = buf2.getChannelData(0);
    for (let i = 0; i < bufSize2; i++) {
      data2[i] = (Math.random() * 2 - 1) * Math.exp(-3.5 * (i / bufSize2));
    }
    const noise2 = this.ctx.createBufferSource();
    noise2.buffer = buf2;

    const filter2 = this.ctx.createBiquadFilter();
    filter2.type = "lowpass";
    filter2.frequency.setValueAtTime(2400, t2);
    filter2.frequency.exponentialRampToValueAtTime(600, t2 + dur2);
    filter2.Q.setValueAtTime(1.6, t2);

    const gain2 = this.ctx.createGain();
    gain2.gain.setValueAtTime(0.01, t2);
    gain2.gain.linearRampToValueAtTime(0.48, t2 + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.001, t2 + dur2);

    noise2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.masterGain);
    noise2.start(t2);
  }

  // Âm thanh mở sách (Tiếng va đập bìa gỗ da cổ trầm ấm)
  playBookOpen() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    
    // Âm trầm gáy sách
    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.3);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.35);

    // Kèm theo tiếng lật bìa nhẹ
    setTimeout(() => this.playPageFlip(), 70);
  }

  // Âm thanh đóng sách (Tiếng cộp bìa dứt khoát)
  playBookClose() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.4);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  // Âm thanh gửi tin nhắn (Pop êm ái)
  playMessageSent() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(480, t);
    osc.frequency.exponentialRampToValueAtTime(740, t + 0.08);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  // Âm thanh nhận tin nhắn (Ding trong trẻo)
  playMessageReceived() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    
    // Double ding
    [0, 0.08].forEach((delay, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      const freq = idx === 0 ? 659.25 : 880; // E5 -> A5
      osc.frequency.setValueAtTime(freq, t + delay);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + delay);
      osc.stop(t + delay + 0.25);
    });
  }

  // Tiếng gõ phím / typing nhẹ
  playTyping() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(800 + Math.random() * 200, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.03, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.04);
  }

  // Tiếng bấm chọn đáp án (tiếng mộc gõ)
  playChoiceClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.09);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.1);
  }

  // Tiếng đóng dấu son đỏ hào sảng (Thump + gong sub)
  playSealStamp() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Sub bass
    const sub = this.ctx.createOscillator();
    sub.type = "sine";
    sub.frequency.setValueAtTime(110, t);
    sub.frequency.exponentialRampToValueAtTime(25, t + 0.5);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.9, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    sub.connect(subGain);
    subGain.connect(this.masterGain);
    sub.start(t);
    sub.stop(t + 0.6);

    // Crack slap
    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(350, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.15);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.18);
  }

  // Tiếng đếm ngược tích tắc (10s timer)
  playTick(isUrgent = false) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(isUrgent ? 1100 : 750, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(isUrgent ? 0.25 : 0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // Âm thanh chiến thắng / điểm cao (Ngũ cung cổ phong thăng hoa)
  playSuccess() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Thang âm ngũ cung Trung Hoa: C4, D4, E4, G4, A4, C5
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

    notes.forEach((freq, idx) => {
      const delay = idx * 0.07;
      const osc = this.ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + delay);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + delay);
      osc.stop(t + delay + 0.4);
    });
  }

  // Nhạc nền Cổ Phong Ambient (Guzheng arpeggiator siêu êm ái)
  startAmbient() {
    if (this.isMuted || this.ambientPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.ambientPlaying = true;
    const pentatonic = [196.00, 220.00, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // G3 - C5
    
    // Mỗi 3.5s gảy một tổ hợp nốt cổ phong trầm ấm
    this.ambientInterval = setInterval(() => {
      if (this.isMuted || !this.ctx) return;
      const t = this.ctx.currentTime;
      const count = 3;
      for (let i = 0; i < count; i++) {
        const noteIndex = Math.floor(Math.random() * pentatonic.length);
        const freq = pentatonic[noteIndex];
        const delay = i * 0.28;

        const osc = this.ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t + delay);

        // Lớp hòa âm thứ 2 tạo độ sâu huyền bí
        const subOsc = this.ctx.createOscillator();
        subOsc.type = "triangle";
        subOsc.frequency.setValueAtTime(freq / 2, t + delay);

        const noteGain = this.ctx.createGain();
        noteGain.gain.setValueAtTime(0.04, t + delay);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 1.8);

        osc.connect(noteGain);
        subOsc.connect(noteGain);
        noteGain.connect(this.masterGain);

        osc.start(t + delay);
        subOsc.start(t + delay);
        osc.stop(t + delay + 1.8);
        subOsc.stop(t + delay + 1.8);
      }
    }, 3600);
  }

  stopAmbient() {
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
    this.ambientPlaying = false;
  }
}

window.soundEngine = new SoundEngine();
