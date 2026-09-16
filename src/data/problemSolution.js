export const problemSolutionData = {
  problemsTitle: "VẤN ĐỀ HIỆN NAY",
  solutionsTitle: "GIẢI PHÁP",
  solutionsSubtitle: "Biến hình ảnh thành kết quả kiểm đếm",

  problems: [
    {
      id: "error",
      title: "Dễ xảy ra sai lệch",
      desc: "Cá nhỏ, di chuyển nhanh và chồng lấn gây khó đếm",
      iconType: "cross",
    },
    {
      id: "verify",
      title: "Khó kiểm tra, đối chiếu",
      desc: "Thiếu hình ảnh và lịch sử dữ liệu để xác minh",
      iconType: "search",
    },
    {
      id: "time",
      title: "Tốn thời gian và nhân lực",
      desc: "Khó xử lý nhanh khi số lượng cá lớn",
      iconType: "clock",
    },
    {
      id: "impact",
      title: "Ảnh hưởng sản xuất",
      desc: "Sai số tác động đến mật độ thả nuôi và kế hoạch xuất bán",
      iconType: "gear",
    },
  ],

  solutions: [
    {
      id: "sol-1",
      imageKey: "sol-fish-detect",
      caption: "Nhận diện và đếm cá tự động từ hình ảnh",
    },
    {
      id: "sol-2",
      imageKey: "sol-devices",
      caption: "Thao tác đơn giản trên máy tính hoặc thiết bị di động",
    },
    {
      id: "sol-3",
      imageKey: "sol-table",
      caption: "Hiển thị trực quan các cá thể được AI nhận diện",
    },
    {
      id: "sol-4",
      imageKey: "sol-history",
      caption: "Hỗ trợ lưu kết quả để theo dõi và đối chiếu",
    },
  ],
};
