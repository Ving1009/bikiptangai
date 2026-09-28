/**
 * BÍ KÍP TÁN GÁI V2 - Background Particles & Ambient Lighting
 * - High-DPI (Retina) support với DPR cap 2
 * - Tự động tạm dừng khi tab bị ẩn (visibilitychange)
 * - Tôn trọng prefers-reduced-motion
 * - Tối ưu hiệu năng trên mobile (giảm số lượng particle)
 */

class AmbientParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.width = 0;
    this.height = 0;
    this.time = 0;
    this.animationId = null;
    this.isPaused = false;
    this.dpr = 1;

    this.reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.isMobile = window.innerWidth <= 768;
    this.particleCount = this.reducedMotion ? 15 : (this.isMobile ? 25 : 50);

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth <= 768;
      this.resize();
    });

    if (window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", (e) => {
        this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 30;
        this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 30;
      });
    }

    // Tự động tạm dừng khi tab không hiển thị
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    this.animate();
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.4 - 0.12,
      alpha: Math.random() * 0.6 + 0.2,
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      swaySpeed: Math.random() * 0.015 + 0.008,
      swayOffset: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.35 ? 42 : 28 // 42 = vàng kim, 28 = cam hổ phách
    };
  }

  pause() {
    this.isPaused = true;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.animate();
    }
  }

  animate() {
    if (this.isPaused) return;

    this.time += 0.02;
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Vẽ luồng sáng đèn lồng ở hai góc trên
    const leftX = this.width * 0.15 + this.mouseX * 0.4;
    const rightX = this.width * 0.85 + this.mouseX * 0.4;
    const lanternY = 120 + this.mouseY * 0.4;

    const leftGlow = this.ctx.createRadialGradient(leftX, lanternY, 10, leftX, lanternY, 320);
    leftGlow.addColorStop(0, "rgba(235, 140, 40, 0.16)");
    leftGlow.addColorStop(0.5, "rgba(180, 80, 20, 0.05)");
    leftGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = leftGlow;
    this.ctx.fillRect(0, 0, this.width, this.height);

    const rightGlow = this.ctx.createRadialGradient(rightX, lanternY, 10, rightX, lanternY, 320);
    rightGlow.addColorStop(0, "rgba(235, 140, 40, 0.16)");
    rightGlow.addColorStop(0.5, "rgba(180, 80, 20, 0.05)");
    rightGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = rightGlow;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Vẽ bụi vàng và tàn lửa
    for (let p of this.particles) {
      p.y += p.vy;
      if (!this.reducedMotion) {
        p.x += p.vx + Math.sin(this.time * p.swaySpeed + p.swayOffset) * 0.35;
        p.alpha = p.baseAlpha + Math.sin(this.time * p.pulseSpeed * 10) * 0.2;
      }

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      const drawX = p.x + this.mouseX * (p.radius * 0.4);
      const drawY = p.y + this.mouseY * (p.radius * 0.4);

      this.ctx.beginPath();
      this.ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${Math.max(0, p.alpha)})`;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.7)`;
      this.ctx.fill();
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.ambientParticles = new AmbientParticles("particles-canvas");
});
