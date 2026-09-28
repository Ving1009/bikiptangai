/**
 * BÍ KÍP TÁN GÁI V2 - Dữ Liệu 7 Tình Huống Kể Chuyện Tương Tác
 * Thiết kế cho môn Kỹ Năng Mềm: Giao tiếp chân thành, lắng nghe thấu cảm, tôn trọng ranh giới
 */

window.SCENARIOS_DATA = [
  {
    id: 1,
    chapter: "Chương 1",
    chapterTitle: "Kỳ Ngộ Tại Tàng Kinh Các",
    badge: "Khởi Đầu Giao Tiếp",
    setting: "Quán Cafe Sách Yên Tĩnh - Chiều Thứ Bảy",
    context: "Bạn và Thanh Thảo tình cờ ngồi đối diện nhau tại bàn dài trong quán cafe sách. Thảo đang loay hoay tìm ổ cắm sạc laptop bị kẹt sâu dưới gầm bàn gỗ, trán lấm tấm mồ hôi, thỉnh thoảng khẽ liếc sang bạn như muốn nhờ giúp nhưng còn e ngại.",
    ancientWisdom: "Lời dẫn cổ thư: 'Vạn sự khởi đầu nan. Cuộc gặp gỡ đầu tiên như giọt nước rơi vào mặt hồ phẳng lặng, cần sự tự nhiên, chừng mực và quan sát tinh tế.'",
    girlStatus: "Mới quen",
    initialMessages: [
      { sender: "girl", text: "Ước gì cái ổ cắm này nó không trốn sâu dưới gầm bàn như thế... T_T", time: "14:15" },
      { sender: "system", text: "Thanh Thảo khẽ ngước mắt lên nhìn bạn, vẻ mặt vừa ngượng vừa bối rối...", time: "14:15" }
    ],
    choices: [
      {
        id: "A",
        tag: "Chủ động giúp đỡ",
        text: "Mỉm cười đứng dậy kéo ổ điện ra hộ: 'Ổ này hơi kẹt, để mình kéo ra giúp bạn nhé. Cắm nhẹ tay kẻo gãy giắc sạc nè.'",
        playerMessage: "Ổ cắm này hơi kẹt để mình kéo ra giúp bạn nhé. Bạn cắm nhẹ tay kẻo gãy giắc đó.",
        girlReply: "Ui may quá, cảm ơn bạn nhiều nha! Mình loay hoay nãy giờ ngại ghê á. Bạn chu đáo thật đấy! ✨",
        girlReactionEmoji: "🥰",
        softSkills: ["Quan sát tinh tế", "Chủ động hỗ trợ đúng lúc"],
        evaluation: "Hành động xuất phát từ lòng tốt tự nhiên, đúng việc đối phương cần mà không tạo áp lực hay đòi hỏi đền đáp.",
        ancientComment: "Biết quan sát điều nhỏ nhặt, ra tay đúng lúc tựa gió xuân ấm áp, đối phương ắt cảm nhận được sự tin cậy.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 0, impression: 2 }
      },
      {
        id: "B",
        tag: "Gợi ý gián tiếp",
        text: "Chỉ tay về phía góc tường: 'Hình như góc bên kia cũng có một ổ cắm trống đó, nếu kẹt quá bạn cắm thử xem sao.'",
        playerMessage: "À... bạn cần sạc pin hả? Hình như góc tường bên kia cũng có ổ cắm dự phòng đó bạn.",
        girlReply: "Dạ để mình ngó thử xem sao... Cảm ơn bạn đã chỉ nhé! 🙂",
        girlReactionEmoji: "🙂",
        softSkills: ["Lịch sự", "Giữ khoảng cách an toàn"],
        evaluation: "Lịch sự và có thiện chí nhưng hơi xa cách, bỏ lỡ cơ hội kết nối tự nhiên một cách ấm áp hơn.",
        ancientComment: "An toàn nhưng thiếu chút nhiệt huyết. Lời nói đúng mực nhưng tựa nước chảy hoa trôi, chưa đủ đọng lại dư ba.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Cung cấp giải pháp ngay",
        text: "Lấy củ sạc nhanh của mình ra đặt lên bàn: 'Dùng củ sạc 100W này của mình đi bạn, hàng xịn cắm 15 phút là đầy pin liền!'",
        playerMessage: "Dùng củ sạc 100W này của mình đi bạn ơi! Cắm 15 phút là đầy pin dùng thoải mái luôn.",
        girlReply: "Dạ thôi phiền bạn quá, mình cắm tạm được rồi, cảm ơn bạn nhé... (quay đi tiếp tục làm việc)",
        girlReactionEmoji: "😅",
        softSkills: ["Nhiệt tình thái quá", "Thiếu cảm nhận ranh giới"],
        evaluation: "Đem vật chất hoặc giải pháp cá nhân áp đặt khi chưa quen biết dễ tạo cảm giác khoe mẽ hoặc vồn vã không cần thiết.",
        ancientComment: "Lòng tốt nếu phô trương quá trớn sẽ biến thành gánh nặng. Đối phương chưa quen ắt sinh tâm lý phòng vệ.",
        effects: { communication: 0, confidence: 1, empathy: -1, respect: -1, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Pha trò dí dỏm",
        text: "Làm vẻ mặt nghiêm túc: 'Bình tĩnh! Hãy để tại hạ thi triển công lực kéo cái ổ cắm bất trị này ra giải cứu laptop của tiểu thư!'",
        playerMessage: "Bình tĩnh! Hãy để tại hạ thi triển công lực kéo cái ổ cắm bất trị này ra giải cứu laptop cho bạn!",
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
    setting: "Phòng Trọ - 21:30 Đêm Sau Buổi Cafe",
    context: "Chiều hôm đó hai bạn đã kết nối trên mạng xã hội sau khi chào nhau lúc về. Bây giờ là 21:30, bạn vừa ngồi vào bàn học mở máy. Đây là tin nhắn đầu tiên để bắt đầu một cuộc trò chuyện trực tuyến.",
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
        text: "Nhắc lại khoảnh khắc buổi chiều: 'Chào 'nạn nhân của ổ điện'! Chiều nay về kịp deadline bài tập nhóm không bạn?'",
        playerMessage: "Chào 'nạn nhân ổ điện'! Chiều nay Thảo về nộp bài tập nhóm kịp deadline không nè?",
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
        text: "Gửi lời chào cơ bản: 'Chào Thảo, tối nay bạn có bận gì không? Bạn ăn tối chưa thế?'",
        playerMessage: "Chào Thảo, tối nay bạn có bận gì không? Bạn ăn cơm chưa thế?",
        girlReply: "Chào bạn nha, mình ăn rồi nè. Giờ đang lướt mạng xíu thôi à.",
        girlReactionEmoji: "🙂",
        softSkills: ["Lịch sự cơ bản", "Hơi thiếu điểm nhấn"],
        evaluation: "Mẫu câu hỏi thăm phổ thông, an toàn nhưng không gợi mở được cảm xúc hay chủ đề thảo luận sâu sắc hơn.",
        ancientComment: "Chén nước trắng giải được khát nhưng không lưu lại dư vị trà thơm. Cuộc trò chuyện dễ rơi vào ngõ cụt.",
        effects: { communication: 1, confidence: 0, empathy: 0, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Thổ lộ ấn tượng",
        text: "Nhắn tin tán tỉnh sớm: 'Chiều nay gặp Thảo về làm mình cứ nghĩ mãi... Người đâu mà cười duyên thế không biết.'",
        playerMessage: "Chiều nay gặp Thảo về làm mình cứ nhớ mãi... Bạn cười duyên làm người ta mất tập trung ghê á.",
        girlReply: "Ủa bạn nói quá rồi nè haha :)) Bạn hay khen các bạn nữ mới quen vậy lắm đúng hông?",
        girlReactionEmoji: "🤨",
        softSkills: ["Vội vàng biểu lộ", "Thiếu căn cứ thực tế"],
        evaluation: "Khi hai bên chưa có tương tác sâu, khen ngợi mang tính lãng mạn dễ khiến đối phương cảm thấy thiếu chân thành hoặc cảnh giác.",
        ancientComment: "Mầm cây chưa bén rễ đã vội đòi trổ hoa. Lời ngọt ngào sớm quá chỉ khiến người ta nghi ngại động cơ.",
        effects: { communication: 0, confidence: 1, empathy: -1, respect: 0, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Kể chuyện tếu táo",
        text: "Kể mẩu tin hài hước: 'Vừa lướt thấy page quán cafe đăng tìm chủ nhân củ sạc bỏ quên, mình giật mình tưởng Thảo haha!'",
        playerMessage: "Vừa lướt thấy quán cafe đăng tin tìm khách để quên củ sạc, làm mình giật thót tưởng Thảo cơ đấy haha!",
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
    setting: "Hộp Thư - Tối Ngày Thứ Tư",
    context: "Sau vài ngày nhắn tin khá rôm rả, tối nay Thảo bỗng dưng rep rất ngắn: 'Dạ', 'Uhm thế à...'. Cảm giác nhịp độ cuộc trò chuyện chùng hẳn xuống. Bạn cần xử lý thế nào để không biến bản thân thành kẻ làm phiền?",
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
        text: "Cảm nhận tinh tế và cho không gian: 'Thấy Thảo trả lời ngắn, chắc hôm nay bạn mệt hoặc bận nhiều việc rồi. Nghỉ ngơi sớm nhé, khi nào thoải mái tụi mình nói chuyện sau nha!'",
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
        text: "Hỏi thẳng lý do ngay: 'Sao nay nói chuyện cụt lủn thế bạn? Có chuyện gì làm bạn khó chịu hay mình nói gì sai hả?'",
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
        tag: "Gửi meme chuyển hướng",
        text: "Gửi một bức ảnh meme mèo đáng yêu chắp tay: 'Phát hiện tín hiệu pin yếu! Xin gửi một chiếc meme sạc pin tinh thần haha.'",
        playerMessage: "Bíp bíp! Hệ thống phát hiện bạn Thảo sắp hết pin. Xin phép gửi một chiếc meme mèo sạc năng lượng haha! [Meme mèo ngủ ngoan]",
        girlReply: "Hahaha cute xỉu, đúng lúc mình đang stress nhìn thấy phì cười luôn á! Cảm ơn bạn nha :v",
        girlReactionEmoji: "😹",
        softSkills: ["Hài hước xoa dịu căng thẳng", "Không gây áp lực"],
        evaluation: "Một cử chỉ nhẹ nhàng, vui vẻ không đòi hỏi câu trả lời dài có thể giúp xoa dịu áp lực hiệu quả.",
        ancientComment: "Một nụ cười nhẹ xoa dịu mệt mỏi, không ép người đàm đạo, tâm ý nhẹ tựa cánh lông hồng.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 3, impression: 2 }
      },
      {
        id: "D",
        tag: "Tạm im lặng chờ đợi",
        text: "Không gửi thêm tin nhắn nào, để đối phương yên tĩnh nghỉ ngơi.",
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
    chapterTitle: "Tâm Ma Trận Đồ",
    badge: "Xử Lý Độ Trễ Giao Tiếp",
    setting: "Màn Hình Điện Thoại - 14:00 Đến 19:30",
    context: "Lúc 14:00 chiều, bạn nhắn hỏi Thảo về một quán sách cũ mà cô ấy từng đăng trên trang cá nhân. Tin nhắn hiện 'Đã xem' lúc 14:15. Đến 19:30 tối vẫn chưa có hồi âm. Bạn đang có thời gian rảnh và điện thoại nằm ngay trước mặt.",
    ancientWisdom: "Lời dẫn cổ thư: 'Lòng dạ nôn nóng là kẻ thù số một của bản lĩnh. Người khác chưa hồi âm, phần nhiều vì cuộc sống bộn bề. Giữ cho tâm mình độc lập, vững vàng mới là gốc rễ của sự cuốn hút.'",
    girlStatus: "Có thiện cảm",
    initialMessages: [
      { sender: "player", text: "Thảo ơi, quán sách cũ có ban công hoa giấy đợt trước bạn check-in ở đoạn nào khu quận 1 thế nhỉ?", time: "14:00" },
      { sender: "system", text: "Thanh Thảo đã xem tin nhắn lúc 14:15.", time: "14:15" },
      { sender: "system", text: "Hơn 5 tiếng trôi qua không có thêm tín hiệu nào...", time: "19:30" }
    ],
    choices: [
      {
        id: "A",
        tag: "Tập trung việc riêng",
        text: "Tắt điện thoại, tập trung đọc sách, chơi thể thao hoặc làm việc cá nhân mà không nhắn thêm gì giục giã.",
        playerMessage: "(Bạn tắt thông báo, ra ngoài chạy bộ rồi về nấu ăn, không gửi thêm tin nhắn giục)",
        girlReply: "Huhu xin lỗi bạn nhiều nha! Chiều nay xưởng thực hành bị sự cố điện, tụi mình phải dọn dẹp với nộp mẫu gấp đến giờ mới về tới phòng ăn tối. Quán đó ở hẻm 42 Đinh Tiên Hoàng á bạn!",
        girlReactionEmoji: "🥺",
        softSkills: ["Tự chủ cảm xúc", "Độc lập cá nhân", "Không suy diễn tiêu cực"],
        evaluation: "Không kiểm soát hay phụ thuộc cảm xúc vào tốc độ rep tin nhắn giúp bạn luôn giữ được sự đàng hoàng và tâm thế vững vàng.",
        ancientComment: "Tâm không loạn bởi sự im lặng của đối phương. Người có thế giới riêng phong phú luôn tỏa ra ánh sáng tự nhiên.",
        effects: { communication: 2, confidence: 3, empathy: 2, respect: 3, humor: 0, impression: 3 }
      },
      {
        id: "B",
        tag: "Nhắn nhắc nhở trực tiếp",
        text: "Nhắn thêm vào lúc 19:30: 'Chắc bạn bận dữ lắm hả? Thấy đã xem từ chiều mà chưa thấy rep nè haha.'",
        playerMessage: "Ủa Thảo bận lắm hả? Thấy seen từ chiều mà chưa thấy rep nè :v",
        girlReply: "À mình bận việc ở trường thật bạn ơi, lúc đó mở xem nhanh rồi quên mất. Quán ở đường Đinh Tiên Hoàng nha.",
        girlReactionEmoji: "😐",
        softSkills: ["Hơi sốt ruột", "Dễ tạo cảm giác bị giám sát"],
        evaluation: "Nhắc khéo về việc 'seen không rep' có thể khiến đối phương cảm thấy bị theo dõi hoặc cảm thấy có lỗi một cách gượng ép.",
        ancientComment: "Sự nôn nóng hiện lên câu chữ, dẫu che đậy bằng chữ cười 'haha' cũng khó giấu được cảm giác bứt rứt.",
        effects: { communication: 0, confidence: -1, empathy: -1, respect: 0, humor: 0, impression: -1 }
      },
      {
        id: "C",
        tag: "Tự nhận phần lỗi",
        text: "Nhắn tin lo lắng: 'Chắc câu hỏi của mình làm phiền bạn quá hả... Xin lỗi bạn nếu mình nhắn không đúng lúc nhé.'",
        playerMessage: "Chắc câu hỏi của mình làm phiền bạn hả... Xin lỗi nếu mình làm phiền thời gian của Thảo nhé.",
        girlReply: "Đâu có gì đâu bạn ơi, do mình bận thật mà... Bạn đừng nghĩ nhiều quá nha, làm mình ngại á.",
        girlReactionEmoji: "😥",
        softSkills: ["Thiếu tự tin", "Cường điệu hóa sự việc"],
        evaluation: "Xin lỗi không cần thiết khi đối phương chỉ đơn giản là bận rộn sẽ làm giảm giá trị bản thân và khiến họ cảm thấy lúng túng.",
        ancientComment: "Hạ mình quá mức trước điều bình thường của thế sự, không những không mang lại thiện cảm mà còn tạo sự khó xử.",
        effects: { communication: -1, confidence: -2, empathy: 0, respect: 0, humor: -1, impression: -1 }
      },
      {
        id: "D",
        tag: "Đăng Story gián tiếp",
        text: "Đăng Story đĩa cơm tự nấu ngon lành với caption vui vẻ, không đả động gì tới chuyện chờ tin nhắn.",
        playerMessage: "(Đăng Story đĩa mì spaghetti tự nấu thơm phức kèm caption: 'Hôm nay tự thưởng cho mình một bữa ngon lành')",
        girlReply: "Oa đĩa mì nhìn ngon xỉu luôn á! Chiều nay mình bận ở xưởng giờ mới ăn bánh mì tạm bợ nè huhu. À quán sách ở hẻm 42 Đinh Tiên Hoàng nha bạn!",
        girlReactionEmoji: "😋",
        softSkills: ["Chia sẻ năng lượng tích cực", "Chuyển hướng chủ động"],
        evaluation: "Thay vì chờ đợi trong bực bội, tập trung sống tốt cuộc sống của mình là cách gián tiếp khơi lại cuộc trò chuyện rất tự nhiên.",
        ancientComment: "Chăm chút cho khu vườn của chính mình, bướm ong ắt tự tìm đến. Phong thái điềm đạm đáng quý.",
        effects: { communication: 2, confidence: 3, empathy: 1, respect: 2, humor: 2, impression: 2 }
      }
    ]
  },
  {
    id: 5,
    chapter: "Chương 5",
    chapterTitle: "Xuất Chiêu Hẹn Ước",
    badge: "Kỹ Năng Đưa Ra Lời Mời",
    setting: "Tối Thứ Tư - Sau Gần 3 Tuần Trò Chuyện",
    context: "Sau 3 tuần nhắn tin ăn ý, hai bạn thường xuyên chia sẻ về sở thích nhiếp ảnh, sách và triển lãm. Thảo vừa nhắc đến việc dạo này thi cử xong thấy nhẹ nhõm và muốn ra ngoài hít thở không khí. Đây là cơ hội tốt để gửi lời mời gặp mặt trực tiếp.",
    ancientWisdom: "Lời dẫn cổ thư: 'Mời hẹn người khác cốt ở ba điều: Đúng sở thích chung, thời gian địa điểm rõ ràng, và quan trọng nhất là mở sẵn một lối lui thoải mái nếu người ta bận việc.'",
    girlStatus: "Khá thân",
    initialMessages: [
      { sender: "girl", text: "Cuối cùng cũng thi xong môn cuối! Cảm giác như được giải thoát khỏi ngục tù vậy đó trời ơiii 🎉", time: "20:30" },
      { sender: "player", text: "Chúc mừng Thảo nha! Xong xuôi hết rồi giờ chỉ còn nạp năng lượng thôi nè.", time: "20:31" },
      { sender: "girl", text: "Đúng luônnn, cuối tuần này mình chỉ muốn đi đâu đó thư giãn chụp choẹt xíu cho đỡ ngột ngạt.", time: "20:32" }
    ],
    choices: [
      {
        id: "A",
        tag: "Lên lịch trình theo gu",
        text: "Mời đi triển lãm ảnh: 'Bảo tàng Mỹ thuật đang có triển lãm ảnh phim Sài Gòn xưa đúng gu Thảo nè. Chiều Thứ Bảy bạn rảnh không, tụi mình dạo ngắm ảnh rồi uống nước? Nếu bận thì dịp khác cũng thoải mái nha!'",
        playerMessage: "Bên Bảo tàng Mỹ thuật đang có triển lãm ảnh phim đúng gu Thảo nè. Chiều Thứ Bảy bạn rảnh không, tụi mình cùng đi dạo xem ảnh rồi làm ly nước? Nếu cuối tuần bạn có lịch với gia đình thì để dịp khác cũng hoàn toàn thoải mái nha!",
        girlReply: "Oa triển lãm đó mình đang tính rủ bạn nào đi chung luôn á!! Trùng hợp ghê! Thứ Bảy từ 15h mình rảnh nè, chốt kèo nha bạn ơiii! ✨🎨",
        girlReactionEmoji: "🎉",
        softSkills: ["Đề xuất có định hướng", "Tôn trọng lịch trình cá nhân", "Tạo đường lui lịch sự"],
        evaluation: "Lời mời hoàn hảo: dựa trên sở thích đối phương, thời gian địa điểm cụ thể, và quan trọng nhất là không tạo áp lực phải nhận lời.",
        ancientComment: "Mũi tên nhắm đúng đích, đường lui rộng mở thanh cao. Lời mời tự nhiên như mây trôi nước chảy, ai nỡ chối từ.",
        effects: { communication: 3, confidence: 3, empathy: 3, respect: 3, humor: 1, impression: 3 }
      },
      {
        id: "B",
        tag: "Ngỏ ý hẹn khi rảnh",
        text: "Mời chung chung: 'Hôm nào rảnh tụi mình đi cafe chơi nhé Thảo?'",
        playerMessage: "Hay là hôm nào rảnh tụi mình đi cafe chơi nha Thảo?",
        girlReply: "Uhm oke nè, để xem cuối tuần này mình có vướng lịch học thêm gì không rồi mình báo bạn sau nha.",
        girlReactionEmoji: "🙂",
        softSkills: ["Thiếu sự quyết đoán", "Kế hoạch mơ hồ"],
        evaluation: "Lời hẹn 'hôm nào' thường dễ trôi vào quên lãng vì không có thời gian và mục đích cụ thể để đối phương sắp xếp.",
        ancientComment: "Lời hẹn mông lung tựa sương khói sớm mai, dễ tan biến vào dòng chảy thường nhật.",
        effects: { communication: 1, confidence: 0, empathy: 1, respect: 1, humor: 0, impression: 0 }
      },
      {
        id: "C",
        tag: "Chủ động chốt thời gian",
        text: "Đưa ra lịch trình cố định: 'Tối Thứ Bảy 19h mình đón bạn đi ăn nhà hàng nướng nhé. Bạn không cần chuẩn bị gì đâu, cứ để mình lo.'",
        playerMessage: "Tối Thứ Bảy 19h mình qua đón Thảo đi ăn đồ nướng nha. Bạn không cần lo gì hết, mình đặt bàn sẵn rồi đó!",
        girlReply: "À... cảm ơn ý tốt của bạn nha, nhưng tối Thứ Bảy mình có hẹn ăn cơm với cả nhà rồi á. Với lại tụi mình đi cafe trước cho tiện hơn nha.",
        girlReactionEmoji: "😅",
        softSkills: ["Hơi áp đặt", "Chưa lắng nghe nhu cầu đối phương"],
        evaluation: "Tự ý sắp xếp mọi thứ mà không hỏi trước ý kiến dễ tạo cảm giác thiếu tôn trọng và gây áp lực cho đối phương trong buổi hẹn đầu.",
        ancientComment: "Lòng nhiệt tình biến thành sự chuyên quyền áp đặt. Thiếu đi sự thương thảo bình đẳng giữa đôi bên.",
        effects: { communication: 0, confidence: 2, empathy: -2, respect: -2, humor: 0, impression: -1 }
      },
      {
        id: "D",
        tag: "Rủ kèo ăn uống quen thuộc",
        text: "Rủ đi ăn món vặt vỉa hè: 'Gần trường có quán kem bơ dừa nướng ngon đỉnh chóp. Mình tính đi ăn xả stress, Thảo có muốn nhập hội không?'",
        playerMessage: "Gần trường mới mở quán kem bơ dừa nướng ngon xỉu á. Chiều Thứ Sáu tan học mình tính ghé ăn xả stress, Thảo có muốn lập team cùng đi không nè?",
        girlReply: "Trời ơiii kem bơ dừa nướng là món ruột của tui luôn á! Được nha, chiều Thứ Sáu tan học 17h hú mình với nha! 🍨🤤",
        girlReactionEmoji: "🤩",
        softSkills: ["Tự nhiên gần gũi", "Không áp lực hẹn hò câu nệ"],
        evaluation: "Một lời rủ bình dị, phù hợp với đời sống sinh viên, tạo không khí thoải mái như hai người bạn hợp cạ.",
        ancientComment: "Lấy sự mộc mạc chân phương kết nối tâm hồn. Đơn giản mà hiệu quả lạ kỳ.",
        effects: { communication: 2, confidence: 2, empathy: 2, respect: 2, humor: 2, impression: 2 }
      }
    ]
  },
  {
    id: 6,
    chapter: "Chương 6",
    chapterTitle: "Thấu Tâm Chi Đạo",
    badge: "Lắng Nghe Khi Đối Phương Yếu Lòng",
    setting: "Đêm Muộn 22:45 - Sau Buổi Gặp Mặt 1 Tuần",
    context: "Buổi đi chơi tuần trước diễn ra rất vui vẻ và ấm áp. Nhưng tối nay, Thảo nhắn tin lúc nửa đêm với tâm trạng nặng trĩu: dự án tốt nghiệp bị giảng viên phê bình gay gắt, một thành viên trong nhóm bỏ dở việc khiến nàng phải gánh hết, áp lực dồn nén khiến Thảo bật khóc.",
    ancientWisdom: "Lời dẫn cổ thư: 'Khi người khác đang đau buồn, điều họ cần nhất là sự thấu hiểu và một đôi tai biết lắng nghe, chứ không phải một bài thuyết giảng đạo lý hay những lời dạy dỗ đúng sai.'",
    girlStatus: "Rất tin tưởng",
    initialMessages: [
      { sender: "girl", text: "Hôm nay mệt mỏi quá bạn ơi... cảm giác mọi công sức mấy tuần nay đổ sông đổ bể hết rồi :(", time: "22:45" },
      { sender: "girl", text: "Project nhóm bị thầy chê tơi bời, bạn cùng nhóm thì bỏ ngang không làm tiếp... Mình chỉ muốn ngồi khóc thôi.", time: "22:46" }
    ],
    choices: [
      {
        id: "A",
        tag: "Lắng nghe & đồng cảm",
        text: "Thấu cảm và làm chỗ dựa: 'Nghe thương Thảo ghê... Bao nhiêu áp lực dồn lên một mình bạn lúc này chắc kiệt sức lắm. Thảo đã nỗ lực hết mình rồi. Bạn có muốn tâm sự cho nhẹ lòng không, mình luôn ở đây lắng nghe nè.'",
        playerMessage: "Nghe thương Thảo ghê... Bao nhiêu áp lực dồn lên một mình bạn lúc này chắc mệt mỏi lắm. Thảo đã cố gắng hết sức rồi mà. Bây giờ bạn muốn trút hết tâm sự ra cho nhẹ lòng, hay muốn nghỉ ngơi yên tĩnh một chút nè? Mình luôn ở đây lắng nghe Thảo nha.",
        girlReply: "Cảm ơn bạn nhiều lắm... Đọc tin nhắn của bạn tự dưng mình thấy nhẹ nhõm hơn hẳn á. Cảm ơn vì đã luôn dịu dàng và lắng nghe mình những lúc thế này... Cho mình gọi điện kể bạn nghe một xíu được hông? 🥺❤️",
        girlReactionEmoji: "🥹",
        softSkills: ["Lắng nghe thấu cảm (Empathetic Listening)", "Xác nhận cảm xúc (Emotional Validation)"],
        evaluation: "Công nhận cảm xúc của người khác và ở bên họ mà không phán xét là kỹ năng cảm xúc (EQ) quan trọng bậc nhất trong mọi mối quan hệ.",
        ancientComment: "Biết xót xa cho nỗi lòng người khác, đặt cảm xúc trước lý trí khô khan. Cửa sổ tâm hồn từ đây rộng mở.",
        effects: { communication: 3, confidence: 2, empathy: 4, respect: 3, humor: 0, impression: 4 }
      },
      {
        id: "B",
        tag: "Phân tích giải pháp",
        text: "Đưa ra lời khuyên logic ngay: 'Theo mình bạn nên lập lại bảng phân chia công việc, gửi mail báo cáo thẳng cho giảng viên về bạn bỏ nhóm kia để trừ điểm là xong.'",
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
        tag: "Động viên tích cực",
        text: "Gạt nỗi buồn: 'Thôi đừng buồn nữa bạn ơi! Chuyện nhỏ mà, ngày mai mọi thứ sẽ ổn thôi, cười lên nào!'",
        playerMessage: "Thôi đừng buồn nữa Thảo ơi! Chuyện nhỏ như con thỏ ấy mà, ngoài kia còn bao nhiêu chuyện khó hơn nhiều. Lạc quan lên, cười một cái xem nào!",
        girlReply: "(Thảo đã xem tin nhắn và một lúc lâu sau chỉ nhắn lại: 'Uhm cảm ơn bạn.')",
        girlReactionEmoji: "🤐",
        softSkills: ["Lạc quan độc hại (Toxic Positivity)"],
        evaluation: "Hạ thấp hoặc phủ nhận nỗi buồn của người khác bằng sự lạc quan sáo rỗng vô tình khiến họ cảm thấy cảm xúc của mình không có giá trị.",
        ancientComment: "Xem nhẹ nỗi đau của người khác dẫu xuất phát từ ý tốt, cũng vô tình trở thành bức tường ngăn cách sự thấu hiểu.",
        effects: { communication: -1, confidence: 0, empathy: -3, respect: -1, humor: -1, impression: -2 }
      },
      {
        id: "D",
        tag: "Gửi quà ngọt ngào",
        text: "Đặt một món đồ uống ấm giao tới phòng trọ nàng kèm lời nhắn nhẹ nhàng.",
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
    setting: "Bờ Hồ Gió Mát - Đêm Thu Trăng Sáng",
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
        text: "Nói lời chân thật từ đáy lòng: 'Từ ngày gặp ở quán cafe đến giờ, mỗi lần trò chuyện với Thảo đều khiến cuộc sống của mình tươi vui hơn. Mình thật sự rất quý trọng và có tình cảm đặc biệt với bạn. Mình muốn được chính thức đồng hành cùng Thảo.'",
        playerMessage: "Từ cái ngày gặp ở quán cafe sách đến giờ, mỗi khoảnh khắc được trò chuyện cùng Thảo đều làm cuộc sống của mình ý nghĩa hơn rất nhiều. Với mình, bạn là một người vô cùng đặc biệt. Mình muốn được đồng hành và quan tâm Thảo một cách nghiêm túc và chân thành nhất.",
        girlReply: "Mình cũng chờ câu nói này từ bạn lâu lắm rồi... Cảm ơn bạn vì đã luôn kiên nhẫn, tinh tế và dịu dàng với mình nhé! Em đồng ý ❤️✨",
        girlReactionEmoji: "💍",
        softSkills: ["Bày tỏ chân thành", "Chịu trách nhiệm cảm xúc", "Dũng cảm"],
        evaluation: "Bày tỏ tình cảm rõ ràng, tôn trọng và nghiêm túc, tạo cho đối phương sự an tâm và tin tưởng tuyệt đối.",
        ancientComment: "Chân tình cảm hóa lòng người, không cần hoa mỹ sáo rỗng, lời nói tự đáy lòng chính là sức mạnh tối thượng.",
        effects: { communication: 4, confidence: 4, empathy: 4, respect: 4, humor: 1, impression: 4 }
      },
      {
        id: "B",
        tag: "Hạ nhiệt bằng đùa vui",
        text: "Né tránh câu trả lời bằng cách cười trừ: 'Haha thì là bạn thân cùng tiến chứ là gì nữa cô nương, hỏi câu khó đỡ ghê!'",
        playerMessage: "Haha thì là 'chiến hữu' cùng tiến chứ là gì nữa cô nương ơi, tự nhiên hôm nay hỏi câu sâu sắc khó đỡ ghê haha!",
        girlReply: "À... ra là 'chiến hữu' thôi hả. Mình hiểu rồi, cảm ơn bạn đã nói rõ cho mình biết nha.",
        girlReactionEmoji: "💔",
        softSkills: ["Né tránh cam kết", "Sợ tổn thương nên phòng thủ"],
        evaluation: "Đùa cợt vào thời điểm đối phương đang nghiêm túc mở lòng dễ làm họ cảm thấy bị coi thường và khép lại cánh cửa cảm xúc.",
        ancientComment: "Hèn nhát né tránh lúc the chốt, đem chân tình làm trò đùa cợt, tự tay đẩy cơ duyên vào chốn bạn bè xa cách.",
        effects: { communication: -1, confidence: -2, empathy: -2, respect: -1, humor: 1, impression: -3 }
      },
      {
        id: "C",
        tag: "Khẳng định kỳ vọng",
        text: "Tỏ tình mang tính đòi hỏi: 'Làm người yêu mình đi, mình theo đuổi Thảo cả tháng nay tốn bao nhiêu công sức rồi đó nha!'",
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
        text: "Mượn hình ảnh lãng mạn nhẹ nhàng: 'Bí kíp tình trường có thể có trăm chương, nhưng điều đẹp nhất mình học được là sự chân thành khi ở cạnh Thảo. Nếu Thảo bằng lòng, mình mong được cùng bạn viết tiếp những trang tiếp theo.'",
        playerMessage: "Bí kíp trên đời có trăm chương, nhưng điều đẹp nhất mình học được chính là sự chân thành khi ở cạnh bạn. Nếu Thảo bằng lòng, mình rất mong được cùng bạn viết tiếp những ngày tháng sau này.",
        girlReply: "Hahaha đại hiệp mượn lời văn vẻ ghê á! Cơ mà nghe ngọt ngào và dễ thương lắm... Mình đồng ý đồng hành cùng bạn nha! 🌸🥰",
        girlReactionEmoji: "🌸",
        softSkills: ["Nghệ thuật ngôn từ", "Vừa dí dỏm vừa trân trọng"],
        evaluation: "Kết hợp chất lãng mạn nhẹ nhàng với sự chân thành tôn trọng, tạo cảm giác vừa bay bổng vừa ấm áp.",
        ancientComment: "Lời văn tao nhã, ý tứ vẹn toàn, duyên lành tự nhiên đâm chồi nảy lộc.",
        effects: { communication: 4, confidence: 3, empathy: 3, respect: 4, humor: 3, impression: 4 }
      }
    ]
  }
];

// Hàm xác định phản ứng kết thúc Chương 7 dựa trên toàn bộ hành trình
window.getChapter7BranchingResponse = function(stats, choicesHistory) {
  const respect = stats.respect || 0;
  const impression = stats.impression || 0;
  const empathy = stats.empathy || 0;

  if (respect < -2) {
    return {
      status: "boundary",
      reply: "Cảm ơn bạn đã nói ra suy nghĩ. Nhưng qua thời gian tiếp xúc, mình thấy cách giao tiếp của bạn đôi lúc làm mình thấy không thoải mái và thiếu được tôn trọng. Mình nghĩ tụi mình nên dừng lại ở mức bạn bè xã giao thôi nhé.",
      emoji: "🛑",
      ancientComment: "Tôn trọng là nền tảng tối cao của giao tiếp. Thiếu đi sự tôn trọng thì ngàn vạn lời hay cũng chỉ là vô nghĩa."
    };
  } else if (impression < 4 || empathy < 2) {
    return {
      status: "polite_decline",
      reply: "Cảm ơn bạn đã dành tình cảm cho mình nha... Nhưng thật lòng mình thấy tụi mình hợp làm bạn bè hơn. Mình rất trân trọng những lần nói chuyện vui vẻ, hy vọng tụi mình vẫn giữ được tình bạn thoải mái này nhé!",
      emoji: "🤝",
      ancientComment: "Duyên chưa đủ chín, lòng người chưa rung động sâu sắc. Chấp nhận lời từ chối một cách lịch thiệp cũng là một nét đẹp bản lĩnh."
    };
  } else if (impression < 9) {
    return {
      status: "need_time",
      reply: "Mình thật sự rất quý bạn và thích nói chuyện cùng bạn... Nhưng cho mình thêm chút thời gian nhé, mình muốn tụi mình tìm hiểu nhau thêm một thời gian nữa để cả hai cùng chắc chắn về cảm xúc của mình nè ✨",
      emoji: "⏳",
      ancientComment: "Tình cảm cần thời gian đơm hoa kết trái. Đối phương thận trọng chính là trân trọng mối quan hệ này."
    };
  } else {
    return {
      status: "accept",
      reply: "Mình cũng đã chờ câu nói này từ bạn lâu lắm rồi... Cảm ơn bạn vì suốt thời gian qua đã luôn kiên nhẫn, tinh tế và tôn trọng mình nhé. Mình đồng ý cùng bạn bước tiếp! ❤️✨",
      emoji: "💍",
      ancientComment: "Chân thành vi bản, tinh tế vi tâm. Toàn bộ hành trình vừa qua đã chứng minh tấm chân tình của đại hiệp!"
    };
  }
};

// 5 Câu hỏi Mini-game Thực chiến Phản Xạ (Thiết kế các lựa chọn có trade-off, không có đáp án ngớ ngẩn lộ liễu)
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
        text: "Haha đúng rồi đó, anh hot boy trường mà! Nhưng em may mắn được anh để ý đấy nhé.",
        score: 0,
        tier: "poor",
        feedback: "Đùa quá đà biến thành tự mãn và trịch thượng.",
        reaction: "🙄",
        skill: "Thiếu khiêm tốn"
      }
    ]
  },
  {
    id: 2,
    prompt: "Cú lừa 23:00 đêm: 'Anh ơi, em đang đứng dưới cổng trọ anh nè, xuống mở cửa đi!'",
    timeLimit: 10,
    girlVoice: "Em đang dưới cổng nhà anh nè, mở cửa đi!",
    choices: [
      {
        text: "Ủa thật không đó? Trọ anh có cổng sắt khóa 2 lớp, em đọc đúng màu cổng anh phi xuống liền haha!",
        score: 3,
        tier: "excellent",
        feedback: "Tỉnh táo bắt bài cú lừa đêm khuya một cách hóm hỉnh và đáng yêu!",
        reaction: "🤣",
        skill: "Ứng biến nhanh & Hóm hỉnh"
      },
      {
        text: "Nếu là thật thì anh chạy xuống ngay, còn nếu em trêu thì anh đã pha sẵn trà ấm trong tưởng tượng đợi em rồi!",
        score: 2,
        tier: "good",
        feedback: "Khéo léo, vừa ngọt ngào vừa cho thấy mình biết nàng đang trêu.",
        reaction: "✨",
        skill: "Linh hoạt ngôn từ"
      },
      {
        text: "Chạy vội xuống mở cửa ngay trong đêm mà không kịp kiểm tra điện thoại.",
        score: 1,
        tier: "neutral",
        feedback: "Rất nhiệt tình nhưng dễ bị nàng bắt bài trêu ghẹo 'quê độ'.",
        reaction: "😜",
        skill: "Nhiệt tình bộc phát"
      },
      {
        text: "Khuya rồi em đến làm gì vậy? Mai còn đi học đi làm mà, nghịch quá à nha.",
        score: 0,
        tier: "poor",
        feedback: "Quá nghiêm nghị và cứng nhắc, dập tắt bầu không khí vui vẻ.",
        reaction: "🤦‍♀️",
        skill: "Cứng nhắc thiếu linh hoạt"
      }
    ]
  },
  {
    id: 3,
    prompt: "Nàng vừa cắt tóc ngắn và gửi ảnh: 'Em vừa cắt tóc ngắn nè, nhìn có bị lạ hay ngố quá không anh?'",
    timeLimit: 10,
    girlVoice: "Em mới cắt quả tóc này, nhìn có bị ngố không anh?",
    choices: [
      {
        text: "Rất hợp luôn á! Tóc này tôn đường nét cằm và mắt em dã man, nhìn vừa cá tính vừa năng động!",
        score: 3,
        tier: "excellent",
        feedback: "Khen cụ thể chi tiết, củng cố sự tự tin cho nàng đúng tâm lý!",
        reaction: "😍",
        skill: "Khen ngợi chân thành & Quan sát chi tiết"
      },
      {
        text: "Xinh lắm nha! Tóc cũ dịu dàng còn tóc này nhìn trẻ trung, anh thấy phong cách nào em cũng hợp.",
        score: 2,
        tier: "good",
        feedback: "Lời khen an toàn, tích cực, giúp nàng an tâm với diện mạo mới.",
        reaction: "🥰",
        skill: "Khích lệ tích cực"
      },
      {
        text: "Nhìn hơi lạ mắt xíu nhưng nhìn lâu chắc quen, con gái thích thay đổi là chuyện bình thường mà.",
        score: 1,
        tier: "neutral",
        feedback: "Hơi trung lập, chưa đủ nhiệt tình để giải tỏa sự lo lắng của nàng.",
        reaction: "🙂",
        skill: "Thận trọng quá mức"
      },
      {
        text: "Anh thấy tóc dài hồi trước hợp với em hơn nhiều, tự nhiên cắt ngắn đi nhìn lạ hoắc.",
        score: 0,
        tier: "poor",
        feedback: "Chê thẳng thừng khi người ta đã cắt xong, làm nàng tụt cảm xúc nặng nề.",
        reaction: "😤",
        skill: "Thiếu tinh tế cảm xúc"
      }
    ]
  },
  {
    id: 4,
    prompt: "Tan tầm đói bụng, nàng than: 'Em đói bụng quá mà nghĩ mãi không biết nên ăn món gì hết trơn...'",
    timeLimit: 10,
    girlVoice: "Đói xỉu mà không biết ăn gì giờ...",
    choices: [
      {
        text: "Anh gợi ý 2 món: Phở cuốn thanh đạm mát mẻ hoặc gà nướng cay ấm bụng. Em đang nghiêng về vị thanh hay vị đậm nè?",
        score: 3,
        tier: "excellent",
        feedback: "Quyết đoán nhưng tôn trọng: thu hẹp thành 2 lựa chọn cụ thể để nàng dễ chọn!",
        reaction: "🤤",
        skill: "Hỗ trợ ra quyết định & Tinh tế"
      },
      {
        text: "Để anh mở app ship ngay hộp cháo sườn nóng hổi tới chỗ em nhé, đói là không được nhịn đâu!",
        score: 2,
        tier: "good",
        feedback: "Chủ động hành động, thể hiện sự quan tâm trực tiếp.",
        reaction: "🥰",
        skill: "Hành động quan tâm"
      },
      {
        text: "Hay em thử lướt app giao hàng xem quanh đó có quán nào đang giảm giá không nè?",
        score: 1,
        tier: "neutral",
        feedback: "Lời khuyên hữu ích nhưng không giải quyết được cảm giác bế tắc 'không biết ăn gì'.",
        reaction: "🤷‍♀️",
        skill: "Chỉ dẫn thông thường"
      },
      {
        text: "Ăn gì chả được em, tùy em chọn chứ anh ở xa sao biết em thích ăn gì lúc này.",
        score: 0,
        tier: "poor",
        feedback: "'Ăn gì chả được' - câu trả lời gây ngán ngẩm hàng đầu khi đối phương đang đói!",
        reaction: "🙄",
        skill: "Vô cảm & Thờ ơ"
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
