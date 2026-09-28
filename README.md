# 📜 BÍ KÍP TÁN GÁI V2 - TUYỆT KỸ TÌNH TRƯỜNG CỔ PHONG

> Một website tương tác kể chuyện hoàn chỉnh phục vụ môn **Kỹ Năng Mềm**, kết hợp giữa **Cổ Trang Võ Lâm Trung Hoa** (Bí kíp cổ 3D, bàn gỗ, đèn lồng, con dấu son, tâm pháp tiền nhân) và **Giao diện Trò Chuyện Hiện Đại** (Đoạn chat Messenger tinh xảo, 4 lựa chọn có chiều sâu, mini-game phản xạ và biểu đồ ngũ giác phân tích kỹ năng mềm).

---

## 🌟 TỔNG QUAN TÍNH NĂNG NÂNG CẤP V2

### 1. 📖 Trải Nghiệm Quyển Sách Cổ 3D Hoàn Chỉnh & Single-Page Mobile
- **Quyển sách cổ 3D có chiều sâu:** Bìa bọc gấm/da thuộc dày dặn, gáy sách khâu chỉ vàng cổ điển, mép giấy xơ nhiều lớp, nẹp góc bằng đồng và con dấu son triện đỏ *“NGUYỆT LÃO THẦN THƯ - TUYỆT KỸ”*.
- **Hoạt ảnh mở sách & lật trang 3D (Forward & Backward):**
  - Bấm **“MỞ BÍ KÍP”**: Camera zoom nhẹ, bìa sách xoay lật 180° mượt mà mở ra không gian đọc 2 trang.
  - **Lật trang tiến & lùi:** Lá trang 3D uốn cong, vệt sáng quét qua trang cong, bóng đổ động quét qua mặt giấy bên dưới và âm thanh sột soạt đa tầng chân thực.
  - Hỗ trợ lật trang bằng nút tiếp tục, nút quay lại chương trước, click góc trang 3D Dog-Ear (cả góc phải và góc trái) hoặc phím mũi tên `➔` / `⬅`.
- **Trải nghiệm Single-Page trên Mobile (<= 992px):** Không biến thành trang cuộn dọc vô tận; có thanh tab chuyển đổi giữa *“📜 Tâm Pháp”* và *“💬 Truyền Tin”*, giữ nguyên hiệu ứng lật trang 3D.
- **Tối ưu hiển thị màn hình thuyết trình 1366 × 768:** Tự động co giãn theo tỷ lệ `clamp()` và `dvh`, đảm bảo không bị tràn chữ hay che khuất nút bấm.

### 2. 💬 Đoạn Chat Chân Thực & Mức Độ Gắn Kết Cảm Xúc
- Lấy cảm hứng từ giao diện Messenger hiện đại nhưng cách điệu hài hòa theo thẩm mỹ ngọc giản/cổ thư.
- **Grouping Bubble:** Tin nhắn liên tiếp cùng người gửi chỉ hiển thị avatar ở tin cuối cùng.
- **Trạng thái gắn kết (Relationship Badge):** Hiển thị nhẹ nhàng dưới tên Thanh Thảo dựa trên chỉ số thiện cảm (*Mới quen, Có thiện cảm, Khá thân, Rất tin tưởng, Đang rung động*).
- **Hội thoại tự nhiên:** Cách nói chuyện gần gũi của sinh viên Việt Nam, phản ứng chân thực (Seen, cười, ngại, chia sẻ, đặt ranh giới) thay vì lúc nào cũng khen ngợi quá đà.

### 3. 🎋 Cốt Truyện 7 Chương & Lựa Chọn Có Chiều Sâu
1. **Chương 1: Kỳ Ngộ Tại Tàng Kinh Các** (Lần đầu bắt chuyện tại quán cafe sách).
2. **Chương 2: Tương Phùng Hộp Thư** (Mở đầu hội thoại số).
3. **Chương 3: Hàn Băng Thử Thách** (Thấu cảm khi đối phương chậm rep / mệt mỏi).
4. **Chương 4: Tâm Ma Trận Đồ** (Xử lý độ trễ giao tiếp, tự chủ cảm xúc khi bị "seen").
5. **Chương 5: Xuất Chiêu Hẹn Ước** (Kỹ năng đưa ra lời mời cụ thể, tinh tế và có đường lui).
6. **Chương 6: Thấu Tâm Chi Đạo** (Lắng nghe thấu cảm khi đối phương yếu lòng).
7. **Chương 7: Định Mệnh Nguyệt Lão** (Bước ngoặt tình cảm & bày tỏ chân thành).
   - **Branching Ending:** Kết quả Chương 7 phụ thuộc vào toàn bộ hành trình trước đó (đồng ý, cần thêm thời gian, từ chối lịch thiệp hoặc đặt ranh giới).

> **TAG TRUNG TÍNH & GIẢI NGHĨA TÂM PHÁP:**
> - Trước khi chọn: Tag hoàn toàn trung tính (*Chủ động giúp đỡ, Gợi ý gián tiếp, Lắng nghe & đồng cảm, v.v.*), không tiết lộ trước đáp án tốt/xấu.
> - Sau khi chọn: Mở khóa **Giải Nghĩa Tâm Pháp** trên trang trái, phân tích kỹ năng mềm cốt lõi và bài học giao tiếp thực tiễn.
> - **CHỌN LẠI LINH HOẠT (RE-SELECTION):** Cho phép người chơi bấm lựa chọn khác bất kỳ lúc nào để khám phá đa dạng góc nhìn. Hệ thống tính toán điểm số độc lập bằng `recalculateStats()`, đảm bảo **100% không bị sai lệch hay cộng trùng điểm**.

