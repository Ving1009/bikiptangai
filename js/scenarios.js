/**
 * BÍ KÍP TÁN GÁI - Dữ Liệu 7 Tình Huống Liên Hoàn
 * Câu chuyện xuyên suốt giữa Chàng Trai (Thiếu Hiệp) và Thanh Thảo (Cô Gái)
 */

window.SCENARIOS_DATA = [
  {
    id: 1,
    chapter: "Chương 1",
    chapterTitle: "Kỳ Ngộ Tại Tàng Kinh Các",
    badge: "Lần Đầu Bắt Chuyện",
    setting: "Quán Cafe Sách Yên Tĩnh - Chiều Thứ Bảy",
    context: "Bạn và Thanh Thảo tình cờ ngồi đối diện nhau tại một bàn dài trong quán cafe sách. Thảo đang loay hoay tìm ổ cắm sạc laptop bị kẹt sâu dưới gầm bàn gỗ, trán lấm tấm mồ hôi, thỉnh thoảng khẽ liếc sang bạn như muốn nhờ giúp nhưng còn e ngại.",
    ancientWisdom: "Cổ thư dạy: 'Hành động mở đầu như giọt nước rơi vào mặt hồ, phải tự nhiên, điềm đạm, không được làm dậy sóng cuồng phong.'",
    girlStatus: "Đang lúng túng & ngại ngùng",
    initialMessages: [
      { sender: "girl", text: "Ước gì cái ổ cắm này nó không trốn sâu dưới gầm bàn như thế... T_T", time: "14:15" },
      { sender: "system", text: "Thanh Thảo khẽ ngước mắt lên nhìn bạn đầy hy vọng...", time: "14:15" }
    ],
    choices: [
      {
        id: "A",
        tag: "Quan sát & Tinh tế",
        text: "Mỉm cười đứng dậy kéo ổ điện ra hộ: 'Cái ổ cắm này hơi kẹt, để mình kéo ra cắm hộ bạn nhé. Dòng máy này cẩn thận giắc cắm nha!'",
        playerMessage: "Cái ổ cắm này hơi kẹt, để mình kéo ra cắm hộ bạn nhé! Dòng máy này bạn cắm nhẹ tay kẻo gãy giắc đó.",
        girlReply: "Ui may quá, cảm ơn bạn nhiều nha! Mình loay hoay mãi từ nãy tới giờ ngại ghê á. Bạn chu đáo thật đấy! ✨",
        girlReactionEmoji: "🥰",
        ancientComment: "Chiêu thức xuất phát từ lòng tốt tự nhiên, không mưu toan vụ lợi, đối phương ắt cảm động chân thành.",
        effects: { communication: 2, confidence: 1, empathy: 2, respect: 2, humor: 0, impression: 2 }
      },
      {
        id: "B",
        tag: "Nhút nhát & An toàn",
        text: "Chỉ tay vào góc bàn bên cạnh: 'À... bạn cần sạc hả? Hình như góc bên kia cũng có ổ cắm dự phòng đó bạn.'",
        playerMessage: "À... bạn cần sạc pin hả? Hình như góc bên kia cũng có ổ cắm đó.",
        girlReply: "À vâng... để mình ngó thử xem sao. Cảm ơn bạn đã chỉ nhé.",
        girlReactionEmoji: "🙂",
        ancientComment: "An toàn nhưng thiếu chút nhiệt huyết. Cơ hội tương phùng đã qua đi như gió thoảng.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Khoe mẽ & Vồ vập",
        text: "Lấy củ sạc dự phòng xịn đập phịch xuống bàn: 'Dùng củ sạc 100W này của anh đi em ơi! Hàng cao cấp limited, cắm 15 phút là đầy!'",
        playerMessage: "Dùng củ sạc 100W này của anh đi em ơi! Hàng limited nhập khẩu đắt tiền, cắm 15 phút là đầy pin liền!",
        girlReply: "Dạ thôi phiền anh quá, em cắm được rồi, cảm ơn anh nhiều nha... (quay mặt đi lướt điện thoại)",
        girlReactionEmoji: "😅",
        ancientComment: "Đem vật chất ra khoe mẽ chốn thanh tịnh, chỉ khiến nữ nhi xem thường, lòng phòng bị tăng gấp bội!",
        effects: { communication: -1, confidence: 1, empathy: -2, respect: -2, humor: -1, impression: -2 }
      },
      {
        id: "D",
        tag: "Dí dỏm võ lâm",
        text: "Làm bộ nghiêm túc chắp tay: 'Bình tĩnh! Hãy để tại hạ thi triển công lực kéo cái ổ điện bất trị này ra giải cứu tiểu thư!'",
        playerMessage: "Bình tĩnh! Hãy để tại hạ thi triển công lực kéo cái ổ cắm bất trị này ra giải cứu tiểu thư!",
        girlReply: "Hahaha đại hiệp võ nghệ cao cường ghê á! Bái phục bái phục! Cảm ơn đại hiệp cứu nguy nha! 🤣",
        girlReactionEmoji: "😆",
        ancientComment: "Hài hước vừa độ như xuân phong hóa vũ, tức khắc phá vỡ tảng băng ngượng ngùng!",
        effects: { communication: 2, confidence: 2, empathy: 1, respect: 1, humor: 3, impression: 2 }
      }
    ]
  },
  {
    id: 2,
    chapter: "Chương 2",
    chapterTitle: "Tương Phùng Hộp Thư",
    badge: "Tin Nhắn Đầu Tiên",
    setting: "Phòng Trọ - 21:30 Đêm Sau Buổi Cafe",
    context: "Chiều hôm đó hai người đã trao đổi liên lạc Facebook/Instagram. Bạn vừa tắm rửa xong, ngồi trước bàn học mở điện thoại. Đây là khoảnh khắc gửi tin nhắn đầu tiên để mở ra cuộc đối thoại.",
    ancientWisdom: "Cổ thư dạy: 'Mở đầu cuộc đàm đạo, chớ hỏi những câu như tra khảo phạm nhân. Nhắc lại kỷ niệm tương đồng mới là diệu kế.'",
    girlStatus: "Vừa online 5 phút trước",
    initialMessages: [
      { sender: "system", text: "Bạn và Thanh Thảo đã trở thành bạn bè trên mạng xã hội.", time: "21:30" },
      { sender: "system", text: "Thanh Thảo đang hiển thị trạng thái: Đang hoạt động 🟢", time: "21:31" }
    ],
    choices: [
      {
        id: "A",
        tag: "Gợi nhắc kỷ niệm vui",
        text: "Nhắc lại kỷ niệm chiều nay: 'Chào tiểu thư ổ điện! Về tới phòng an toàn chứ, bài tập chiều nay deadline kịp chưa?'",
        playerMessage: "Chào tiểu thư ổ điện! Về tới phòng an toàn chứ, bài tập chiều nay deadline nộp kịp chưa bạn?",
        girlReply: "Haha trời ơiii đừng gọi tui là 'tiểu thư ổ điện' nữa mừ! 🙈 Nộp bài trước hạn 5 phút luôn hú hồn á!",
        girlReactionEmoji: "😆",
        ancientComment: "Một biệt danh dễ thương ra đời, gợi lại khoảnh khắc vui vẻ, tự nhiên dẫn vào câu chuyện.",
        effects: { communication: 2, confidence: 2, empathy: 1, respect: 2, humor: 2, impression: 2 }
      },
      {
        id: "B",
        tag: "Mẫu câu công nghiệp",
        text: "Nhắn câu hỏi quen thuộc: 'Chào em, em ăn cơm chưa? Đang làm gì đấy em?'",
        playerMessage: "Chào em, em ăn cơm chưa? Giờ này em đang làm gì thế?",
        girlReply: "Dạ em ăn rồi anh, em đang lướt mạng linh tinh thôi ạ.",
        girlReactionEmoji: "😐",
        ancientComment: "Câu hỏi 'ăn cơm chưa' từ ngàn xưa đến nay như chén nước lã nguội tanh, khiến lòng người chán ngán.",
        effects: { communication: 0, confidence: 0, empathy: 0, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Thả thính sến súa vồ vập",
        text: "Tán tỉnh quá đà: 'Chiều nay gặp em về anh mất ngủ luôn rồi... Làm sao để đền cho anh giấc ngủ đây người đẹp ơi?'",
        playerMessage: "Chiều nay gặp em về anh mất ngủ luôn rồi... Làm sao để đền cho anh giấc ngủ đây người đẹp ơi? 😉",
        girlReply: "Ủa anh nói quá rồi đó haha... Anh hay nhắn bài này cho nhiều bạn gái lắm đúng không nè?",
        girlReactionEmoji: "🤨",
        ancientComment: "Chưa thân đã vội buông lời ong bướm, chỉ rước lấy sự hoài nghi và cảnh giác của thiếu nữ.",
        effects: { communication: -1, confidence: 1, empathy: -2, respect: -2, humor: 0, impression: -2 }
      },
      {
        id: "D",
        tag: "Mẩu chuyện hài hước",
        text: "Kể chuyện tếu: 'Vừa lướt thấy quán cafe chiều nay đăng tin 'tìm khách quên cục sạc', giật mình tưởng là Thảo cơ đấy haha!'",
        playerMessage: "Vừa lướt thấy quán cafe chiều nay đăng bài 'tìm khách bỏ quên củ sạc', giật mình tưởng là Thảo cơ đấy haha!",
        girlReply: "Ủa thật á?? Làm em giật thót tim phải chạy đi kiểm tra túi! May quá vẫn ở đây haha, anh khéo dọa người ghê! 🤣",
        girlReactionEmoji: "🤣",
        ancientComment: "Tạo sự bất ngờ rồi giải tỏa bằng tiếng cười, tâm lý đối phương lập tức rộng mở.",
        effects: { communication: 2, confidence: 2, empathy: 1, respect: 1, humor: 3, impression: 2 }
      }
    ]
  },
  {
    id: 3,
    chapter: "Chương 3",
    chapterTitle: "Hàn Băng Thử Thách",
    badge: "Khi Nàng Rep Ngắn Cụt",
    setting: "Tin Nhắn Ngày Thứ Tư",
    context: "Sau vài ngày nhắn tin khá vui, tối nay Thảo bỗng dưng trả lời rất ngắn: 'Dạ', 'Uhm thế à...'. Cảm giác năng lượng cuộc trò chuyện bị rơi tự do xuống đáy vực. Bạn phải xử lý thế nào để không trở nên phiền phức?",
    ancientWisdom: "Cổ thư dạy: 'Gặp lúc băng giá đóng phủ, kẻ phàm phu thì cuống cuồng chất vấn, bậc cao thủ thì biết lùi một bước tạo khoảng lặng thanh nhã.'",
    girlStatus: "Trả lời nhát gừng",
    initialMessages: [
      { sender: "player", text: "Hôm nay trường mình có hội thao đông vui lắm, Thảo có tham gia không?", time: "20:45" },
      { sender: "girl", text: "Dạ không...", time: "20:52" },
      { sender: "girl", text: "Uhm thế à.", time: "20:53" }
    ],
    choices: [
      {
        id: "A",
        tag: "Đồng cảm & Cho khoảng không gian",
        text: "Tâm lý nhận ra tín hiệu: 'Nghe chừng hôm nay bạn cạn pin năng lượng rồi nhỉ? Thôi không làm phiền bạn nữa, nghỉ ngơi sớm đi nhé, khi nào thoải mái mình nói chuyện tiếp!'",
        playerMessage: "Nghe chừng hôm nay cô nương cạn pin năng lượng rồi nhỉ? Thôi bạn nghỉ ngơi sớm cho lại sức nha, khi nào thoải mái tụi mình lại buôn tiếp!",
        girlReply: "Ui không phải em lạnh nhạt đâu ạ, nãy em đang phải sửa gấp bản thảo cho giảng viên mắng sấp mặt á T_T Cảm ơn bạn đã hiểu cho mình nha, thương ghê á...",
        girlReactionEmoji: "🥺",
        ancientComment: "Biết lùi để tiến, tôn trọng không gian riêng của người khác chính là phong thái bậc quân tử!",
        effects: { communication: 3, confidence: 2, empathy: 3, respect: 3, humor: 1, impression: 3 }
      },
      {
        id: "B",
        tag: "Tra vấn dồn dập",
        text: "Bực bội hỏi cung: 'Sao hôm nay em nói chuyện cộc lốc thế? Em chán anh rồi à? Anh làm gì sai sao?'",
        playerMessage: "Sao hôm nay em nói chuyện cộc lốc thế? Em chán anh rồi à? Anh làm gì sai sao mà em lạnh nhạt vậy?",
        girlReply: "Ủa anh sao thế... Em đang bận làm việc mà, anh làm em thấy ngột ngạt và áp lực quá đấy.",
        girlReactionEmoji: "😤",
        ancientComment: "Tự ti hóa thành nóng nảy ép bức người khác, là vết nứt lớn phá vỡ mối duyên chưa sâu sắc!",
        effects: { communication: -3, confidence: -2, empathy: -3, respect: -3, humor: -2, impression: -3 }
      },
      {
        id: "C",
        tag: "Tung meme giải vây",
        text: "Gửi meme mèo quỳ lạy hài hước: 'Một chữ Dạ lạnh lùng tựa băng phong kiếm vũ làm tại hạ lạnh toát sống lưng haha!'",
        playerMessage: "Một chữ 'Dạ' lạnh lùng tựa băng phong kiếm vũ làm tại hạ lạnh toát cả sống lưng haha! [Meme Mèo Chắp Tay Xin Lỗi]",
        girlReply: "Hahaha trời ơi cái meme hài xỉu! Nãy em vừa lau nước mắt vừa gõ bài tập á, thấy ảnh của anh phì cười luôn :v",
        girlReactionEmoji: "😹",
        ancientComment: "Dùng nụ cười xoa dịu áp lực, nhẹ nhàng kéo lại không khí ấm áp.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 3, impression: 2 }
      },
      {
        id: "D",
        tag: "Chiến tranh lạnh",
        text: "Seen tin nhắn luôn, để im xem ai lì lợm hơn ai.",
        playerMessage: "[Đã xem - Không trả lời tin nhắn]",
        girlReply: "(Cuộc hội thoại im bặt suốt 4 ngày trời, khoảng cách ngày càng xa vời vợi)",
        girlReactionEmoji: "😶",
        ancientComment: "Lấy cái tôi kiêu ngạo đấu với sự thờ ơ, kết cục chỉ có con đường đôi ngã chia ly.",
        effects: { communication: -2, confidence: -1, empathy: -2, respect: -1, humor: 0, impression: -2 }
      }
    ]
  },
  {
    id: 4,
    chapter: "Chương 4",
    chapterTitle: "Tâm Ma Trận Đồ",
    badge: "Khi Nàng 'Đã Xem' Suốt 5 Tiếng",
    setting: "Màn Hình Điện Thoại - Chiều Sang Tối",
    context: "Lúc 14:00 chiều, bạn nhắn một câu hỏi khá hào hứng về sở thích chụp ảnh của Thảo. 14:10 hiện dòng chữ 'Đã xem'. Nhưng đồng hồ điểm 19:00 vẫn chưa thấy một chữ hồi âm. Tâm trạng bạn như lửa đốt.",
    ancientWisdom: "Cổ thư dạy: 'Đã xem không rep, thường do thế sự bận rộn chứ chưa hẳn lòng người thay đổi. Tâm vững như núi Thái Sơn, tự khắc an nhiên.'",
    girlStatus: "Đã xem lúc 14:10",
    initialMessages: [
      { sender: "player", text: "Thảo có thích chụp ảnh phim tone màu hoài cổ không? Mình thấy trên trang cá nhân bạn có mấy bức góc máy đẹp lắm!", time: "14:00" },
      { sender: "system", text: "Thanh Thảo đã xem tin nhắn lúc 14:10.", time: "14:10" },
      { sender: "system", text: "5 tiếng trôi qua không một hồi âm...", time: "19:00" }
    ],
    choices: [
      {
        id: "A",
        tag: "Tự chủ & Điềm đạm",
        text: "Không nhắn thêm gì giục giã, tắt máy tập gym/chạy bộ rồi đọc sách. Giữ tâm lý thoải mái.",
        playerMessage: "(Bạn tập trung làm việc riêng, học tập và không gửi thêm tin nhắn làm phiền)",
        girlReply: "Huhu xin lỗi bạn nhiều nha! Chiều nay xưởng thực hành bị chập điện, mình phải phụ dọn đồ với nộp mẫu đến giờ mới ăn tối xong. Mình mê chụp máy phim Konica lắm á!",
        girlReactionEmoji: "🥺",
        ancientComment: "Không bi lụy, không quấy rầy. Người có thế giới riêng phong phú luôn tỏa ra sức hút kỳ diệu!",
        effects: { communication: 2, confidence: 3, empathy: 2, respect: 3, humor: 0, impression: 3 }
      },
      {
        id: "B",
        tag: "Spam tra hỏi",
        text: "Gửi liên tục: '???', 'Seen không rep luôn?', 'Bận dữ vậy sao em?'",
        playerMessage: "???\nSeen không rep luôn à em?\nBận dữ dằn vậy sao ta?",
        girlReply: "Em bận học cả buổi không đụng điện thoại anh ơi. Em thấy ngột ngạt khi bị quản thúc thế này lắm ạ.",
        girlReactionEmoji: "😤",
        ancientComment: "Dấu chấm hỏi tới tấp tựa như mưa tên thuốc độc, chỉ gieo rắc sự mệt mỏi và chán chường.",
        effects: { communication: -3, confidence: -3, empathy: -3, respect: -3, humor: -1, impression: -4 }
      },
      {
        id: "C",
        tag: "Tự ti gượng gạo",
        text: "Nhắn tin nhận lỗi gượng ép: 'Chắc anh hỏi nhạt quá em không muốn trả lời đúng không... Thôi xin lỗi vì làm phiền em.'",
        playerMessage: "Chắc anh hỏi nhạt quá nên em không muốn rep đúng không... Thôi xin lỗi vì đã làm phiền em nhé.",
        girlReply: "Dạ đâu có gì đâu anh, em bận thôi mà... Anh đừng suy nghĩ tiêu cực vậy, em không biết nói sao luôn.",
        girlReactionEmoji: "😥",
        ancientComment: "Tự hạ thấp bản thân trước mặt nữ nhân, không những không được thương hại mà còn đánh mất sức hút nam nhi.",
        effects: { communication: -1, confidence: -3, empathy: -1, respect: 0, humor: -1, impression: -2 }
      },
      {
        id: "D",
        tag: "Cà khịa duyên dáng qua Story",
        text: "Đăng Story đĩa đồ ăn tự nấu nóng hổi: 'Mời cả thế giới, trừ những người seen tin nhắn 5 tiếng chưa rep haha.'",
        playerMessage: "(Đăng Story đĩa mì ý tự nấu thơm phức: 'Mời cả thế giới, trừ ai đó seen 5 tiếng haha')",
        girlReply: "Ê nhaaa! Vừa mở máy lên thấy Story này nha! Ai cho cà khịa tui đó! Cơ mà nhìn đĩa mì ngon ghê, đền cho tui đi :)))",
        girlReactionEmoji: "😋",
        ancientComment: "Biến thế bị động thành thế chủ động dí dỏm, một mũi tên trúng hai đích!",
        effects: { communication: 3, confidence: 3, empathy: 1, respect: 2, humor: 3, impression: 3 }
      }
    ]
  },
  {
    id: 5,
    chapter: "Chương 5",
    chapterTitle: "Xuất Chiêu Hẹn Ước",
    badge: "Lời Rủ Đi Chơi Đầu Tiên",
    setting: "Tối Thứ Tư - Sau 2 Tuần Quen Biết",
    context: "Hai người đã trò chuyện rất ăn ý về sở thích nghệ thuật và ẩm thực đường phố. Đây là thời cơ chín muồi để gửi một lời mời gặp mặt ngoài đời thực cho cuối tuần này.",
    ancientWisdom: "Cổ thư dạy: 'Hẹn ước phải rõ ràng thời gian địa điểm, gắn liền sở thích đối phương, lại phải lưu đường lui tao nhã nếu nàng bận việc.'",
    girlStatus: "Đang rảnh rỗi lướt mạng",
    initialMessages: [
      { sender: "girl", text: "Dạo này học nhiều đau hết cả lưng, cuối tuần chỉ muốn đi đâu đó xả hơi thôi á...", time: "21:10" },
      { sender: "player", text: "Cuối tuần cần nạp lại năng lượng gấp đúng không nè?", time: "21:11" },
      { sender: "girl", text: "Chuẩn luônnn, mà chưa biết đi đâu cho thoáng đãng đây ta.", time: "21:12" }
    ],
    choices: [
      {
        id: "A",
        tag: "Cụ thể + Tinh tế + Đường lui",
        text: "Rủ đi triển lãm: 'Cuối tuần này có triển lãm nghệ thuật thị giác bên bảo tàng, đúng gu chụp ảnh của Thảo nè. Thứ Bảy bạn rảnh không, tụi mình đi dạo rồi uống trà? Nếu bạn kẹt lịch thì để dịp khác cũng thoải mái nha!'",
        playerMessage: "Cuối tuần này có triển lãm nghệ thuật thị giác bên bảo tàng, đúng gu ảnh phim của Thảo nè. Chiều Thứ Bảy bạn rảnh không, tụi mình đi dạo ngắm tranh rồi làm ly trà? Nếu Thảo kẹt lịch thì để dịp khác cũng thoải mái nha!",
        girlReply: "Oa triển lãm đó mình đang tính rủ bạn đi cùng luôn á!! Trùng hợp ghê! Thứ Bảy từ 15h mình rảnh nè, chốt kèo nha bạn ơiii! ✨🎨",
        girlReactionEmoji: "🎉",
        ancientComment: "Địa điểm đúng gu, thời gian rõ ràng, lại không ép buộc. Thần kỳ như mũi tên trúng hồng tâm!",
        effects: { communication: 3, confidence: 3, empathy: 3, respect: 3, humor: 1, impression: 4 }
      },
      {
        id: "B",
        tag: "Chung chung mập mờ",
        text: "Rủ mơ hồ: 'Hôm nào rảnh không, đi chơi với anh bữa đi em?'",
        playerMessage: "Hôm nào rảnh không, đi chơi với anh bữa đi em?",
        girlReply: "Dạ để xem tuần này em có lịch làm việc nhóm không đã nhé anh, có gì em báo sau nha.",
        girlReactionEmoji: "🤷‍♀️",
        ancientComment: "Lời hẹn chung chung 'hôm nào' ngàn đời nay đều trôi vào dĩ vãng hư vô.",
        effects: { communication: 0, confidence: 0, empathy: 0, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Tổng tài gia trưởng",
        text: "Chốt hạ bá đạo: 'Tối mai 19h anh qua đón đi ăn nhà hàng sang trọng. Em không cần chuẩn bị gì cả, mặc váy đẹp là được.'",
        playerMessage: "Tối mai 19h anh qua đón đi ăn nhà hàng sang trọng. Em không cần chuẩn bị gì đâu, chỉ cần mặc váy đẹp là được!",
        girlReply: "Cảm ơn ý tốt của anh nhưng tối mai em bận rồi ạ, với lại em không thích kiểu bị sắp đặt như vậy đâu anh.",
        girlReactionEmoji: "😒",
        ancientComment: "Tưởng là phong độ tổng tài, trong mắt cô gái hiện đại chỉ là kẻ áp đặt và trịch thượng.",
        effects: { communication: -2, confidence: 1, empathy: -3, respect: -4, humor: -2, impression: -4 }
      },
      {
        id: "D",
        tag: "Kèo ẩm thực sinh viên bá đạo",
        text: "Gợi ý quán ruột hài hước: 'Tại hạ vừa truy tìm được quán kem bơ dừa nướng ngon đỉnh chóp gần trường. Cần một cao thủ nếm thử kiểm chứng, Thảo có dám nhận chiến thư không?'",
        playerMessage: "Thành thật mà nói, tại hạ vừa truy lùng được quán kem bơ dừa nướng ngon đỉnh chóp gần trường. Cần một cao thủ sành ăn nếm thử, Thảo có dám nhận chiến thư này không?",
        girlReply: "Trời ơiii kem bơ là chân ái của tuiii! Kèo này chiến thư tới tay mà không nhận thì có lỗi với bản thân quá! Duyệt liền đại hiệp ơi! 🍨🤤",
        girlReactionEmoji: "🤩",
        ancientComment: "Đánh thẳng vào dạ dày và sở thích, vừa vui vừa tự nhiên, không áp lực hẹn hò câu nệ.",
        effects: { communication: 3, confidence: 2, empathy: 2, respect: 2, humor: 4, impression: 3 }
      }
    ]
  },
  {
    id: 6,
    chapter: "Chương 6",
    chapterTitle: "Thấu Tâm Chi Đạo",
    badge: "Khi Nàng Đang Buồn & Kiệt Sức",
    setting: "Đêm Muộn 22:45 - Sau Buổi Hẹn 1 Tuần",
    context: "Buổi hẹn cuối tuần trước diễn ra rất vui vẻ. Nhưng tối nay, Thảo gửi tin nhắn lúc nửa đêm với tâm trạng u ám: project tốt nghiệp bị giảng viên phê bình nặng nề, bạn cùng nhóm bỏ việc, mọi thứ dồn nén khiến nàng rơi nước mắt.",
    ancientWisdom: "Cổ thư dạy: 'Khi hồng nhan lệ rơi, nàng cần một bờ vai tĩnh lặng lắng nghe, tuyệt đối chớ đem đạo lý đao to búa lớn ra dạy bảo.'",
    girlStatus: "Tâm trạng chùng xuống...",
    initialMessages: [
      { sender: "girl", text: "Hôm nay mệt mỏi quá... mọi thứ cứ rối tung lên, cảm giác bản thân chẳng làm được tích sự gì hết trơn :(", time: "22:45" },
      { sender: "girl", text: "Project nhóm bị thầy chê tơi bời, các bạn lại đùn đẩy trách nhiệm... em chỉ muốn khóc thôi.", time: "22:46" }
    ],
    choices: [
      {
        id: "A",
        tag: "Lắng nghe & Làm chỗ dựa ấm áp",
        text: "Xoa dịu & thấu cảm: 'Nghe thương Thảo ghê... Đôi khi mọi chuyện dồn lại một lúc dễ làm mình kiệt sức lắm. Thảo đã cố gắng hết sức rồi mà. Giờ bạn muốn trút hết tâm sự cho nhẹ lòng, hay muốn yên tĩnh nghe một bài nhạc êm dịu?'",
        playerMessage: "Nghe thương Thảo ghê... Đôi lúc mọi chuyện cứ dồn lại cùng một lúc dễ làm mình kiệt sức lắm. Thảo đã nỗ lực hết mình rồi mà. Bây giờ bạn muốn trút hết tâm sự cho nhẹ lòng, hay muốn yên tĩnh nghỉ ngơi một chút?",
        girlReply: "Cảm ơn bạn nhiều lắm... Nghe bạn nói câu này tự dưng mình rơi nước mắt vì nhẹ nhõm luôn á. May mà có bạn ở đây... Cho mình gọi điện buôn với bạn 10 phút được hông? 🥺❤️",
        girlReactionEmoji: "🥹",
        ancientComment: "Biết xót xa cho nỗi lòng nàng, đặt cảm xúc lên trước lý trí, cánh cửa trái tim nàng đã hoàn toàn mở rộng!",
        effects: { communication: 3, confidence: 2, empathy: 4, respect: 3, humor: 0, impression: 4 }
      },
      {
        id: "B",
        tag: "Vua lý lẽ & Dạy đời",
        text: "Nhảy vào phân tích logic: 'Anh thấy em làm việc nhóm chưa chặt chẽ đấy. Lần sau em phải lập bảng phân công trên Notion, phân task rõ ràng rồi bắt ký cam kết thì ai đùn đẩy được.'",
        playerMessage: "Anh thấy cách làm việc nhóm của em chưa chặt chẽ đấy. Lần sau em phải lập bảng Notion, chia rõ deadline và bắt mọi người ký cam kết thì ai đùn đẩy được nữa. Em xem lại quy trình đi.",
        girlReply: "Vâng, cảm ơn anh đã dạy bảo em. Em mệt rồi, em đi ngủ đây ạ.",
        girlReactionEmoji: "🤐",
        ancientComment: "Người ta đang cầu mong sự an ủi, ngươi lại đem búa rìu logic ra đập phá. Thật là đại bại!",
        effects: { communication: -2, confidence: 1, empathy: -4, respect: -3, humor: -2, impression: -4 }
      },
      {
        id: "C",
        tag: "Lạc quan độc hại",
        text: "Gạt phắt nỗi buồn: 'Thôi có gì đâu mà buồn em ơi! Ngoài kia bao nhiêu người khổ hơn kìa, chuyện nhỏ như con thỏ ấy mà, cười lên cái nào!'",
        playerMessage: "Thôi có gì đâu mà buồn em ơi! Chuyện nhỏ xíu à, ngoài kia bao nhiêu người còn khổ hơn kìa. Lạc quan lên, cười một cái xem nào!",
        girlReply: "(Thảo đã xem tin nhắn và không trả lời thêm điều gì cả...)",
        girlReactionEmoji: "😔",
        ancientComment: "Xem nhẹ nỗi đau của người khác chính là sự tàn nhẫn vô tâm nhất trên đời.",
        effects: { communication: -3, confidence: 0, empathy: -4, respect: -2, humor: -1, impression: -3 }
      },
      {
        id: "D",
        tag: "Hành động thực tế ấm lòng",
        text: "Gửi món quà nhỏ xoa dịu: 'Đã order một ly trà sữa nóng ít đường kèm bánh ngọt đang ship đến cổng phòng Thảo nè. Ăn ngọt một chút rồi đi ngủ, ngày mai mọi giông bão sẽ qua!'",
        playerMessage: "Đã có một ly trà sữa ấm ít đường và bánh ngọt đang trên đường bay tới cổng trọ Thảo nè! Nạp chút ngọt ngào rồi ngủ thật ngon nha, ngày mai tại hạ sẽ cùng tiểu thư dẹp tan deadline!",
        girlReply: "Trời ơiii bạn chu đáo dã man luôn á... Đang ôm gối khóc mà thấy shipper gọi ra nhận bánh trà sữa rớt nước mắt cảm động luôn á! Cảm ơn bạn rất rất nhiều nha! 😭🧋",
        girlReactionEmoji: "😭",
        ancientComment: "Lời nói ấm áp kết hợp hành động kịp thời, trăm trận trăm thắng không sai một ly!",
        effects: { communication: 3, confidence: 3, empathy: 3, respect: 3, humor: 2, impression: 4 }
      }
    ]
  },
  {
    id: 7,
    chapter: "Chương 7",
    chapterTitle: "Định Mệnh Nguyệt Lão",
    badge: "Bước Ngoặt Tình Cảm",
    setting: "Bờ Hồ Lộng Gió - Đêm Thu Trăng Sáng",
    context: "Sau hơn một tháng gắn bó qua đủ mọi cung bậc cảm xúc, hai người đang ngồi cạnh nhau trên ghế đá ven hồ lộng gió. Thảo khẽ nghiêng đầu nhìn bạn dưới ánh đèn vàng ấm áp và thì thầm: 'Dạo này ở cạnh bạn... mình thấy bình yên và vui lắm. Đối với bạn... mình là gì thế?'",
    ancientWisdom: "Cổ thư dạy: 'Đến hồi chung cuộc, mọi mưu lược đều lùi bước trước sự chân thành. Lời tỏ bày phải từ tận đáy lòng, dũng cảm nhưng trân trọng danh dự của nàng.'",
    girlStatus: "Ánh mắt long lanh chờ đợi...",
    initialMessages: [
      { sender: "girl", text: "Dạo này ở cạnh bạn... mình thấy bình yên và vui lắm.", time: "21:40" },
      { sender: "girl", text: "Đối với bạn... mình có vị trí như thế nào thế? ✨", time: "21:41" }
    ],
    choices: [
      {
        id: "A",
        tag: "Chân thành & Trưởng thành",
        text: "Nhìn thẳng vào mắt nàng: 'Từ ngày gặp ở quán cafe đến giờ, mỗi khoảnh khắc có Thảo đều làm cuộc sống của mình ý nghĩa hơn. Mình không chỉ muốn làm bạn hợp gu, mình thực sự thích Thảo và muốn được chăm sóc bạn một cách nghiêm túc.'",
        playerMessage: "Từ cái ngày gặp ở quán cafe sách đến giờ, mỗi khoảnh khắc có Thảo đều làm cuộc sống của mình tươi sáng hơn rất nhiều. Với mình, bạn là người vô cùng đặc biệt. Mình muốn được chính thức đồng hành và chăm sóc Thảo.",
        girlReply: "Mình cũng chờ câu nói này từ bạn lâu lắm rồi... Cảm ơn bạn vì đã luôn kiên nhẫn, tinh tế và dịu dàng với mình nhé! Em đồng ý ❤️✨",
        girlReactionEmoji: "💍",
        ancientComment: "Chân tình cảm hóa lòng người, kiếm pháp đại thành, xứng danh đệ nhất phong nhã!",
        effects: { communication: 4, confidence: 4, empathy: 4, respect: 4, humor: 1, impression: 5 }
      },
      {
        id: "B",
        tag: "Né tránh đùa cợt cợt nhả",
        text: "Cười trừ gượng gạo: 'Haha thì là bạn thân khác giới chứ là gì nữa cô nương, hỏi câu khó ghê!'",
        playerMessage: "Haha thì là bạn thân khác giới chứ là gì nữa cô nương ơi, tự nhiên hỏi câu khó đỡ ghê haha!",
        girlReply: "À... ra là bạn thân khác giới thôi hả. Mình hiểu rồi, cảm ơn bạn đã nói rõ nhé.",
        girlReactionEmoji: "💔",
        ancientComment: "Hèn nhát trốn tránh lúc then chốt, tự tay khóa chặt cánh cổng bước vào trái tim nàng, rơi thẳng vào Friendzone ngàn năm tăm tối!",
        effects: { communication: -2, confidence: -4, empathy: -3, respect: -1, humor: 1, impression: -4 }
      },
      {
        id: "C",
        tag: "Áp đặt đòi hỏi",
        text: "Tỏ tình kiểu ép buộc: 'Làm người yêu anh đi, anh tán em cả tháng nay tốn bao nhiêu công sức rồi đấy, không đồng ý là anh buồn lắm đó!'",
        playerMessage: "Làm người yêu anh đi, anh tán em cả tháng nay tốn bao nhiêu công sức tiền bạc rồi đấy, không đồng ý là anh buồn và giận lắm đấy nhé!",
        girlReply: "Ủa anh kể công với em đấy à? Tình cảm là chuyện tự nguyện chứ đâu phải món nợ. Em thấy thất vọng về anh quá.",
        girlReactionEmoji: "😠",
        ancientComment: "Biến ân tình thành món nợ đòi hỏi, tự hủy hoại toàn bộ công phu bấy lâu nay!",
        effects: { communication: -3, confidence: -2, empathy: -4, respect: -5, humor: -2, impression: -5 }
      },
      {
        id: "D",
        tag: "Phong vị cổ phong hiệp lãng",
        text: "Hóa thân kiếm khách ngỏ ý: 'Bí kíp tình trường thiên hạ có trăm trang, nhưng trang đẹp nhất trong lòng tại hạ chính là được cùng Thảo viết tiếp trọn đời. Nàng có bằng lòng làm nữ hiệp độc nhất của anh không?'",
        playerMessage: "Bí kíp tình trường thiên hạ ghi chép trăm trang, nhưng chương đẹp nhất trong lòng anh chính là được cùng Thảo viết tiếp câu chuyện này. Em có bằng lòng làm 'nữ chính' đồng hành cùng anh không?",
        girlReply: "Hahaha đại hiệp xuất chiêu này thì tại hạ làm sao đỡ nổi nữa đây! Chiêu này quá đỉnh... Em đồng ý cùng đại hiệp hành tẩu giang hồ trọn đời! 🌸🥰",
        girlReactionEmoji: "🌸",
        ancientComment: "Duyên dáng vô song, kết hợp dí dỏm cùng chân tình son sắt, đắc đạo thành danh!",
        effects: { communication: 4, confidence: 4, empathy: 3, respect: 4, humor: 4, impression: 5 }
      }
    ]
  }
];

// Dữ liệu cho Mini-game phản xạ (5 câu hỏi nhanh 10 giây)
window.MINIGAME_QUESTIONS = [
  {
    id: 1,
    prompt: "Cô gái hỏi khéo: 'Anh ơi... hôm nay bạn thân em bảo nhìn anh trông có nét hơi lăng nhăng đấy :('",
    timeLimit: 10,
    girlVoice: "Bạn thân em bảo nhìn anh trông lăng nhăng lắm á...",
    choices: [
      {
        text: "Bạn em nhìn chuẩn ghê! Anh chỉ lăng nhăng trong suy nghĩ về mỗi mình em thôi nè.",
        score: 3,
        feedback: "Dí dỏm lật ngược thế cờ! Nàng bật cười thẹn thùng!",
        reaction: "😆"
      },
      {
        text: "Bạn em là ai mà dám phán xét anh? Kêu bạn em lo việc của nó đi!",
        score: 0,
        feedback: "Quá hung hãn, tự ái thiếu bản lĩnh! Nàng lập tức lạnh lùng.",
        reaction: "😤"
      },
      {
        text: "Ơ anh thề anh ngoan lắm, từ bé tới giờ anh chưa yêu ai bao giờ thật mà...",
        score: 1,
        feedback: "Lúng túng bào chữa làm giảm độ tin cậy.",
        reaction: "🤨"
      },
      {
        text: "Khuôn mặt là do ba mẹ ban cho, nhưng sự chung thủy chân thành thì anh chỉ dành cho người xứng đáng thôi!",
        score: 3,
        feedback: "Điềm đạm, vững chãi, ghi điểm 10 tuyệt đối!",
        reaction: "🥰"
      }
    ]
  },
  {
    id: 2,
    prompt: "Cú lừa 23:00 đêm: 'Anh ơi em đang đứng dưới cổng trọ anh nè, xuống mở cửa cho em đi!'",
    timeLimit: 10,
    girlVoice: "Em đang dưới cổng nhà anh nè, mở cửa đi!",
    choices: [
      {
        text: "Ủa thật hả? Khoan đã, trọ anh có 2 con becgie canh cổng, em vượt qua được chưa mà đòi tới cửa haha?",
        score: 3,
        feedback: "Tỉnh táo bắt bài cú lừa đêm khuya một cách hóm hỉnh!",
        reaction: "🤣"
      },
      {
        text: "Khuya rồi em đến làm gì đấy? Anh đang dở trận game leo rank với bạn.",
        score: 0,
        feedback: "Mê game hơn gái, tự hủy phút 89!",
        reaction: "🤦‍♀️"
      },
      {
        text: "Chạy thục mạng xuống mở cửa không thèm mặc áo khoác (bị nàng chụp ảnh trêu quê độ).",
        score: 1,
        feedback: "Nhiệt tình nhưng bị nàng bắt bài lừa ngọt xớt!",
        reaction: "😜"
      },
      {
        text: "Nếu thật thì anh bay xuống đón liền, còn nếu là chiêu thử lòng thì đại hiệp đã pha sẵn trà ấm đợi tiểu thư rồi!",
        score: 3,
        feedback: "Khéo léo vô cùng! Tiến thoái lưỡng toàn!",
        reaction: "✨"
      }
    ]
  },
  {
    id: 3,
    prompt: "Nàng gửi ảnh vừa cắt tóc: 'Em mới cắt tóc ngắn nè, anh thấy thế nào?'",
    timeLimit: 10,
    girlVoice: "Em mới cắt quả tóc ngắn này, anh thấy sao?",
    choices: [
      {
        text: "Ủa anh thấy tóc cũ dài đẹp hơn mà, tự nhiên cắt đi uổng thế em?",
        score: 0,
        feedback: "Chê thẳng mặt mái tóc mới của con gái - Điều tối kỵ thiên hạ!",
        reaction: "😡"
      },
      {
        text: "Oa tôn đường nét khuôn mặt em dã man! Nhìn vừa cá tính lại trẻ ra mấy tuổi, đáng yêu xỉu!",
        score: 3,
        feedback: "Khen chi tiết, đúng tâm lý con gái vừa làm tóc!",
        reaction: "😍"
      },
      {
        text: "Cũng được, tóc nào nhìn chả như tóc nào.",
        score: 0,
        feedback: "Vô cảm, nhạt nhẽo như canh thiếu muối.",
        reaction: "😒"
      },
      {
        text: "Xinh đến mức anh phải dụi mắt ba lần mới tin đây là người yêu tương lai của mình đấy!",
        score: 3,
        feedback: "Lời khen ngọt ngào làm tim nàng lỡ nhịp!",
        reaction: "🙈"
      }
    ]
  },
  {
    id: 4,
    prompt: "Nàng than thở giờ tan tầm: 'Em đói bụng quá mà không biết ăn gì hết trơn á...'",
    timeLimit: 10,
    girlVoice: "Đói xỉu mà không biết ăn gì giờ...",
    choices: [
      {
        text: "Không biết ăn gì thì nhịn đi em, nhân tiện giảm cân luôn haha.",
        score: 0,
        feedback: "Đùa vô duyên, động chạm cân nặng - Tự sát không lối thoát!",
        reaction: "🤬"
      },
      {
        text: "Anh gợi ý 2 món: Phở bò nóng phố cũ hoặc bún chả nướng than hoa. Em thích thanh đạm hay đậm vị, 15 phút nữa anh qua chở đi!",
        score: 3,
        feedback: "Quyết đoán, đưa 2 lựa chọn cụ thể, có hành động rõ ràng!",
        reaction: "🤤"
      },
      {
        text: "Tùy em á, ăn gì chả được, em tự chọn đi.",
        score: 0,
        feedback: "Câu trả lời cấm kỵ nhất trong lịch sử nhân loại!",
        reaction: "🙄"
      },
      {
        text: "Mở app ship cho em hộp cơm bò nướng sốt tiêu đen, 20 phút nữa shipper giao nhé!",
        score: 3,
        feedback: "Tốc chiến tốc thắng, người đàn ông của hành động!",
        reaction: "🥰"
      }
    ]
  },
  {
    id: 5,
    prompt: "Nàng hỏi sâu lắng: 'Nếu sau này tụi mình cãi nhau to, anh có bỏ rơi em một mình không?'",
    timeLimit: 10,
    girlVoice: "Nếu tụi mình cãi nhau, anh có bỏ đi không?",
    choices: [
      {
        text: "Ai sai thì người đó phải chịu chứ, em vô lý thì anh đi là đúng rồi.",
        score: 0,
        feedback: "Hiếu thắng, thắng lý lẽ nhưng thua cả cuộc tình!",
        reaction: "💔"
      },
      {
        text: "Anh có thể cần vài phút để cả hai cùng hạ nhiệt, nhưng anh sẽ không bao giờ buông tay hay để em bơ vơ giữa giông bão.",
        score: 3,
        feedback: "Trưởng thành, vững vàng, câu trả lời của một chỗ dựa trọn đời!",
        reaction: "🥹"
      },
      {
        text: "Cãi nhau thì anh ôm em một cái là huề cả làng, cãi làm gì cho mỏi miệng nè!",
        score: 2,
        feedback: "Dễ thương nhưng hơi né tránh thực tế một chút.",
        reaction: "🤗"
      },
      {
        text: "Yên tâm đi, anh luôn nhận sai 100%, em muốn gì cũng được hết!",
        score: 1,
        feedback: "Nịnh nọt thái quá, thiếu đi sự chân thật lâu dài.",
        reaction: "😐"
      }
    ]
  }
];

// Danh hiệu dựa trên thống kê
window.TITLES_DATA = [
  {
    id: "master",
    title: "Bậc Thầy Tán Gái",
    subTitle: "Cửu Dương Chân Kinh Đại Thành",
    minTotalScore: 24,
    minMiniScore: 4,
    description: "Ngươi đã lãnh hội tuyệt đỉnh tâm pháp tình trường! Vừa biết lắng nghe, điềm đạm, lại sở hữu khiếu hài hước duyên dáng và sự tôn trọng mực thước. Nàng ở bên ngươi cảm thấy vừa an toàn, vừa ngập tràn cảm xúc rung động.",
    stamp: "THẦN QUÂN",
    color: "#e6b422"
  },
  {
    id: "green_flag",
    title: "Green Flag Chính Hiệu",
    subTitle: "Quý Lãng Tử Tinh Tế & Đáng Tin Cậy",
    minTotalScore: 20,
    minMiniScore: 3,
    description: "Ngươi chính là hình mẫu 'cờ xanh' rực rỡ mà mọi cô gái đều ao ước! Không vội vàng, tôn trọng ranh giới, tinh tế trong từng cử chỉ nhỏ nhặt. Dù đối phương có băng giá đến đâu cũng phải tan chảy trước sự chân thành của ngươi.",
    stamp: "CHÂN DUYÊN",
    color: "#2ecc71"
  },
  {
    id: "good_listener",
    title: "Bạch Mã Trầm Ấm",
    subTitle: "Đệ Nhất Cao Thủ Lắng Nghe",
    minTotalScore: 16,
    minMiniScore: 2,
    description: "Thế mạnh lớn nhất của ngươi là sự thấu cảm sâu sắc. Khi người khác mải mê khoe khoang, ngươi chọn làm bờ vai tĩnh lặng để nàng trút bầu tâm sự. Một tri kỷ đích thực, bước chuyển hóa thành người yêu chỉ còn là vấn đề thời gian.",
    stamp: "TRI KỶ",
    color: "#3498db"
  },
  {
    id: "potential",
    title: "Tập Sự Tiêu Dao",
    subTitle: "Có Tiềm Năng Cần Rèn Giũa Thêm",
    minTotalScore: 12,
    minMiniScore: 2,
    description: "Ngươi có tố chất tốt và tâm hồn thiện lương, nhưng đôi khi còn hơi lúng túng hoặc an toàn quá mức. Hãy mạnh dạn thể hiện cá tính riêng và học cách nắm bắt khoảnh khắc quyết định nhé!",
    stamp: "TIỀM NĂNG",
    color: "#f39c12"
  },
  {
    id: "rushed",
    title: "Tốc Chiến Tốc Bại",
    subTitle: "Hơi Vội Vàng & Đốt Cháy Giai Đoạn",
    minTotalScore: 8,
    minMiniScore: 1,
    description: "Ngươi có thừa tự tin nhưng lại quá nóng vội! Vừa quen đã vội tung đòn quyết định khiến đối phương cảm thấy ngột ngạt và đề phòng. Hãy nhớ: 'Dục tốc bất đạt', tình cảm cần được ủ men theo năm tháng.",
    stamp: "CẨN TRỌNG",
    color: "#e67e22"
  },
  {
    id: "friendzone",
    title: "Chúa Tể Friendzone",
    subTitle: "Đại Hiệp Kết Nghĩa Kim Lan",
    minTotalScore: 6,
    minMiniScore: 1,
    description: "Ngươi quá an toàn, nhút nhát và sợ từ chối đến mức biến mình thành 'chị em tốt' hoặc 'anh trai mưa' của nàng! Muốn thoát khỏi kiếp bạn thân, ngươi phải học cách phát tín hiệu lãng mạn rõ ràng hơn.",
    stamp: "KIM LAN",
    color: "#9b59b6"
  },
  {
    id: "seen_king",
    title: "Thánh Seen Hộp Thư",
    subTitle: "Người Tàng Hình Trong Mắt Nàng",
    minTotalScore: 3,
    minMiniScore: 0,
    description: "Những câu hỏi nhạt nhẽo kiểu 'ăn cơm chưa' hay thái độ giận dỗi trẻ con đã biến hộp thư của ngươi thành sa mạc hoang vu. Mau mau lật lại bí kíp từ đầu để tái lập công phu!",
    stamp: "TÀNG HÌNH",
    color: "#95a5a6"
  },
  {
    id: "self_destruct",
    title: "Bậc Thầy Tự Hủy",
    subTitle: "Tuyệt Kỹ Tự Đốt Thuyền",
    minTotalScore: -99,
    minMiniScore: 0,
    description: "Ngươi đã hội tụ đủ combo flex lố, gia trưởng ép buộc và vô duyên khi giao tiếp! Chúc mừng ngươi đã kích hoạt thành công tuyệt kỹ tự hủy khiến cô gái chạy mất dép sau 3 nốt nhạc. Hãy tẩy tủy công phu và đọc lại sách ngay lập tức!",
    stamp: "TỰ HỦY",
    color: "#e74c3c"
  }
];
