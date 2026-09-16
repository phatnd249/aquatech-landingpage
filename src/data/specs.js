export const systemSpecsData = {
  sectionTag: "ĐẶC TẢ KỸ THUẬT CHI TIẾT",
  title: "Thông Số Kỹ Thuật Chuẩn Công Nghiệp",
  subtitle: "Bảng tham số minh bạch và dữ liệu thực nghiệm phục vụ thẩm định của Hội đồng Giám khảo VietFuture 2026",

  categories: [
    {
      group: "Phần Cứng & Cảm Biến Hiện Trường",
      color: "#00f2fe",
      specs: [
        { label: "Vi điều khiển thu thập (MCU)", value: "ESP32-S3 Dual-Core 240MHz (Cấp công nghiệp)" },
        { label: "Đầu dò pH công nghiệp", value: "Dải đo 0.00 – 14.00 pH, sai số ±0.02 pH, tự bù nhiệt (ATC)" },
        { label: "Đầu dò Oxy hòa tan (DO)", value: "Cảm biến quang học huỳnh quang 0.0 – 20.0 mg/L, sai số ±0.05 mg/L" },
        { label: "Đầu dò Nhiệt độ & EC", value: "Cảm biến bạch kim PT1000 (-20°C đến 80°C) / Điện cực 4 cực 0-50,000 µS/cm" },
        { label: "Cấp độ bảo vệ môi trường", value: "Hộp điều khiển IP66 / Cụm đầu dò ngâm chìm IP68" },
        { label: "Nguồn cấp & Năng lượng", value: "Điện lưới 220VAC hoặc Pin mặt trời 100W kèm ắc quy lưu trữ 48h" },
      ],
    },
    {
      group: "Truyền Dẫn & Mạng Không Dây",
      color: "#38bdf8",
      specs: [
        { label: "Giao thức truyền thông thiết bị", value: "Modbus RTU qua bus RS-485 chống nhiễu công nghiệp" },
        { label: "Mạng diện rộng (WAN)", value: "4G LTE Cat-1 (hỗ trợ tất cả nhà mạng Viettel/VNPT/Mobifone)" },
        { label: "Mạng cục bộ (LAN/WLAN)", value: "WiFi 802.11 b/g/n 2.4GHz / Cổng Ethernet 10/100 Mbps" },
        { label: "Giao thức dữ liệu Cloud", value: "MQTT v5.0 đóng gói qua TLS 1.3 bảo mật mã hóa đầu cuối" },
        { label: "Tần suất gửi telemetry", value: "Có thể cấu hình từ 1s đến 60s (Mặc định: 1s/lần)" },
        { label: "Khả năng phục hồi mất kết nối", value: "Local buffer lưu trữ 30 ngày, tự động đồng bộ khi có kết nối" },
      ],
    },
    {
      group: "Edge AI Gateway & Mô Hình Học Máy",
      color: "#a855f7",
      specs: [
        { label: "Thiết bị Edge Computing", value: "NVIDIA Jetson Nano / Raspberry Pi 5 (Quad-core 2.4GHz, 8GB RAM)" },
        { label: "Kiến trúc mô hình học sâu", value: "Mạng LSTM hồi quy kết hợp Gradient Boosting (LightGBM)" },
        { label: "Thời gian suy luận (Inference)", value: "< 25ms / mẻ dữ liệu (Tối ưu hóa qua ONNX Runtime FP16)" },
        { label: "Tập dữ liệu huấn luyện", value: "500,000+ mẫu dữ liệu thủy văn thực địa thu thập liên tục 12 tháng" },
        { label: "Độ chính xác kiểm nghiệm (F1)", value: "98.6% trong phát hiện hiện tượng thiếu oxy tầng đáy trước 6h" },
        { label: "Cơ chế cập nhật mô hình", value: "OTA Model Update từ Cloud mà không làm gián đoạn hệ thống" },
      ],
    },
    {
      group: "Hạ Tầng Cloud & Nền Tảng Trực Quan",
      color: "#10b981",
      specs: [
        { label: "Message Broker", value: "EMQX Enterprise Cluster — khả năng đáp ứng 100,000+ msg/s" },
        { label: "Cơ sở dữ liệu chuỗi thời gian", value: "TimescaleDB (PostgreSQL Extension) nén dữ liệu 90%" },
        { label: "Backend Microservices", value: "Node.js Express + Python FastAPI chạy trong Docker Container" },
        { label: "Frontend Web Dashboard", value: "React 18 + Vite, kiến trúc Component-Driven thời gian thực" },
        { label: "Độ sẵn sàng hệ thống (SLA)", value: "99.95% uptime cam kết với kiến trúc High-Availability" },
        { label: "Bảo mật & Phân quyền", value: "Xác thực hai lớp (2FA), JWT Tokens, phân quyền RBAC đa người dùng" },
      ],
    },
  ],
};
