/**
 * BÍ KÍP TÁN GÁI V2 - Ancient Chinese Martial Arts Radar Chart
 * Vẽ biểu đồ ngũ giác công phu bằng HTML5 Canvas:
 * - Hỗ trợ High-DPI (Retina) sắc nét với DPR cap 2
 * - Chuẩn hóa điểm số dựa trên theoretical min/max thực tế của Scenarios
 * - Tôn trọng prefers-reduced-motion
 * - Redraw khi thay đổi kích thước
 */

class MartialRadarChart {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.labels = [
      "Giao Tiếp",
      "Tự Tin",
      "Dí Dỏm",
      "Thấu Cảm",
      "Tôn Trọng"
    ];
    this.keys = ["communication", "confidence", "humor", "empathy", "respect"];
    this.currentValues = [0.15, 0.15, 0.15, 0.15, 0.15];
    this.targetValues = [0.15, 0.15, 0.15, 0.15, 0.15];
    this.animating = false;
    this.animationFrameId = null;

    this.setupHighDPI();
    window.addEventListener("resize", () => {
      this.setupHighDPI();
      this.draw();
    });
  }

  setupHighDPI() {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Display size
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width || 320;
    const height = rect.height || 320;

    this.displayWidth = width;
    this.displayHeight = height;

    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);

    this.ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    this.ctx.scale(dpr, dpr);
  }

  // Chuẩn hóa điểm số dựa trên theoretical min/max
  setStats(stats) {
    const bounds = typeof window.getStatTheoreticalBounds === "function" 
      ? window.getStatTheoreticalBounds() 
      : {
          communication: { min: -10, max: 19 },
          confidence: { min: -7, max: 17 },
          humor: { min: -6, max: 17 },
          empathy: { min: -13, max: 19 },
          respect: { min: -14, max: 18 }
        };

    const normalizeStat = (key, val) => {
      const b = bounds[key] || { min: -5, max: 18 };
      const raw = typeof val === "number" ? val : 0;
      // Map min..max to 0.15..1.0
      // Điểm 0 thực tế nằm ở khoảng 0.4 - 0.5
      const range = b.max - b.min;
      if (range <= 0) return 0.5;
      const normalizedRatio = (raw - b.min) / range;
      // Clamp between 0.15 and 1.0 for visual balance
      return Math.max(0.15, Math.min(1.0, 0.15 + normalizedRatio * 0.85));
    };

    this.targetValues = this.keys.map(k => normalizeStat(k, stats[k]));

    // Check prefers-reduced-motion
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      this.currentValues = [...this.targetValues];
      this.draw();
      return;
    }

    this.currentValues = [0.15, 0.15, 0.15, 0.15, 0.15];
    this.startAnimation();
  }

  startAnimation() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.animating = true;
    let step = 0;
    const totalSteps = 40;

    const animate = () => {
      step++;
      const progress = Math.min(1, step / totalSteps);
      // Cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);

      for (let i = 0; i < 5; i++) {
        this.currentValues[i] = 0.15 + (this.targetValues[i] - 0.15) * ease;
      }

      this.draw();

      if (step < totalSteps) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.animating = false;
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  draw() {
    if (!this.canvas || !this.ctx) return;
    const w = this.displayWidth;
    const h = this.displayHeight;
    const cx = w / 2;
    const cy = h / 2 + 6;
    const radius = Math.min(w, h) * 0.35;

    this.ctx.clearRect(0, 0, w, h);

    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    const startAngle = -Math.PI / 2; // Hướng lên trên

    // 1. Vẽ các vòng ngũ giác đồng tâm (Lưới bát quái cổ phong)
    const levels = 4;
    for (let l = 1; l <= levels; l++) {
      const r = (radius / levels) * l;
      this.ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = startAngle + i * angleStep;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
      }
      this.ctx.closePath();
      this.ctx.strokeStyle = l === levels ? "rgba(212, 175, 55, 0.55)" : "rgba(180, 140, 80, 0.22)";
      this.ctx.lineWidth = l === levels ? 1.5 : 1;
      this.ctx.stroke();

      if (l % 2 === 0) {
        this.ctx.fillStyle = "rgba(212, 175, 55, 0.04)";
        this.ctx.fill();
      }
    }

    // 2. Vẽ 5 trục từ tâm ra
    for (let i = 0; i < sides; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      this.ctx.beginPath();
      this.ctx.moveTo(cx, cy);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = "rgba(212, 175, 55, 0.35)";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      // Vẽ nhãn chữ cổ phong
      const labelDist = radius + 24;
      const lx = cx + Math.cos(angle) * labelDist;
      const ly = cy + Math.sin(angle) * labelDist;

      this.ctx.font = "bold 13px 'Cinzel Decorative', 'Cinzel', serif, 'Times New Roman'";
      this.ctx.fillStyle = "#f4ecd8";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = "rgba(212, 175, 55, 0.6)";
      this.ctx.fillText(this.labels[i], lx, ly);
      this.ctx.shadowBlur = 0;
    }

    // 3. Vẽ đa giác dữ liệu của người chơi (Màu son đỏ mạ vàng)
    this.ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = startAngle + i * angleStep;
      const val = this.currentValues[i];
      const r = radius * val;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();

    // Gradient son đỏ quyền uy
    const grad = this.ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
    grad.addColorStop(0, "rgba(214, 48, 49, 0.6)");
    grad.addColorStop(1, "rgba(180, 20, 20, 0.25)");
    this.ctx.fillStyle = grad;
    this.ctx.fill();

    this.ctx.strokeStyle = "#ffd700";
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    // 4. Vẽ các nút son đỏ mạ vàng
    for (let i = 0; i < sides; i++) {
      const angle = startAngle + i * angleStep;
      const val = this.currentValues[i];
      const r = radius * val;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 4.5, 0, Math.PI * 2);
      this.ctx.fillStyle = "#ffd700";
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = "#e6b422";
      this.ctx.fill();
      this.ctx.strokeStyle = "#c0392b";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
      this.ctx.shadowBlur = 0;
    }
  }
}

window.MartialRadarChart = MartialRadarChart;
