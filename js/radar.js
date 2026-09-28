/**
 * BÍ KÍP TÁN GÁI - Ancient Chinese Martial Arts Radar Chart
 * Vẽ biểu đồ ngũ giác công phu bằng HTML5 Canvas với hiệu ứng chuyển động mượt mà
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
    this.currentValues = [0, 0, 0, 0, 0];
    this.targetValues = [0, 0, 0, 0, 0];
    this.animating = false;
  }

  // Chuẩn hóa điểm số về khoảng 0.2 - 1.0 để hiển thị cân đối
  setStats(stats) {
    // stats: { communication, confidence, humor, empathy, respect }
    // Điểm cơ sở mỗi chỉ số khoảng 0-15
    const normalize = (val) => {
      const clamped = Math.max(1, Math.min(15, (val || 0) + 5));
      return clamped / 15;
    };

    this.targetValues = [
      normalize(stats.communication),
      normalize(stats.confidence),
      normalize(stats.humor),
      normalize(stats.empathy),
      normalize(stats.respect)
    ];

    this.currentValues = [0.1, 0.1, 0.1, 0.1, 0.1];
    this.startAnimation();
  }

  startAnimation() {
    this.animating = true;
    let step = 0;
    const totalSteps = 45;

    const animate = () => {
      step++;
      const progress = Math.min(1, step / totalSteps);
      // Easing out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      for (let i = 0; i < 5; i++) {
        this.currentValues[i] = 0.1 + (this.targetValues[i] - 0.1) * ease;
      }

      this.draw();

      if (step < totalSteps) {
        requestAnimationFrame(animate);
      } else {
        this.animating = false;
      }
    };

    requestAnimationFrame(animate);
  }

  draw() {
    if (!this.canvas || !this.ctx) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2 + 5;
    const radius = Math.min(w, h) * 0.36;

    this.ctx.clearRect(0, 0, w, h);

    const sides = 5;
    const angleStep = (Math.PI * 2) / sides;
    const startAngle = -Math.PI / 2; // Điểm đầu tiên hướng lên đỉnh

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
      this.ctx.strokeStyle = l === levels ? "rgba(212, 175, 55, 0.45)" : "rgba(180, 140, 80, 0.18)";
      this.ctx.lineWidth = l === levels ? 1.5 : 1;
      this.ctx.stroke();

      if (l % 2 === 0) {
        this.ctx.fillStyle = "rgba(212, 175, 55, 0.03)";
        this.ctx.fill();
      }
    }

    // 2. Vẽ 5 trục tỏa từ tâm ra
    for (let i = 0; i < sides; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      this.ctx.beginPath();
      this.ctx.moveTo(cx, cy);
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      // Vẽ nhãn chữ cổ phong
      const labelDist = radius + 26;
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

    // 3. Vẽ đa giác dữ liệu của người chơi (Màu son đỏ mạ vàng võ hiệp)
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
    grad.addColorStop(0, "rgba(214, 48, 49, 0.55)");
    grad.addColorStop(1, "rgba(180, 20, 20, 0.2)");
    this.ctx.fillStyle = grad;
    this.ctx.fill();

    this.ctx.strokeStyle = "#e6b422";
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    // 4. Vẽ các điểm nút son đỏ mạ vàng
    for (let i = 0; i < sides; i++) {
      const angle = startAngle + i * angleStep;
      const val = this.currentValues[i];
      const r = radius * val;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 4.5, 0, Math.PI * 2);
      this.ctx.fillStyle = "#e6b422";
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