### 4. ⚡ Mini-Game Cuối: “Phản Xạ Tán Gái” Nâng Cấp
- 5 câu hỏi tình huống thực chiến với các trade-off hợp lý (hài hước, thấu cảm, giải quyết vấn đề, chủ động).
- Đồng hồ đếm ngược linh hoạt theo `timeLimit` của từng câu hỏi.
- Hiệu ứng đếm ngược 3..2..1 kịch tính nhẹ nhàng.
- 4 cấp độ phản hồi trực quan: *Xuất sắc (3đ), Khá tốt (2đ), Trung lập (1đ), Chưa phù hợp (0đ)* đi kèm thẻ kỹ năng mềm liên quan.
- Điểm được tính cộng dồn chính xác cho mọi mức điểm (0..3).

### 5. 🏆 Bảng Vàng Vinh Danh & Biểu Đồ Ngũ Giác (Radar Chart)
- **Danh hiệu phân tích theo Profile:**
  - *Bậc Thầy Giao Tiếp* (Điểm tổng cao, các chỉ số cân bằng)
  - *Green Flag Chính Hiệu* (Tôn trọng + Thấu cảm rất cao)
  - *Bạch Mã Trầm Ấm* (Thiên về lắng nghe thấu cảm)
  - *Phong Lưu Hiệp Khách* (Dí dỏm, tự tin, hoạt ngôn)
  - *Tốc Chiến Tốc Bại* (Tự tin cao nhưng thiếu tôn trọng/thấu cảm)
  - *Sứ Giả Thận Trọng* (Tôn trọng cao nhưng thiếu một chút quyết đoán)
  - *Bậc Thầy Tự Hủy* (Áp đặt, kể công, đòi hỏi)
- **Phân tích 3 điểm giá trị:** *Điểm mạnh nổi bật*, *Điểm cần rèn giũa*, và *Khoảnh khắc đáng nhớ*.
- **Thông điệp cốt lõi:** *“Bí kíp tốt nhất không phải là khiến ai đó phải thích mình, mà là biết giao tiếp chân thành, lắng nghe và tôn trọng cảm xúc của nhau.”*
- **Radar Chart Canvas 2D:** Hỗ trợ High-DPI (Retina) sắc nét với DPR cap 2, chuẩn hóa điểm số dựa trên theoretical bounds thực tế của scenarios.
- **Phân biệt rõ ràng:**
  - *Đọc Lại Bí Kíp:* Giữ nguyên các lựa chọn và điểm số cũ, mở lại Chương 1 để xem lại và có thể thay đổi từng lựa chọn.
  - *Chơi Lại Từ Đầu:* Reset hoàn toàn dữ liệu về trạng thái ban đầu và quay về bìa sách.

### 6. ⛶ Chế Độ Trình Chiếu (Presentation Friendly)
- Nút **“⛶ Trình chiếu”** trên thanh điều hướng bật chế độ Fullscreen API.
- Cỡ chữ lớn, rõ ràng, dễ nhìn từ xa trong giảng đường môn Kỹ năng mềm.
- Bàn phím an toàn: Không bị nhảy trang ngoài ý muốn khi đang tương tác với các nút bấm.

### 7. 💾 Lưu Trạng Thái Toàn Diện (`bktg_state_v2`)
- Quản lý trạng thái bằng một object duy nhất trong `localStorage`:
  - `phase: "cover" | "reading" | "cinematic" | "minigame" | "results"`
  - `currentChapterIndex`
  - `stats`
  - `choicesHistory`
  - `miniGame`
- Tự động khôi phục đúng phân cảnh khi người dùng F5 / reload trang.

### 8. 🔊 Động Cơ Âm Thanh & Hiệu Năng
- 100% tự tổng hợp bằng Web Audio API, hoạt động hoàn toàn Offline.
- Âm lượng cân bằng, không gây giật mình khi thuyết trình.
- Canvas particles tự động tạm dừng khi chuyển tab ẩn (`visibilitychange`) và tôn trọng cài đặt `prefers-reduced-motion`.

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY

Website là static site thuần túy (HTML5, Modern CSS3 3D, Vanilla JavaScript ES6+):

### Cách 1: Chạy trực tiếp
Mở file `index.html` bằng bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).

### Cách 2: Chạy qua Local Server
```bash
# Python:
python -m http.server 3000

# Hoặc Node.js npx:
npx serve .
```
Truy cập: `http://localhost:3000`

---

## 📁 CẤU TRÚC THƯ MỤC
```
BKTG/
├── index.html                 # Cấu trúc HTML chính với các phân cảnh
├── README.md                  # Tài liệu hướng dẫn chi tiết
├── css/
│   ├── main.css              # Hệ màu cổ trang, phông chữ, navigation, presentation mode
│   ├── book3d.css            # Sách 3D, bìa gấm, lật trang 2 chiều, mobile tabs
│   ├── chat.css              # Giao diện chat, grouping bubble, relationship badge, 4 choices
│   ├── minigame.css          # Mini-game phản xạ, countdown bar, 4 tiers feedback
│   └── results.css           # Bảng vàng kết quả, 3 insight cards, radar chart
└── js/
    ├── scenarios.js          # Dữ liệu 7 chương, tag trung tính, branching Ch 7, mini-game data
    ├── audio.js              # Động cơ Web Audio API tổng hợp âm thanh chân thực
    ├── particles.js          # Bụi vàng & ánh đèn lồng lung linh (Retina & tab pause)
    ├── radar.js              # Biểu đồ ngũ giác võ học High-DPI chuẩn hóa theo bounds
    ├── minigame.js           # Bộ máy điều khiển mini-game phản xạ (scoring fix, dynamic timer)
    └── app.js                # Điều phối chính: bktg_state_v2, safe timer, recalculateStats
```
