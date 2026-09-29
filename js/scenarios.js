/**
 * BÍ KÍP TÁN GÁI - 7 Tình Huống Kể Chuyện Tương Tác Liên Hoàn
 * Nhân vật: BẠN & THANH THẢO
 * Hành trình: Gặp gỡ tại thư viện -> Tin nhắn đầu tiên -> Vượt qua thử thách ->
 *            Gặp lại sau thi -> Buổi hẹn đầu tiên -> Làm điểm tựa thấu cảm -> Lời tỏ tình ven hồ.
 * Logic: Nếu đi đúng hướng (tôn trọng, thấu cảm, chân thành) -> Hai người đến với nhau.
 *        Nếu đi sai hướng (áp đặt, kể công, né tránh, thiếu tôn trọng) -> Thất bại.
 */

window.SCENARIOS_DATA = [
  {
    id: 1,
    chapter: "Chương 1",
    chapterTitle: "Kỳ Ngộ Tại Tàng Kinh Các",
    badge: "Lần Đầu Gặp Gỡ",
    setting: "Thư Viện Trường Đại Học — Chiều Thứ Sáu Yên Tĩnh",
    context: "Bạn và Thanh Thảo tình cờ ngồi đối diện nhau tại bàn dài trong thư viện. Thảo đang loay hoay với chiếc tai nghe bluetooth không thể kết nối vào laptop để nghe bài giảng, trán lấm tấm mồ hôi. Thỉnh thoảng cô khẽ ngước nhìn bạn như muốn nhờ giúp nhưng còn e ngại.",
    ancientWisdom: "Lời dẫn cổ thư: 'Vạn sự khởi đầu nan. Cuộc gặp gỡ đầu tiên tựa giọt nước rơi vào mặt hồ phẳng lặng, cần sự tự nhiên, chừng mực và quan sát tinh tế.'",
    girlStatus: "Chưa quen",
    initialMessages: [
      { sender: "girl", text: "Ước gì cái tai nghe này nó không dở chứng kết nối lúc đang cần nghe bài thế này... T_T", time: "14:15" },
      { sender: "system", text: "Thanh Thảo khẽ ngước mắt lên nhìn bạn, vẻ mặt vừa ngượng vừa bối rối...", time: "14:15" }
    ],
    choices: [
      {
        id: "A",
        tag: "Chủ động giúp đỡ",
        text: "Bạn thử xóa thiết bị cũ trong danh sách Bluetooth rồi ghép lại từ đầu xem, nhiều khi bị kẹt cache cũ đó. Cần mình hỗ trợ không?",
        playerMessage: "Bạn thử xóa thiết bị cũ trong Bluetooth rồi ghép lại từ đầu xem, nhiều khi bị kẹt cache kết nối cũ đó. Cần mình hỗ trợ gì không?",
        girlReply: "Ui may quá được rồi nè! Mình loay hoay nãy giờ ngại ghê á. Cảm ơn bạn nhiều nha, bạn chu đáo thật đấy! ✨",
        girlReactionEmoji: "🥰",
        softSkills: ["Quan sát tinh tế", "Chủ động hỗ trợ đúng lúc"],
        evaluation: "Hành động xuất phát từ thiện ý tự nhiên, đúng điều đối phương cần mà không tạo áp lực hay vồ vập.",
        ancientComment: "Biết quan sát điều nhỏ nhặt, ra tay đúng lúc tựa gió xuân ấm áp, đối phương ắt cảm nhận được sự tin cậy.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 0, impression: 2 }
      },
      {
        id: "B",
        tag: "Gợi ý gián tiếp",
        text: "Góc phòng bên kia có bàn cắm tai nghe có dây dự phòng đó bạn, nếu gấp thì qua đó cắm tạm xem sao.",
        playerMessage: "Góc phòng bên kia có bàn cắm tai nghe có dây dự phòng của thư viện đó bạn, nếu gấp thì qua đó cắm tạm xem sao.",
        girlReply: "Dạ để mình ngó thử xem sao... Cảm ơn bạn đã chỉ nhé! 🙂",
        girlReactionEmoji: "🙂",
        softSkills: ["Lịch sự", "Giữ khoảng cách an toàn"],
        evaluation: "Lịch sự và có thiện chí nhưng hơi xa cách, bỏ lỡ cơ hội kết nối tự nhiên một cách ấm áp hơn.",
        ancientComment: "An toàn nhưng thiếu chút nhiệt huyết. Lời nói đúng mực nhưng tựa nước chảy hoa trôi, chưa đủ đọng lại dư ba.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Khoe mẽ giải pháp",
        text: "Dùng tạm tai nghe chống ồn xịn này của mình đi, hàng cao cấp nghe bao êm khỏi lo lỗi kết nối linh tinh!",
        playerMessage: "Dùng tạm tai nghe chống ồn xịn này của mình đi bạn ơi! Hàng cao cấp nghe êm ru khỏi lo lỗi kết nối linh tinh.",
        girlReply: "Dạ thôi phiền bạn quá, mình cắm dây tạm được rồi, cảm ơn bạn nhé... (quay đi tiếp tục làm việc)",
        girlReactionEmoji: "😅",
        softSkills: ["Nhiệt tình thái quá", "Thiếu cảm nhận ranh giới"],
        evaluation: "Đem vật chất hoặc giải pháp cá nhân áp đặt khi chưa quen biết dễ tạo cảm giác khoe mẽ hoặc vồn vã không cần thiết.",
        ancientComment: "Lòng tốt nếu phô trương quá trớn sẽ biến thành gánh nặng. Đối phương chưa quen ắt sinh tâm lý phòng vệ.",
        effects: { communication: 0, confidence: 1, empathy: -1, respect: -1, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Pha trò dí dỏm",
        text: "Bình tĩnh! Bluetooth thời 4.0 đôi khi cũng cần tuyệt chiêu 'tắt đi bật lại' như tivi cổ bạn ơi haha, thử xem sao!",
        playerMessage: "Bình tĩnh! Bluetooth thời hiện đại nhiều khi cũng cần tuyệt chiêu 'tắt đi bật lại' như tivi cổ bạn ơi haha, thử xem sao!",
        girlReply: "Hahaha đại hiệp cứu nguy kịp thời quá! Bái phục bái phục! Cảm ơn đại hiệp nha =))) 🤣",
        girlReactionEmoji: "😆",
        softSkills: ["Hài hước tình huống", "Phá vỡ khoảng cách (Ice-breaking)"],
        evaluation: "Dùng khiếu hài hước đúng lúc giúp xua tan sự ngượng ngùng và mở ra câu chuyện tự nhiên.",
        ancientComment: "Dí dỏm như hoa nở đầu mùa, tức thì phá vỡ tảng băng ngượng ngùng chốn công cộng.",
        effects: { communication: 2, confidence: 2, empathy: 1, respect: 1, humor: 3, impression: 2 }
      }
    ]
  },
  {
    id: 2,
    chapter: "Chương 2",
    chapterTitle: "Tương Phùng Hộp Thư",
    badge: "Mở Đầu Hội Thoại Số",
    setting: "Phòng Trọ — 21:30 Đêm Sau Buổi Thư Viện",
    context: "Chiều hôm đó hai bạn đã trao đổi liên lạc trước khi chia tay ở sảnh thư viện. Bây giờ là 21:30, Thảo vừa sáng đèn hoạt động mạng xã hội. Đây là tin nhắn đầu tiên để bắt đầu một cuộc trò chuyện trực tuyến.",
    ancientWisdom: "Lời dẫn cổ thư: 'Lời nói đầu tiên qua thư từ tựa như tiếng gõ cửa. Tránh dồn dập như tra hỏi, cũng chớ vồ vập buông lời ong bướm; hãy gõ nhẹ bằng điểm chung chân thực.'",
    girlStatus: "Mới quen",
    initialMessages: [
      { sender: "system", text: "Bạn và Thanh Thảo đã kết nối trên mạng xã hội.", time: "21:30" },
      { sender: "system", text: "Thanh Thảo đang hiển thị trạng thái: Đang hoạt động 🟢", time: "21:31" }
    ],
    choices: [
      {
        id: "A",
        tag: "Gợi chuyện kỷ niệm",
        text: "Chào 'nạn nhân Bluetooth'! Chiều nay Thảo về nộp bài tập nhóm kịp deadline không nè?",
        playerMessage: "Chào 'nạn nhân Bluetooth'! Chiều nay Thảo về nộp bài tập nhóm kịp deadline không nè?",
        girlReply: "Haha trời ơiii đừng nhắc vụ đó nữa quê xỉu! 🙈 Cơ mà may nộp trước hạn 5 phút hú hồn luôn á bạn!",
        girlReactionEmoji: "😆",
        softSkills: ["Gợi nhắc trải nghiệm chung", "Tạo chủ đề tiếp nối"],
        evaluation: "Nhắc lại một chi tiết vui có thật giúp cuộc trò chuyện có ngữ cảnh rõ ràng, đối phương dễ dàng hưởng ứng.",
        ancientComment: "Dựa vào duyên ngộ ban đầu mà khéo léo gợi lại nụ cười, sợi dây liên kết tự nhiên được bện chặt.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 2, impression: 2 }
      },
      {
        id: "B",
        tag: "Hỏi thăm thông thường",
        text: "Chào Thảo, tối nay bạn có bận gì không? Bạn ăn cơm tối chưa thế?",
        playerMessage: "Chào Thảo, tối nay bạn có bận gì không? Bạn ăn cơm tối chưa thế?",
        girlReply: "Chào bạn nha, mình ăn rồi nè. Giờ đang lướt mạng xíu thôi à.",
        girlReactionEmoji: "🙂",
        softSkills: ["Lịch sự cơ bản", "Hơi thiếu điểm nhấn"],
        evaluation: "Mẫu câu hỏi thăm phổ thông, an toàn nhưng không gợi mở được cảm xúc hay chủ đề thảo luận sâu sắc hơn.",
        ancientComment: "Chén nước trắng giải được khát nhưng không lưu lại dư vị trà thơm. Cuộc trò chuyện dễ rơi vào ngõ cụt.",
        effects: { communication: 1, confidence: 0, empathy: 0, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Thổ lộ ấn tượng sớm",
        text: "Chiều nay gặp Thảo về làm mình cứ nhớ mãi... Bạn cười duyên làm người ta mất tập trung ghê á.",
        playerMessage: "Chiều nay gặp Thảo về làm mình cứ nhớ mãi... Bạn cười duyên làm người ta mất tập trung ghê á.",
        girlReply: "Ủa bạn nói quá rồi nè haha :)) Bạn hay khen các bạn nữ mới quen vậy lắm đúng hông?",
        girlReactionEmoji: "🤨",
        softSkills: ["Vội vàng biểu lộ", "Thiếu căn cứ thực tế"],
        evaluation: "Khi hai bên chưa có tương tác sâu, khen ngợi mang tính lãng mạn sớm dễ khiến đối phương cảnh giác hoặc nghi ngại.",
        ancientComment: "Mầm cây chưa bén rễ đã vội đòi trổ hoa. Lời ngọt ngào sớm quá chỉ khiến người ta nghi ngại động cơ.",
        effects: { communication: 0, confidence: 1, empathy: -1, respect: 0, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Kể chuyện tếu táo",
        text: "Vừa lướt thấy group trường đăng tìm chủ nhân chiếc tai nghe bỏ quên, làm mình giật thót tưởng Thảo haha!",
        playerMessage: "Vừa lướt thấy group trường đăng tin tìm khách để quên tai nghe, làm mình giật thót tưởng Thảo cơ đấy haha!",
        girlReply: "Ủa thiệt hả?? Làm mình hết hồn chạy đi lục balo! May quá vẫn còn nguyên =))) Bạn khéo dọa người ta ghê!",
        girlReactionEmoji: "🤣",
        softSkills: ["Tạo cảm xúc bất ngờ", "Hài hước nhẹ nhàng"],
        evaluation: "Tạo một tình huống bất ngờ nho nhỏ rồi giải tỏa bằng tiếng cười, giúp đối phương phản hồi nhiệt tình.",
        ancientComment: "Dùng chuyện vui làm nhịp cầu, tạo bất ngờ nho nhỏ mở lối cho sự gần gũi thân tình.",
        effects: { communication: 2, confidence: 2, empathy: 1, respect: 1, humor: 3, impression: 2 }
      }
    ]
  },
  {
    id: 3,
    chapter: "Chương 3",
    chapterTitle: "Hàn Băng Thử Thách",
    badge: "Thấu Cảm Khi Nhịp Giảm",
    setting: "Hộp Thư Tin Nhắn — Tối Thứ Tư Giữa Kỳ",
    context: "Sau vài ngày nhắn tin ăn ý, tối nay Thảo bỗng dưng phản hồi rất ngắn: 'Dạ không...', 'Uhm thế à...'. Cảm giác nhịp độ cuộc trò chuyện chùng hẳn xuống. Mùa thi cử tiểu luận đang cận kề và Thảo có vẻ đang cạn kiệt năng lượng.",
    ancientWisdom: "Lời dẫn cổ thư: 'Biển có lúc triều lên triều xuống, người có lúc mỏi mệt trầm tư. Thấy đối phương chậm lại, người có trí biết lùi một bước để nhường không gian, không cuống cuồng giục giã.'",
    girlStatus: "Có thiện cảm",
    initialMessages: [
      { sender: "player", text: "Hôm nay trường mình có hội thảo đổi mới sáng tạo đông vui lắm, Thảo có tham gia không?", time: "20:45" },
      { sender: "girl", text: "Dạ không...", time: "20:52" },
      { sender: "girl", text: "Uhm thế à.", time: "20:53" }
    ],
    choices: [
      {
        id: "A",
        tag: "Tôn trọng nhịp điệu",
        text: "Nghe chừng hôm nay Thảo cạn pin năng lượng rồi nè. Bạn nghỉ ngơi sớm cho lại sức nha, khi nào rảnh tụi mình nói chuyện sau cũng được nè!",
        playerMessage: "Nghe chừng hôm nay Thảo cạn pin năng lượng rồi nè. Bạn nghỉ ngơi sớm cho lại sức nha, khi nào rảnh tụi mình nói chuyện sau cũng được nè!",
        girlReply: "Ui cảm ơn bạn đã hiểu cho mình nha... Nãy giờ mình đang bị giảng viên mắng vì bài tiểu luận nhóm á, đầu óc căng thẳng quá nên không rep đàng hoàng được. Cảm ơn bạn nhiều vì không phiền lòng nhé 🥺",
        girlReactionEmoji: "🥺",
        softSkills: ["Đọc tín hiệu cảm xúc", "Tôn trọng ranh giới cá nhân", "Không đặt cái tôi lên trước"],
        evaluation: "Biết lùi lại khi nhận thấy người khác đang mệt mỏi là biểu hiện của sự trưởng thành và tinh tế trong giao tiếp.",
        ancientComment: "Biết lùi để giữ hòa khí, hiểu người mệt mỏi mà không trách cứ, đó là khí chất của người biết lắng nghe.",
        effects: { communication: 3, confidence: 2, empathy: 3, respect: 3, humor: 0, impression: 3 }
      },
      {
        id: "B",
        tag: "Hỏi rõ nguyên do",
        text: "Sao nay Thảo nói chuyện cụt lủn vậy? Mình làm gì khiến bạn khó chịu hay giận à?",
        playerMessage: "Sao nay Thảo nói chuyện cụt lủn vậy? Mình làm gì khiến bạn khó chịu hay giận à?",
        girlReply: "Hông có gì đâu bạn ơi... Mình đang mệt xíu thôi. Bạn đừng nghĩ nhiều.",
        girlReactionEmoji: "😐",
        softSkills: ["Thẳng thắn nhưng thiếu nhạy cảm"],
        evaluation: "Hỏi quá trực diện khi đối phương đang kiệt sức vô tình biến vấn đề của họ thành vấn đề của bạn, gây thêm áp lực phải giải thích.",
        ancientComment: "Tâm chưa an mà đã vội chất vấn, tuy không có ác ý nhưng khiến đối phương thêm phần gánh nặng.",
        effects: { communication: 0, confidence: 0, empathy: -1, respect: 0, humor: 0, impression: -1 }
      },
      {
        id: "C",
        tag: "Gửi meme xoa dịu",
        text: "Bíp bíp! Hệ thống phát hiện bạn Thảo sắp hết pin. Xin phép gửi một chiếc meme mèo sạc năng lượng haha! [Meme mèo ngủ]",
        playerMessage: "Bíp bíp! Hệ thống phát hiện bạn Thảo sắp hết pin. Xin phép gửi một chiếc meme mèo sạc năng lượng haha! [Meme mèo ngủ]",
        girlReply: "Hahaha cute xỉu, đúng lúc mình đang stress nhìn thấy phì cười luôn á! Cảm ơn bạn nha :v",
        girlReactionEmoji: "😹",
        softSkills: ["Hài hước xoa dịu căng thẳng", "Không gây áp lực"],
        evaluation: "Một cử chỉ nhẹ nhàng, vui vẻ không đòi hỏi câu trả lời dài có thể giúp xoa dịu áp lực hiệu quả.",
        ancientComment: "Một nụ cười nhẹ xoa dịu mệt mỏi, không ép người đàm đạo, tâm ý nhẹ tựa cánh lông hồng.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 3, impression: 2 }
      },
      {
        id: "D",
        tag: "Để không gian tĩnh lặng",
        text: "(Thả tim nhẹ nhàng vào tin nhắn và để không gian yên tĩnh cho Thảo ngủ sớm, sáng hôm sau mới hỏi thăm)",
        playerMessage: "(Bạn thả biểu cảm nhẹ nhàng và để không gian yên tĩnh cho Thảo nghỉ ngơi)",
        girlReply: "(Sáng hôm sau 07:30) 'Hôm qua mình mệt quá ngủ quên mất tiêu, chúc bạn ngày mới nhiều năng lượng nha!'",
        girlReactionEmoji: "🌤️",
        softSkills: ["Điềm tĩnh", "Kiên nhẫn"],
        evaluation: "Im lặng có chừng mực là một lựa chọn an toàn, giúp đối phương không bị ngột ngạt.",
        ancientComment: "Biết im lặng đúng lúc cũng là một loại công phu. Giữ được sự điềm đạm trước biến chuyển của thế sự.",
        effects: { communication: 1, confidence: 1, empathy: 2, respect: 2, humor: 0, impression: 1 }
      }
    ]
  },
  {
    id: 4,
    chapter: "Chương 4",
    chapterTitle: "Hơi Thở Sau Thi",
    badge: "Tương Tác Đời Thực",
    setting: "Cổng Trường Đại Học — Chiều Thứ Sáu Tan Ca Thi",
    context: "Kỳ thi kết thúc. Vừa bước ra cổng trường, bạn tình cờ chạm mặt Thảo. Cô nàng vừa cất bài thi vào balo, thở phào nhẹ nhõm: 'Cuối cùng cũng thi xong môn cuối! Cảm giác như được giải thoát vậy đó trời ơi!'. Đây là cơ hội để hai người có buổi trò chuyện trực tiếp tự nhiên ngoài đời.",
    ancientWisdom: "Lời dẫn cổ thư: 'Cơ hội như gió mát qua sân, người biết nắm bắt tự nhiên sẽ không biến nó thành gánh nặng. Một lời rủ bình dị đúng lúc hơn trăm lời hẹn mông lung.'",
    girlStatus: "Có thiện cảm",
    initialMessages: [
      { sender: "girl", text: "Cuối cùng cũng thi xong môn cuối! Cảm giác như được giải thoát khỏi ngục tù vậy đó trời ơiii 🎉", time: "16:30" },
      { sender: "player", text: "Chúc mừng Thảo nha! Nhìn mặt tươi tỉnh hẳn lên rồi nè.", time: "16:31" },
      { sender: "girl", text: "Đúng luônnn, thi xong chỉ muốn kiếm gì đó ngon mát ăn cho đã thôi á! 🤤", time: "16:32" }
    ],
    choices: [
      {
        id: "A",
        tag: "Rủ ăn vặt quen thuộc",
        text: "Gần trường có quán kem bơ dừa nướng ngon đỉnh chóp. Mình tính ghé ăn xả stress, Thảo có muốn lập team cùng đi luôn không nè?",
        playerMessage: "Gần trường có quán kem bơ dừa nướng ngon xỉu á. Mình tính ghé ăn xả stress nè, Thảo có muốn lập team cùng đi luôn không?",
        girlReply: "Trời ơiii kem bơ dừa nướng là món ruột của tui luôn á! Đi liền đi liền, đói meo từ trưa tới giờ rồi nè! 🍨🤩",
        girlReactionEmoji: "🤩",
        softSkills: ["Tự nhiên gần gũi", "Đúng thời điểm", "Không áp lực câu nệ"],
        evaluation: "Một lời rủ bình dị, đúng lúc đối phương đang hào hứng, tạo không khí thoải mái như hai người bạn hợp cạ.",
        ancientComment: "Lấy sự mộc mạc chân phương kết nối tâm hồn. Đơn giản mà hiệu quả lạ kỳ, bước ngoặt tự nhiên hé mở.",
        effects: { communication: 3, confidence: 2, empathy: 2, respect: 2, humor: 2, impression: 3 }
      },
      {
        id: "B",
        tag: "Hẹn chung chung",
        text: "Chúc mừng Thảo nha! Hôm nào rảnh rỗi tụi mình rủ nhau đi ăn mừng sau cũng được nè.",
        playerMessage: "Chúc mừng Thảo nha! Hôm nào rảnh tụi mình đi cafe ăn mừng sau nha.",
        girlReply: "Uhm oke nè, để xem cuối tuần này mình có vướng lịch gì không rồi tính sau nha.",
        girlReactionEmoji: "🙂",
        softSkills: ["Thiếu sự quyết đoán", "Kế hoạch mơ hồ"],
        evaluation: "Lời hẹn 'hôm nào' thường dễ trôi vào quên lãng vì bỏ lỡ năng lượng hào hứng ngay trước mắt.",
        ancientComment: "Lời hẹn mông lung tựa sương khói sớm mai, dễ tan biến vào dòng chảy thường nhật.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Áp đặt lịch trình",
        text: "Tối nay 19h mình qua đón Thảo đi ăn nhà hàng nướng sang chảnh mừng thi xong nhé. Cứ để mình lo hết, bạn không cần chuẩn bị gì đâu!",
        playerMessage: "Tối nay 19h mình qua đón Thảo đi ăn đồ nướng sang xịn nhé. Bạn không cần lo gì hết, mình đặt bàn sẵn rồi đó!",
        girlReply: "À... cảm ơn ý tốt của bạn nha, nhưng tối nay mình có hẹn ăn cơm với cả nhà rồi á. Với lại tụi mình đi ăn vặt bình thường cho tiện hơn nha.",
        girlReactionEmoji: "😅",
        softSkills: ["Hơi áp đặt", "Chưa lắng nghe nhu cầu đối phương"],
        evaluation: "Tự ý sắp xếp mọi thứ mà không hỏi trước ý kiến dễ tạo cảm giác thiếu tôn trọng và gây áp lực cho đối phương.",
        ancientComment: "Lòng nhiệt tình biến thành sự chuyên quyền áp đặt. Thiếu đi sự thương thảo bình đẳng giữa đôi bên.",
        effects: { communication: 0, confidence: 2, empathy: -2, respect: -2, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Đi bộ trò chuyện",
        text: "Mình cũng đang đi bộ ra trạm xe buýt nè, đi cùng một đoạn nói chuyện cho vui, kể nghe thi cử làm bài ổn không?",
        playerMessage: "Mình cũng đang đi bộ ra trạm xe buýt nè, đi cùng một đoạn nói chuyện cho vui, kể mình nghe thi cử làm bài ổn không?",
        girlReply: "Haha đi chung đi! Cảm giác lâu lắm mới thở phào được, tuần rồi ôn thi căng thẳng muốn xỉu luôn á bạn ơi...",
        girlReactionEmoji: "🤗",
        softSkills: ["Giao tiếp chân thực", "Tạo sự đồng hành"],
        evaluation: "Đề nghị đơn giản, tự nhiên, mở ra không gian để đối phương chia sẻ và cảm nhận sự hiện diện chân thành của bạn.",
        ancientComment: "Bước chân cạnh nhau trên cùng một lối, khoảng cách tự nhiên thu ngắn lại không cần màu mè hoa mỹ.",
        effects: { communication: 2, confidence: 2, empathy: 3, respect: 2, humor: 1, impression: 2 }
      }
    ]
  },
  {
    id: 5,
    chapter: "Chương 5",
    chapterTitle: "Xuất Chiêu Hẹn Ước",
    badge: "Kỹ Năng Đưa Ra Lời Mời",
    setting: "Hộp Thư Trò Chuyện — Tối Thứ Ba Tuần Kế Tiếp",
    context: "Sau buổi đi ăn kem vui vẻ, hai bạn thường xuyên nhắn tin chia sẻ về sở thích nhiếp ảnh, sách và nghệ thuật. Thảo vừa đăng một bức ảnh phim cũ kèm dòng trạng thái: 'Ước gì cuối tuần này được đi đâu đó chụp choẹt ngắm nghía cho đỡ ngột ngạt'. Đây là thời cơ chín muồi để gửi một lời mời chính thức.",
    ancientWisdom: "Lời dẫn cổ thư: 'Mời hẹn người khác cốt ở ba điều: Đúng sở thích chung, thời gian địa điểm rõ ràng, và quan trọng nhất là mở sẵn một lối lui thoải mái nếu người ta bận việc.'",
    girlStatus: "Khá thân",
    initialMessages: [
      { sender: "girl", text: "Cuối tuần này mình chỉ muốn đi đâu đó thư giãn chụp choẹt xíu cho đầu óc nhẹ nhõm ✨", time: "20:30" },
      { sender: "player", text: "Thảo có điểm đến nào trong đầu chưa nè?", time: "20:31" },
      { sender: "girl", text: "Chưa nữa, bạn bè đứa nào cũng bận rộn hết trơn á 🤷‍♀️", time: "20:32" }
    ],
    choices: [
      {
        id: "A",
        tag: "Lên lịch trình theo gu",
        text: "Bên Bảo tàng Mỹ thuật đang có triển lãm ảnh phim Sài Gòn xưa đúng gu Thảo nè. Chiều Thứ Bảy rảnh tụi mình cùng đi ngắm ảnh rồi làm ly nước nha? Nếu bận việc gia đình thì dịp khác cũng hoàn toàn thoải mái nè!",
        playerMessage: "Bên Bảo tàng Mỹ thuật đang có triển lãm ảnh phim đúng gu Thảo nè. Chiều Thứ Bảy bạn rảnh không, tụi mình cùng đi dạo xem ảnh rồi làm ly nước? Nếu cuối tuần bạn vướng lịch gia đình thì để dịp khác cũng hoàn toàn thoải mái nha!",
        girlReply: "Oa triển lãm đó mình đang tính rủ bạn nào đi chung luôn á!! Trùng hợp ghê! Thứ Bảy từ 15h mình rảnh nè, chốt kèo nha bạn ơiii! ✨🎨",
        girlReactionEmoji: "🎉",
        softSkills: ["Đề xuất có định hướng", "Tôn trọng lịch trình cá nhân", "Tạo đường lui lịch sự"],
        evaluation: "Lời mời hoàn hảo: dựa trên sở thích đối phương, thời gian địa điểm cụ thể, và không tạo áp lực phải nhận lời.",
        ancientComment: "Mũi tên nhắm đúng đích, đường lui rộng mở thanh cao. Lời mời tự nhiên như mây trôi nước chảy, ai nỡ chối từ.",
        effects: { communication: 3, confidence: 3, empathy: 3, respect: 3, humor: 1, impression: 3 }
      },
      {
        id: "B",
        tag: "Rủ bâng quơ",
        text: "Hay là cuối tuần này Thảo rảnh thì tụi mình đi cafe chơi nhé, rảnh giờ nào hú mình giờ đó nha!",
        playerMessage: "Hay là hôm nào rảnh tụi mình đi cafe chơi nha Thảo, rảnh lúc nào hú mình lúc đó nè.",
        girlReply: "Uhm oke nè, để xem cuối tuần này mình có vướng học thêm gì không rồi mình báo bạn sau nha.",
        girlReactionEmoji: "🙂",
        softSkills: ["Thiếu sự quyết đoán", "Kế hoạch mơ hồ"],
        evaluation: "Lời hẹn chung chung dễ trôi vào quên lãng vì thiếu kế hoạch và mục đích cụ thể để đối phương sắp xếp.",
        ancientComment: "Lời hẹn mông lung tựa sương khói sớm mai, dễ tan biến vào dòng chảy thường nhật.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Sắp xếp độc đoán",
        text: "Thứ Bảy mình lên lịch rồi: 14h đón Thảo đi cafe sang, 16h xem phim rạp, 18h ăn tối. Cứ theo lịch mình nhé!",
        playerMessage: "Tối Thứ Bảy 19h mình qua đón Thảo đi ăn nhà hàng sang chảnh nhé. Bạn không cần lo gì hết, mình đặt bàn sẵn rồi đó!",
        girlReply: "À... bạn nhiệt tình quá, nhưng mình thích đi đâu đó nhẹ nhàng tự do hơn á. Với lại lịch kín quá làm mình hơi ngộp.",
        girlReactionEmoji: "😅",
        softSkills: ["Nhiệt tình thái quá", "Áp đặt sở thích"],
        evaluation: "Sắp đặt mọi thứ theo ý mình mà không hỏi ý kiến đối phương dễ tạo cảm giác thiếu tôn trọng và ngột ngạt.",
        ancientComment: "Lòng nhiệt tình biến thành sự chuyên quyền áp đặt. Thiếu đi sự thương thảo bình đẳng giữa đôi bên.",
        effects: { communication: 0, confidence: 2, empathy: -2, respect: -2, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Khám phá tiệm sách cũ",
        text: "Gần trường có tiệm sách cũ có ban công hoa giấy chụp ảnh phim thơ mộng lắm. Chiều Thứ Bảy tụi mình ghé khám phá rồi ngồi cafe trò chuyện không Thảo?",
        playerMessage: "Gần trường có tiệm sách cũ có ban công hoa giấy chụp ảnh phim thơ lắm. Chiều Thứ Bảy tụi mình ghé khám phá rồi ngồi cafe trò chuyện không nè?",
        girlReply: "Tiệm sách cũ ban công hoa giấy?? Nghe mê quá vậy nè! Chiều Thứ Bảy 15h tụi mình đi nha, để mình mang theo máy ảnh phim luôn! 📸☕",
        girlReactionEmoji: "🤩",
        softSkills: ["Tự nhiên gần gũi", "Đánh trúng sở thích"],
        evaluation: "Gợi ý một điểm đến thi vị, mộc mạc và đúng sở thích của đối phương, tạo cảm giác đồng điệu tâm hồn.",
        ancientComment: "Lấy cái đẹp tao nhã làm nhịp cầu nối, ý tứ tương đồng, niềm vui nhân lên gấp bội.",
        effects: { communication: 3, confidence: 2, empathy: 3, respect: 2, humor: 1, impression: 3 }
      }
    ]
  },
  {
    id: 6,
    chapter: "Chương 6",
    chapterTitle: "Thấu Tâm Chi Đạo",
    badge: "Lắng Nghe Khi Nàng Yếu Lòng",
    setting: "Đêm Muộn 22:45 — Sau Buổi Hẹn 1 Tuần",
    context: "Buổi đi chơi tuần trước diễn ra rất vui vẻ và ấm áp. Nhưng tối nay, Thảo nhắn tin lúc nửa đêm với tâm trạng nặng trĩu: dự án tốt nghiệp bị giảng viên phê bình gay gắt, một thành viên trong nhóm bỏ dở việc khiến nàng phải gánh hết, áp lực dồn nén khiến Thảo bật khóc một mình.",
    ancientWisdom: "Lời dẫn cổ thư: 'Khi người khác đang đau buồn, điều họ cần nhất là sự thấu hiểu và một đôi tai biết lắng nghe, chứ không phải một bài thuyết giảng đạo lý hay những lời dạy dỗ đúng sai.'",
    girlStatus: "Rất tin tưởng",
    initialMessages: [
      { sender: "girl", text: "Hôm nay mệt mỏi quá bạn ơi... cảm giác mọi công sức mấy tuần nay đổ sông đổ bể hết rồi :(", time: "22:45" },
      { sender: "girl", text: "Project nhóm bị thầy chê tơi bời, bạn cùng nhóm thì bỏ ngang không làm tiếp... Mình chỉ muốn ngồi khóc thôi.", time: "22:46" }
    ],
    choices: [
      {
        id: "A",
        tag: "Lắng nghe & thấu cảm",
        text: "Nghe thương Thảo ghê... Bao nhiêu áp lực dồn lên một mình bạn lúc này chắc mệt mỏi lắm. Thảo đã cố gắng hết sức rồi mà. Bây giờ bạn muốn trút hết tâm sự ra cho nhẹ lòng, hay muốn nghỉ ngơi yên tĩnh nè? Mình luôn ở đây lắng nghe Thảo nha.",
        playerMessage: "Nghe thương Thảo ghê... Bao nhiêu áp lực dồn lên một mình bạn lúc này chắc mệt mỏi lắm. Thảo đã cố gắng hết sức rồi mà. Bây giờ bạn muốn trút hết tâm sự ra cho nhẹ lòng, hay muốn nghỉ ngơi yên tĩnh nè? Mình luôn ở đây lắng nghe Thảo nha.",
        girlReply: "Cảm ơn bạn nhiều lắm... Đọc tin nhắn của bạn tự dưng mình thấy nhẹ nhõm hơn hẳn á. Cảm ơn vì đã luôn dịu dàng và lắng nghe mình những lúc thế này... Cho mình gọi điện kể bạn nghe một xíu được hông? 🥺❤️",
        girlReactionEmoji: "🥹",
        softSkills: ["Lắng nghe thấu cảm (Empathetic Listening)", "Xác nhận cảm xúc (Emotional Validation)"],
        evaluation: "Công nhận cảm xúc của người khác và ở bên họ mà không phán xét là kỹ năng cảm xúc (EQ) quan trọng bậc nhất trong mọi mối quan hệ.",
        ancientComment: "Biết xót xa cho nỗi lòng người khác, đặt cảm xúc trước lý trí khô khan. Cửa sổ tâm hồn từ đây rộng mở.",
        effects: { communication: 3, confidence: 2, empathy: 4, respect: 3, humor: 0, impression: 4 }
      },
      {
        id: "B",
        tag: "Phân tích logic ngay",
        text: "Theo mình bạn nên lập lại bảng phân chia công việc rõ ràng, rồi gửi mail báo cáo thẳng cho thầy về bạn bỏ nhóm kia để thầy trừ điểm. Phải làm dứt khoát như vậy mới xử lý được vấn đề Thảo à.",
        playerMessage: "Theo mình bạn nên lập lại bảng phân chia công việc rõ ràng, rồi gửi mail báo cáo thẳng cho thầy về bạn bỏ nhóm kia để thầy trừ điểm. Phải làm việc dứt khoát như vậy mới xử lý được vấn đề Thảo à.",
        girlReply: "Uhm... mình biết cách xử lý chứ, nhưng lúc này mình đang mệt quá chưa nghĩ nổi tới mấy cái đó. Thôi mình đi ngủ đây, cảm ơn bạn đã khuyên.",
        girlReactionEmoji: "😔",
        softSkills: ["Tư duy giải pháp nhưng sai thời điểm"],
        evaluation: "Đưa ra giải pháp kỹ thuật khi người khác đang cần giải tỏa cảm xúc thường khiến họ cảm thấy bị cô độc và không được lắng nghe.",
        ancientComment: "Người ta đang cầu mong sự an ủi ấm áp, ngươi lại đem búa rìu logic ra gõ. Đúng lý nhưng sai tình.",
        effects: { communication: 1, confidence: 1, empathy: -2, respect: 0, humor: 0, impression: -1 }
      },
      {
        id: "C",
        tag: "Động viên sáo rỗng",
        text: "Thôi đừng buồn nữa Thảo ơi! Chuyện nhỏ như con thỏ ấy mà, ngoài kia còn bao nhiêu chuyện khó hơn nhiều. Lạc quan lên, cười một cái xem nào!",
        playerMessage: "Thôi đừng buồn nữa Thảo ơi! Chuyện nhỏ như con thỏ ấy mà, ngoài kia còn bao nhiêu chuyện khó hơn nhiều. Lạc quan lên, cười một cái xem nào!",
        girlReply: "(Thảo đã xem tin nhắn và một lúc lâu sau chỉ nhắn lại: 'Uhm cảm ơn bạn.')",
        girlReactionEmoji: "🤐",
        softSkills: ["Lạc quan độc hại (Toxic Positivity)"],
        evaluation: "Hạ thấp nỗi buồn của người khác bằng sự lạc quan sáo rỗng vô tình khiến họ cảm thấy cảm xúc của mình không có giá trị.",
        ancientComment: "Xem nhẹ nỗi đau của người khác dẫu xuất phát từ ý tốt, cũng vô tình trở thành bức tường ngăn cách sự thấu hiểu.",
        effects: { communication: -1, confidence: 0, empathy: -3, respect: -1, humor: -1, impression: -2 }
      },
      {
        id: "D",
        tag: "Chăm sóc bằng hành động",
        text: "Mình vừa đặt một ly trà hoa cúc mật ong ấm kèm chút bánh ngọt đang ship đến cổng trọ Thảo nè. Uống chút ấm bụng rồi ngủ thật ngon nha, ngày mai ngủ dậy đầu óc sẽ sáng suốt hơn!",
        playerMessage: "Mình vừa đặt một ly trà hoa cúc mật ong ấm kèm chút bánh ngọt đang ship đến cổng trọ Thảo nè. Uống chút ấm bụng rồi ngủ thật ngon nha, ngày mai ngủ dậy đầu óc sẽ sáng suốt hơn!",
        girlReply: "Trời ơiii bạn chu đáo quá làm mình xúc động muốn khóc thêm lần nữa á... Shipper vừa gọi mình ra lấy rồi nè. Cảm ơn bạn nhiều nhiều lắm nha! 😭🧋",
        girlReactionEmoji: "😭",
        softSkills: ["Chăm sóc bằng hành động", "Hỗ trợ thiết thực"],
        evaluation: "Hành động quan tâm cụ thể, không đòi hỏi đối phương phải gượng gạo trả lời là cách thể hiện sự săn sóc rất ấm lòng.",
        ancientComment: "Lời nói ấm kết hợp hành động kịp thời tựa như than hồng giữa đêm đông giá buốt.",
        effects: { communication: 2, confidence: 2, empathy: 3, respect: 3, humor: 1, impression: 3 }
      }
    ]
  },
  {
    id: 7,
    chapter: "Chương 7",
    chapterTitle: "Định Mệnh Nguyệt Lão",
    badge: "Bước Ngoặt Tình Cảm & Chân Tình",
    setting: "Bờ Hồ Gió Mát — Đêm Thu Trăng Sáng",
    context: "Sau hơn một tháng gắn bó qua đủ cung bậc cảm xúc, hai bạn đang ngồi cạnh nhau trên băng ghế đá ven hồ sau buổi dạo phố. Thảo khẽ nghiêng đầu nhìn bạn dưới ánh đèn vàng ấm áp và thì thầm: 'Dạo này ở cạnh bạn... mình thấy rất bình yên và vui. Đối với bạn... mình là một người như thế nào thế?'",
    ancientWisdom: "Lời dẫn cổ thư: 'Đến hồi chung cuộc, mọi mưu kế đều vô nghĩa trước sự chân thành. Lời tỏ bày phải xuất phát từ sự tôn trọng trọn vẹn danh dự và tự do của đối phương.'",
    girlStatus: "Đang rung động",
    initialMessages: [
      { sender: "girl", text: "Dạo này ở cạnh bạn... mình thấy rất bình yên và thoải mái.", time: "21:40" },
      { sender: "girl", text: "Đối với bạn... vị trí của mình như thế nào thế? ✨", time: "21:41" }
    ],
    choices: [
      {
        id: "A",
        tag: "Bày tỏ chân thành",
        text: "Từ cái ngày gặp ở thư viện đến giờ, mỗi khoảnh khắc được trò chuyện cùng Thảo đều làm cuộc sống của mình ý nghĩa hơn rất nhiều. Với mình, Thảo là người vô cùng đặc biệt. Mình muốn được chính thức đồng hành và chăm sóc bạn.",
        playerMessage: "Từ cái ngày gặp ở thư viện đến giờ, mỗi khoảnh khắc được trò chuyện cùng Thảo đều làm cuộc sống của mình ý nghĩa hơn rất nhiều. Với mình, bạn là một người vô cùng đặc biệt. Mình muốn được đồng hành và quan tâm Thảo một cách nghiêm túc và chân thành nhất.",
        girlReply: "Mình cũng chờ câu nói này từ bạn lâu lắm rồi... Cảm ơn bạn vì đã luôn kiên nhẫn, tinh tế và dịu dàng với mình nhé! Em đồng ý ❤️✨",
        girlReactionEmoji: "💍",
        softSkills: ["Bày tỏ chân thành", "Chịu trách nhiệm cảm xúc", "Dũng cảm"],
        evaluation: "Bày tỏ tình cảm rõ ràng, tôn trọng và nghiêm túc, tạo cho đối phương sự an tâm và tin tưởng tuyệt đối.",
        ancientComment: "Chân tình cảm hóa lòng người, không cần hoa mỹ sáo rỗng, lời nói tự đáy lòng chính là sức mạnh tối thượng.",
        effects: { communication: 4, confidence: 4, empathy: 4, respect: 4, humor: 1, impression: 4 }
      },
      {
        id: "B",
        tag: "Hạ nhiệt bằng đùa cợt",
        text: "Haha thì là 'chiến hữu' cùng tiến chứ là gì nữa cô nương ơi, tự nhiên hôm nay hỏi câu sâu sắc khó đỡ ghê haha!",
        playerMessage: "Haha thì là 'chiến hữu' cùng tiến chứ là gì nữa cô nương ơi, tự nhiên hôm nay hỏi câu sâu sắc khó đỡ ghê haha!",
        girlReply: "À... ra là 'chiến hữu' thôi hả. Mình hiểu rồi, cảm ơn bạn đã nói rõ cho mình biết nha. (Thảo khẽ nhìn ra mặt hồ, nụ cười thoáng tắt)",
        girlReactionEmoji: "💔",
        softSkills: ["Né tránh cam kết", "Sợ tổn thương nên phòng thủ"],
        evaluation: "Đùa cợt vào thời điểm đối phương đang nghiêm túc mở lòng dễ làm họ cảm thấy bị coi thường và khép lại cánh cửa cảm xúc.",
        ancientComment: "Hèn nhát né tránh lúc then chốt, đem chân tình làm trò đùa cợt, tự tay đẩy cơ duyên vào chốn bạn bè xa cách.",
        effects: { communication: -1, confidence: -2, empathy: -2, respect: -1, humor: 1, impression: -3 }
      },
      {
        id: "C",
        tag: "Tỏ tình kiểu kể công",
        text: "Làm người yêu mình đi Thảo ơi, mình theo đuổi Thảo cả tháng nay tốn bao nhiêu công sức tâm huyết rồi đấy nhé!",
        playerMessage: "Làm người yêu mình đi Thảo ơi, mình theo đuổi bạn cả tháng nay tốn bao nhiêu công sức tâm huyết rồi đấy nhé!",
        girlReply: "Ủa bạn đang kể công với mình đấy à? Tình cảm là chuyện tự nguyện chứ đâu phải hợp đồng đổi chác đâu bạn. Mình thấy hơi thất vọng á.",
        girlReactionEmoji: "😠",
        softSkills: ["Tư duy trao đổi lợi ích", "Thiếu tôn trọng cảm xúc tự nguyện"],
        evaluation: "Kể công khi bày tỏ tình cảm làm biến dạng sự chân thành thành một món nợ ép buộc, làm tổn hại nặng nề đến sự tôn trọng lẫn nhau.",
        ancientComment: "Đem ân tình biến thành món nợ đòi hỏi, tâm cơ lộ liễu, tự hủy hoại toàn bộ nền tảng xây đắp bấy lâu.",
        effects: { communication: -2, confidence: 1, empathy: -3, respect: -4, humor: -1, impression: -4 }
      },
      {
        id: "D",
        tag: "Ẩn dụ phong nhã",
        text: "Bí kíp trên đời có trăm chương, nhưng điều đẹp nhất mình học được chính là sự chân thành khi ở cạnh bạn. Nếu Thảo bằng lòng, mình rất mong được cùng bạn viết tiếp những ngày tháng sau này.",
        playerMessage: "Bí kíp trên đời có trăm chương, nhưng điều đẹp nhất mình học được chính là sự chân thành khi ở cạnh bạn. Nếu Thảo bằng lòng, mình rất mong được cùng bạn viết tiếp những ngày tháng sau này.",
        girlReply: "Hahaha đại hiệp mượn lời văn vẻ ghê á! Cơ mà nghe ngọt ngào và chân thành lắm... Em đồng ý cùng anh bước tiếp nha! 🌸🥰",
        girlReactionEmoji: "🌸",
        softSkills: ["Nghệ thuật ngôn từ", "Vừa dí dỏm vừa trân trọng"],
        evaluation: "Kết hợp chất lãng mạn nhẹ nhàng với sự chân thành tôn trọng, tạo cảm giác vừa bay bổng vừa ấm áp.",
        ancientComment: "Lời văn tao nhã, ý tứ vẹn toàn, duyên lành tự nhiên đâm chồi nảy lộc.",
        effects: { communication: 4, confidence: 3, empathy: 3, respect: 4, humor: 3, impression: 4 }
      }
    ]
  }
];

// Hàm xác định phản ứng kết thúc Chương 7 dựa trên lựa chọn hiện tại VÀ toàn bộ hành trình
window.getChapter7BranchingResponse = function(choice, stats, choicesHistory) {
  // 1. Nếu chọn B (Né tránh bằng đùa cợt)
  if (choice && choice.id === "B") {
    return {
      status: "evaded",
      reply: "À... ra là 'chiến hữu' thôi hả. Mình hiểu rồi, cảm ơn bạn đã nói rõ cho mình biết nha. (Thảo khẽ nhìn ra mặt hồ, nụ cười thoáng tắt...)",
      emoji: "💔",
      ancientComment: "Hèn nhát né tránh lúc then chốt, đem chân tình làm trò đùa cợt, tự tay đẩy cơ duyên vào chốn bạn bè xa cách."
    };
  }

  // 2. Nếu chọn C (Kể công, ép buộc)
  if (choice && choice.id === "C") {
    return {
      status: "entitled_fail",
      reply: "Ủa bạn đang kể công với mình đấy à? Tình cảm là chuyện tự nguyện của hai người chứ đâu phải món nợ đổi chác đâu bạn. Mình thật sự thấy hơi thất vọng và e ngại cách nghĩ này...",
      emoji: "😠",
      ancientComment: "Đem ân tình biến thành món nợ đòi hỏi, tâm cơ lộ liễu, tự tay đạp đổ mọi công sức xây đắp bấy lâu."
    };
  }

  // 3. Nếu chọn A (Chân thành) hoặc D (Ẩn dụ lãng mạn):
  // Phụ thuộc vào chất lượng hành trình từ Chương 1 đến Chương 6
  const respect = (stats && stats.respect) || 0;
  const impression = (stats && stats.impression) || 0;
  const empathy = (stats && stats.empathy) || 0;

  // Thất bại vì thiếu tôn trọng ranh giới trong suốt hành trình
  if (respect < 3) {
    return {
      status: "boundary_fail",
      reply: "Cảm ơn bạn đã nói ra suy nghĩ. Nhưng qua thời gian tiếp xúc vừa qua, mình thấy cách giao tiếp của bạn đôi lúc làm mình thấy ngột ngạt và thiếu được tôn trọng. Mình nghĩ tụi mình nên dừng lại ở mức bạn bè xã giao thôi nhé.",
      emoji: "🛑",
      ancientComment: "Tôn trọng là nền tảng tối cao của giao tiếp. Thiếu đi sự tôn trọng thì ngàn vạn lời hay cũng chỉ là vô nghĩa."
    };
  }

  // Thất bại vì thiếu sự thấu hiểu hoặc ấn tượng nhạt nhòa
  if (impression < 7 || empathy < 4) {
    return {
      status: "friendzone_fail",
      reply: "Cảm ơn bạn đã dành tình cảm cho mình nha... Nhưng thật lòng mình thấy tụi mình hợp làm bạn bè thân thiết hơn. Mình rất trân trọng những lần nói chuyện vui vẻ, hy vọng tụi mình vẫn giữ được tình bạn thoải mái này nhé!",
      emoji: "🤝",
      ancientComment: "Duyên chưa đủ chín, lòng người chưa rung động sâu sắc. Chấp nhận lời từ chối một cách lịch thiệp cũng là một nét đẹp bản lĩnh."
    };
  }

  // THÀNH CÔNG RỰC RỠ: Hai nhân vật chính thức đến với nhau!
  const isPoetic = choice && choice.id === "D";
  return {
    status: "accept_success",
    reply: isPoetic
      ? "Hahaha đại hiệp mượn lời văn vẻ ghê á! Cơ mà nghe ngọt ngào và chân thành lắm... Em cũng đã chờ câu nói này từ anh lâu lắm rồi. Em đồng ý cùng anh viết tiếp những trang sau! 🌸❤️"
      : "Em cũng đã chờ câu nói này từ anh lâu lắm rồi... Từ cái ngày gặp nhau ở thư viện, qua bao nhiêu tin nhắn, những lúc em mệt mỏi nhất anh luôn ở bên cạnh dịu dàng và tôn trọng em. Em đồng ý làm người yêu anh! ❤️✨",
    emoji: "💍",
    ancientComment: "Chân thành vi bản, tinh tế vi tâm! Toàn bộ hành trình vừa qua đã chứng minh tấm chân tình son sắt. Hai người chính thức nên duyên, hoa nở trọn vẹn!"
  };
};

// 5 Câu hỏi Mini-game Thực chiến Phản Xạ
window.MINIGAME_QUESTIONS = [
  {
    id: 1,
    prompt: "Thảo hỏi khẽ: 'Bạn thân em bảo nhìn anh trông có nét hơi đào hoa, chắc nhiều người theo đuổi lắm nhỉ?'",
    timeLimit: 10,
    girlVoice: "Bạn thân em bảo nhìn anh đào hoa lắm á...",
    choices: [
      {
        text: "Khen bạn em có mắt nhìn! Nhưng đào hoa hay không là do mình chọn, anh chỉ muốn dành sự tập trung cho một người thôi.",
        score: 3,
        tier: "excellent",
        feedback: "Điềm đạm, tự tin và khẳng định rõ quan điểm chung thủy!",
        reaction: "🥰",
        skill: "Khẳng định lập trường & Tự tin"
      },
      {
        text: "Bạn em lo xa rồi, mặt anh nhìn thế thôi chứ từ bé tới giờ anh 'ngố' khoản tán gái lắm, có ai theo đâu!",
        score: 2,
        tier: "good",
        feedback: "Khiêm tốn xoa dịu, tuy hơi thanh minh nhưng tạo cảm giác gần gũi.",
        reaction: "😊",
        skill: "Khiêm nhường & Xoa dịu"
      },
      {
        text: "Ủa sao bạn em lại phán xét qua vẻ bề ngoài thế nhỉ? Đừng nghe người ngoài nói linh tinh em ơi.",
        score: 1,
        tier: "neutral",
        feedback: "Hơi phản ứng phòng thủ với bạn của nàng, dễ tạo khoảng cách nhỏ.",
        reaction: "🤨",
        skill: "Phòng vệ phản xạ"
      },
      {
        text: "Haha đúng rồi đó, anh hot boy trường mà! Nhưng em may mắn được anh để ý rồi đấy nhé.",
        score: 0,
        tier: "poor",
        feedback: "Kiêu căng tự phụ, biến lời khen thành sự trịch thượng phản cảm.",
        reaction: "🙄",
        skill: "Tự cao tự đại"
      }
    ]
  },
  {
    id: 2,
    prompt: "Thảo gửi ảnh một chiếc váy xòe hoa nhí: 'Chiếc váy này xinh ghê mà giá hơi chát, tiếc ghê á anh :('",
    timeLimit: 10,
    girlVoice: "Chiếc váy này xinh ghê mà giá hơi chát á anh...",
    choices: [
      {
        text: "Màu hoa nhí này tôn da Thảo lắm nè! Cuối tuần này mình đi thử xem có vừa vặn không, nếu ưng ý tự thưởng mừng thi xong cũng xứng đáng mà!",
        score: 3,
        tier: "excellent",
        feedback: "Khen ngợi gu thẩm mỹ, rủ đi trải nghiệm thực tế mà không tạo áp lực tài chính gượng gạo!",
        reaction: "😍",
        skill: "Quan tâm tinh tế & Khen ngợi đúng gu"
      },
      {
        text: "Thích thì anh mua tặng em liền, mấy triệu bạc anh lo được hết, em khỏi cần tiếc!",
        score: 1,
        tier: "neutral",
        feedback: "Vung tiền quá sớm khi chưa là gì của nhau dễ khiến đối phương ngại ngùng và có cảm giác nợ nần.",
        reaction: "😅",
        skill: "Vung vật chất thiếu ranh giới"
      },
      {
        text: "Đắt thế thì thôi em ơi, quần áo mặc vài lần là chán, để tiền ăn uống sướng hơn nhiều.",
        score: 0,
        tier: "poor",
        feedback: "Dội gáo nước lạnh vào sở thích làm đẹp của con gái, thiếu cảm xúc trầm trọng.",
        reaction: "😒",
        skill: "Áp đặt quan điểm tiêu dùng"
      },
      {
        text: "Công nhận mẫu này phối màu vintage đẹp thật. Để anh lưu lại tiệm này, hôm nào rảnh anh chở em qua ngắm thử nha.",
        score: 2,
        tier: "good",
        feedback: "Lắng nghe và ghi nhớ sở thích của nàng, tạo cớ cho một buổi đi chơi tiếp theo.",
        reaction: "😊",
        skill: "Ghi nhớ chi tiết"
      }
    ]
  },
  {
    id: 3,
    prompt: "Hai bạn đang ngồi cafe, Thảo vô tình làm đổ một ít trà ra bàn và lúng túng xin lỗi bạn vì sự vụng về.",
    timeLimit: 8,
    girlVoice: "Ui em xin lỗi, em vụng về quá làm đổ trà rồi...",
    choices: [
      {
        text: "Rút khăn giấy lau bàn cùng nàng: 'Không sao đâu nè, tay áo em có bị dính ướt không? Để anh gọi bạn phục vụ lấy thêm khăn lau nhé.'",
        score: 3,
        tier: "excellent",
        feedback: "Ưu tiên quan tâm đến sự an toàn và cảm giác của đối phương trước khi xử lý sự cố!",
        reaction: "🥰",
        skill: "Xử lý khủng hoảng & Chu đáo"
      },
      {
        text: "Cười nhẹ: 'Điềm lành đấy cô nương! Trà tràn là tài lộc tràn trề, để anh lau giúp cho.'",
        score: 3,
        tier: "excellent",
        feedback: "Hài hước hóa sự cố thành điềm may mắn, giải tỏa 100% cảm giác tội lỗi của nàng!",
        reaction: "😆",
        skill: "Biến nguy thành an & Dí dỏm"
      },
      {
        text: "Trời ơi cẩn thận tí chứ em, suýt nữa là ướt điện thoại của anh rồi đấy!",
        score: 0,
        tier: "poor",
        feedback: "Cáu gắt và đặt tài sản cá nhân lên trên sự bối rối của đối phương, cực kỳ mất điểm.",
        reaction: "🥺",
        skill: "Cáu bẳn & Thiếu bao dung"
      },
      {
        text: "Ngồi yên nhìn nàng tự lau: 'Không sao đâu, em cứ lau từ từ đi kẻo nước chảy xuống sàn.'",
        score: 1,
        tier: "neutral",
        feedback: "Thiếu tính hiệp sĩ và sự chủ động giúp đỡ khi đối phương đang bối rối.",
        reaction: "😐",
        skill: "Thụ động thờ ơ"
      }
    ]
  },
  {
    id: 4,
    prompt: "17:30 chiều tan làm, Thảo nhắn: 'Hôm nay công ty chạy sự kiện đói lả cả người, thèm ăn cái gì đó ấm nóng ghê...'",
    timeLimit: 10,
    girlVoice: "Hôm nay em đói lả cả người, thèm cái gì ấm nóng ghê...",
    choices: [
      {
        text: "Thảo thích ăn súp cua nóng hay hủ tiếu mì? Đang tiện đường về anh tạt qua mua mang qua cổng trọ cho em luôn nè!",
        score: 3,
        tier: "excellent",
        feedback: "Đưa ra 2 lựa chọn cụ thể và chủ động ra tay giải quyết cơn đói, cực kỳ ấm áp!",
        reaction: "🥹",
        skill: "Quan tâm bằng hành động thiết thực"
      },
      {
        text: "Đói thì lên app đặt đồ ăn đi em, giờ này nhiều mã giảm giá lắm á.",
        score: 1,
        tier: "neutral",
        feedback: "Lời khuyên thực tế nhưng khô khan, thiếu sự săn sóc của người quan tâm.",
        reaction: "🤷‍♀️",
        skill: "Chỉ dẫn thông thường"
      },
      {
        text: "Ăn gì chả được em, tùy em chọn chứ anh ở xa sao biết em thích ăn gì lúc này.",
        score: 0,
        tier: "poor",
        feedback: "'Ăn gì chả được' — câu trả lời gây ngán ngẩm hàng đầu khi đối phương đang đói!",
        reaction: "🙄",
        skill: "Vô cảm & Thờ ơ"
      },
      {
        text: "Cố lên cô bé! Về nhà tắm rửa nghỉ ngơi rồi anh chở đi ăn tô phở bò nóng hổi hồi sức nha!",
        score: 3,
        tier: "excellent",
        feedback: "Động viên tinh thần kèm một lời hẹn ấm lòng ngay trong buổi tối!",
        reaction: "😍",
        skill: "Chăm sóc & Tiếp sức"
      }
    ]
  },
  {
    id: 5,
    prompt: "Nàng hỏi sâu lắng: 'Nếu sau này tụi mình có lúc bất đồng quan điểm cãi nhau, anh sẽ phản ứng thế nào?'",
    timeLimit: 10,
    girlVoice: "Nếu sau này cãi nhau, anh sẽ làm gì?",
    choices: [
      {
        text: "Anh nghĩ ai cũng cần một chút thời gian hạ nhiệt, nhưng anh sẽ không chọn im lặng bỏ rơi em, mà sẽ cùng ngồi lại tìm cách thấu hiểu nhau.",
        score: 3,
        tier: "excellent",
        feedback: "Trưởng thành, vững vàng, hướng đến giao tiếp xây dựng thay vì né tránh hay hiếu thắng!",
        reaction: "🥹",
        skill: "Giải quyết xung đột & Trách nhiệm"
      },
      {
        text: "Lúc đó anh sẽ ôm em trước để cả hai bình tĩnh lại, chuyện gì từ từ cũng giải quyết được mà.",
        score: 2,
        tier: "good",
        feedback: "Ấm áp và tình cảm, ưu tiên sự kết nối trước khi phân định đúng sai.",
        reaction: "🤗",
        skill: "Hòa giải cảm xúc"
      },
      {
        text: "Anh luôn nhường em 100%, em nói gì cũng đúng hết, khỏi cần cãi nhau cho mệt!",
        score: 1,
        tier: "neutral",
        feedback: "Nịnh nọt thái quá, thiếu tính thực tế lâu dài trong mối quan hệ bền vững.",
        reaction: "😐",
        skill: "Né tránh vấn đề"
      },
      {
        text: "Ai sai thì người đó phải nhận lỗi và xin lỗi chứ, đúng sai rõ ràng thì mới lâu dài được.",
        score: 0,
        tier: "poor",
        feedback: "Quá rạch ròi hiếu thắng, thắng lý lẽ nhưng thua cả sự kết nối cảm xúc.",
        reaction: "💔",
        skill: "Hiếu thắng trong giao tiếp"
      }
    ]
  }
];

// Danh hiệu dựa trên Profile phân tích kỹ năng mềm
window.TITLES_DATA = [
  {
    id: "master",
    title: "Bậc Thầy Giao Tiếp",
    subTitle: "Cửu Dương Chân Kinh Đại Thành",
    stamp: "THẦN QUÂN",
    color: "#e6b422",
    description: "Bạn sở hữu năng lực giao tiếp toàn diện và chín chắn! Vừa biết lắng nghe thấu cảm, điềm đạm tự chủ, lại có khiếu hài hước duyên dáng và tôn trọng ranh giới tuyệt đối. Đối phương ở bên bạn luôn cảm nhận được sự an toàn và được lắng nghe trọn vẹn.",
    matches: (stats, totalScore) => {
      return totalScore >= 26 && 
             stats.respect >= 12 && 
             stats.empathy >= 12 && 
             stats.communication >= 12;
    }
  },
  {
    id: "green_flag",
    title: "Green Flag Chính Hiệu",
    subTitle: "Tinh Tế, Tôn Trọng & Đáng Tin Cậy",
    stamp: "CHÂN DUYÊN",
    color: "#2ecc71",
    description: "Bạn chính là hình mẫu 'cờ xanh' mẫu mực trong giao tiếp! Thế mạnh vượt trội của bạn là sự tôn trọng ranh giới và thấu hiểu cảm xúc của người khác. Bạn không vội vã áp đặt, luôn tạo không gian an toàn để đối phương thoải mái là chính mình.",
    matches: (stats) => {
      return (stats.respect + stats.empathy) >= 24 && stats.respect >= 12;
    }
  },
  {
    id: "warm_knight",
    title: "Bạch Mã Trầm Ấm",
    subTitle: "Bậc Thầy Lắng Nghe & Đồng Cảm",
    stamp: "TRI KỶ",
    color: "#3498db",
    description: "Điểm sáng lớn nhất của bạn là khả năng lắng nghe thấu cảm (Empathetic Listening). Giữa một thế giới ai cũng vội vã thể hiện bản thân, bạn chọn làm bờ vai tĩnh lặng để người khác san sẻ nỗi lòng. Một người bạn đồng hành ấm áp và đáng tin cậy.",
    matches: (stats) => {
      return stats.empathy >= stats.confidence && 
             stats.empathy >= stats.humor && 
             stats.empathy >= 10;
    }
  },
  {
    id: "charming_wit",
    title: "Phong Lưu Hiệp Khách",
    subTitle: "Dí Dỏm, Tự Tin & Hoạt Ngôn",
    stamp: "TIÊU DAO",
    color: "#f39c12",
    description: "Bạn có tài năng thiên bẩm trong việc dùng tiếng cười để phá tan khoảng cách (Ice-breaking)! Tự tin, hoạt ngôn và luôn biết cách biến những tình huống bình thường thành kỷ niệm đáng nhớ. Hãy tiếp tục trau dồi thêm sự lắng nghe chiều sâu nhé!",
    matches: (stats) => {
      return (stats.humor + stats.confidence) >= 20 && stats.humor >= 10;
    }
  },
  {
    id: "rushed_rush",
    title: "Tốc Chiến Tốc Bại",
    subTitle: "Nhiệt Huyết Nhưng Hơi Nóng Vội",
    stamp: "CẨN TRỌNG",
    color: "#e67e22",
    description: "Bạn có thừa sự tự tin và lòng nhiệt tình, nhưng đôi khi hơi nôn nóng đốt cháy giai đoạn hoặc đưa ra giải pháp quá sớm khi người khác chưa sẵn sàng. Hãy nhớ rằng: 'Dục tốc bất đạt', sự chân thành cần thời gian để người khác cảm nhận.",
    matches: (stats) => {
      return stats.confidence >= 10 && (stats.respect < 6 || stats.empathy < 6);
    }
  },
  {
    id: "friendzone_king",
    title: "Sứ Giả Thận Trọng",
    subTitle: "Tôn Trọng Cao Nhưng Thiếu Một Chút Quyết Đoán",
    stamp: "KIM LAN",
    color: "#9b59b6",
    description: "Bạn rất tốt bụng, lịch thiệp và tôn trọng người khác, nhưng đôi khi an toàn quá mức hoặc ngần ngại bày tỏ suy nghĩ thật của mình vì sợ bị từ chối. Hãy tự tin hơn vào giá trị bản thân và dám mở lời khi thời cơ đến nhé!",
    matches: (stats) => {
      return (stats.respect + stats.empathy) >= 14 && stats.confidence <= 6;
    }
  },
  {
    id: "apprentice",
    title: "Tập Sự Tiêu Dao",
    subTitle: "Có Tiềm Năng Cần Rèn Giũa Thêm",
    stamp: "TIỀM NĂNG",
    color: "#1abc9c",
    description: "Bạn có thiện chí và trực giác giao tiếp khá tốt, chỉ là đôi lúc còn lúng túng trong việc đọc tín hiệu cảm xúc của đối phương. Trải qua các bài học này, chắc chắn bạn sẽ trở nên tinh tế và vững vàng hơn rất nhiều!",
    matches: () => true // Fallback mặc định
  },
  {
    id: "self_destruct",
    title: "Bậc Thầy Tự Hủy",
    subTitle: "Cần Tẩy Tủy Công Phu Giao Tiếp",
    stamp: "TỰ HỦY",
    color: "#e74c3c",
    description: "Bạn đang mắc phải các 'bẫy' giao tiếp kinh điển: áp đặt, kể công, đòi hỏi và thiếu kiên nhẫn. Đừng lo, nhận diện được điểm yếu chính là bước đầu tiên để tiến bộ. Hãy đọc lại bí kíp và thực hành lắng nghe nhiều hơn!",
    matches: (stats) => {
      return stats.respect <= 0 || stats.communication <= 0;
    }
  }
];

// Tính toán giới hạn lý thuyết min/max của từng chỉ số từ dữ liệu 7 chương
window.getStatTheoreticalBounds = function() {
  const bounds = {
    communication: { min: 0, max: 0 },
    confidence: { min: 0, max: 0 },
    humor: { min: 0, max: 0 },
    empathy: { min: 0, max: 0 },
    respect: { min: 0, max: 0 }
  };

  window.SCENARIOS_DATA.forEach(scenario => {
    ["communication", "confidence", "humor", "empathy", "respect"].forEach(stat => {
      const vals = scenario.choices.map(c => (c.effects && c.effects[stat]) || 0);
      bounds[stat].min += Math.min(...vals);
      bounds[stat].max += Math.max(...vals);
    });
  });

  return bounds;
};
