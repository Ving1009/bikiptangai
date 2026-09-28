/**
 * BÍ KÍP TÁN GÁI - Background Particles & Ambient Lighting
 * Tạo không gian cổ trang huyền ảo: bụi vàng phát sáng, tàn lửa, ánh đèn lồng lung linh
 */

class AmbientParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.particleCount = 55;
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.width = 0;
    this.height = 0;
    this.time = 0;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("mousemove", (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    });

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.025 + 0.01,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.3 ? 42 : 28 // 42 = vàng kim, 28 = cam hổ phách
    };
  }

  animate() {
    this.time += 0.02;
    // Làm mượt chuyển động chuột (lerp)
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Vẽ luồng sáng đèn lồng ở hai góc trên
    const leftLanternGlow = this.ctx.createRadialGradient(
      this.width * 0.15 + this.mouseX * 0.5,
      120 + this.mouseY * 0.5,
      10,
      this.width * 0.15 + this.mouseX * 0.5,
      120 + this.mouseY * 0.5,
      350
    );
    leftLanternGlow.addColorStop(0, "rgba(235, 140, 40, 0.18)");
    leftLanternGlow.addColorStop(0.5, "rgba(180, 80, 20, 0.06)");
    leftLanternGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = leftLanternGlow;
    this.ctx.fillRect(0, 0, this.width, this.height);

    const rightLanternGlow = this.ctx.createRadialGradient(
      this.width * 0.85 + this.mouseX * 0.5,
      120 + this.mouseY * 0.5,
      10,
      this.width * 0.85 + this.mouseX * 0.5,
      120 + this.mouseY * 0.5,
      350
    );
    rightLanternGlow.addColorStop(0, "rgba(235, 140, 40, 0.18)");
    rightLanternGlow.addColorStop(0.5, "rgba(180, 80, 20, 0.06)");
    rightLanternGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = rightLanternGlow;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Vẽ các đốm bụi vàng và tàn lửa bay
    for (let p of this.particles) {
      p.y += p.vy;
      p.x += p.vx + Math.sin(this.time * p.swaySpeed + p.swayOffset) * 0.4;
      p.alpha = p.baseAlpha + Math.sin(this.time * p.pulseSpeed * 10) * 0.25;

      // Wrap lại khi bay quá mép
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      const drawX = p.x + this.mouseX * (p.radius * 0.5);
      const drawY = p.y + this.mouseY * (p.radius * 0.5);

      this.ctx.beginPath();
      this.ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 85%, 60%, ${Math.max(0, p.alpha)})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.8)`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.ambientParticles = new AmbientParticles("particles-canvas");
});
