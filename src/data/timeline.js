export const timelineData = {
  sectionTag: "LỘ TRÌNH PHÁT TRIỂN & TIẾN ĐỘ",
  title: "Hành Trình Hiện Thực Hóa Đề Án",
  subtitle: "Các mốc phát triển kỹ thuật từ phòng thí nghiệm tới kiểm nghiệm thực tế và tham gia VietFuture 2026",

  milestones: [
    {
      period: "03/2025 – 08/2025",
      title: "R&D Phần Cứng & Thiết Kế Đầu Dò IoT",
      status: "completed",
      badge: "Đã hoàn thành",
      description:
        "Hoàn thiện bo mạch vi điều khiển ESP32 cấp công nghiệp, tích hợp bus RS-485 Modbus RTU, kiểm nghiệm khả năng ngâm chìm chuẩn IP68 và thiết kế mạch nguồn năng lượng mặt trời.",
      achievements: [
        "Chế tạo 10 cụm cảm biến thử nghiệm",
        "Hiệu chuẩn độ trôi cảm biến trong môi trường nước lợ",
        "Hoàn thiện vỏ hộp tiêu chuẩn kháng bụi/nước IP66",
      ],
    },
    {
      period: "09/2025 – 12/2025",
      title: "Huấn Luyện AI Engine & Xây Dựng Cloud",
      status: "completed",
      badge: "Đã hoàn thành",
      description:
        "Xây dựng hạ tầng EMQX MQTT và cơ sở dữ liệu TimescaleDB. Thu thập 500,000 dòng dữ liệu thực tế để huấn luyện mô hình PyTorch và nén mô hình sang ONNX chạy trên Edge Gateway.",
      achievements: [
        "Độ chính xác mô hình dự báo đạt 98.6%",
        "Tối ưu thời gian suy luận Edge < 25ms",
        "Xây dựng thành công cơ chế failover offline",
      ],
    },
    {
      period: "01/2026 – 04/2026",
      title: "Thử Nghiệm Thực Địa Tại Đồng Bằng Sông Cửu Long",
      status: "completed",
      badge: "Đã hoàn thành",
      description:
        "Triển khai thực tế trên 3 mô hình ao nuôi tôm công nghệ cao tại Bến Tre và Sóc Trăng. Hệ thống hoạt động liên tục 90 ngày không gián đoạn, tự động điều khiển bơm oxy ổn định tuyệt đối.",
      achievements: [
        "Tiết kiệm 41.2% điện năng tiêu thụ quạt nước",
        "0 sự cố sốc nước/mất oxy ban đêm trong suốt vụ",
        "Thu nhận phản hồi đánh giá tích cực từ các chủ trang trại",
      ],
    },
    {
      period: "05/2026 – 06/2026",
      title: "Tham Gia Vòng Chung Kết VietFuture 2026",
      status: "active",
      badge: "Giai đoạn hiện tại",
      description:
        "Hoàn thiện báo cáo khoa học, mã nguồn mở, tài liệu kỹ thuật và bản demo trực tiếp phục vụ Hội đồng Giám khảo VietFuture thẩm định đánh giá thực tế.",
      achievements: [
        "Hoàn thiện cổng giới thiệu Project Showcase",
        "Xuất bản Whitepaper và tài liệu đặc tả API chuẩn",
        "Chuẩn bị thiết bị Edge Hub demo thực tế tại gian triển lãm",
      ],
    },
    {
      period: "Q3/2026 – 2027",
      title: "Thương Mại Hóa & Mở Rộng 1,000 Điểm Giám Sát",
      status: "upcoming",
      badge: "Kế hoạch tương lai",
      description:
        "Đăng ký chứng nhận độc quyền giải pháp sáng chế, hợp tác cùng các hợp tác xã thủy sản mở rộng triển khai trên quy mô toàn quốc và các nước Đông Nam Á.",
      achievements: [
        "Hợp tác chuyển giao công nghệ cho 50+ hợp tác xã",
        "Tích hợp công nghệ vệ tinh quan trắc viễn thám",
        "Chứng nhận chất lượng ISO/IEC quốc tế",
      ],
    },
  ],
};
