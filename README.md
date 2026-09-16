# 🐟 AquaTech — Landing Page

> **Giải pháp Số hóa & Đo lường Tự động trong Sản xuất Cá giống**
>
> Ứng dụng thị giác máy tính và học sâu để nhận diện, đếm cá giống từ hình ảnh.

[![VietFuture 2026](https://img.shields.io/badge/VietFuture%202026-Đề%20Án%20Sáng%20Tạo%20Khoa%20Học-0b63e5?style=for-the-badge)](/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?style=flat-square&logo=vite)](https://vitejs.dev)

---

## 📖 Giới thiệu

**AquaTech** là trang landing page giới thiệu giải pháp ứng dụng **thị giác máy tính** và **học sâu (deep learning)** để nhận diện, đếm cá giống từ hình ảnh. Hệ thống giúp các cơ sở sản xuất giống:

- 🔬 Giảm thao tác thủ công trong kiểm đếm cá giống
- ⏱️ Rút ngắn thời gian kiểm đếm đáng kể
- 📊 Quản lý số lượng minh bạch, chính xác hơn

Dự án được phát triển bởi sinh viên **Đại học Lạc Hồng** *(Powered by Arizona State University)* trong khuôn khổ cuộc thi **VietFuture 2026 — Đề Án Sáng Tạo Khoa Học**.

---

## ✨ Tính năng trang web

| Section             | Mô tả                                                        |
| ------------------- | ------------------------------------------------------------- |
| **Hero**            | Banner chính với thông tin dự án và hiệu ứng sóng nước        |
| **Giới thiệu**     | Tổng quan về dự án AquaTech                                   |
| **Vấn đề & Giải pháp** | So sánh vấn đề hiện tại và giải pháp của AquaTech        |
| **Cách hoạt động**  | Quy trình 4 bước hoạt động của hệ thống                      |
| **Tính năng**       | Các tính năng chính của giải pháp                             |
| **Đội ngũ**         | Giới thiệu thành viên nhóm phát triển                        |
| **Footer**          | Thông tin liên hệ và các đường dẫn                            |

---

## 🛠️ Công nghệ sử dụng

- **React 18** — Thư viện giao diện người dùng
- **Vite 6** — Build tool siêu nhanh
- **Lucide React** — Bộ icon hiện đại
- **Vanilla CSS** — Styling tùy chỉnh với hiệu ứng glassmorphism & gradient

---

## 🚀 Cài đặt & Chạy

### Yêu cầu

- [Node.js](https://nodejs.org/) phiên bản **18+**
- npm hoặc yarn

### Các bước cài đặt

```bash
# 1. Clone repository
git clone <repository-url>
cd aqua-tech

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt tại `http://localhost:5173` để xem trang web.

### Build production

```bash
# Build cho production
npm run build

# Preview bản build
npm run preview
```

---

## 📁 Cấu trúc dự án

```
aqua-tech/
├── public/                    # Tài nguyên tĩnh
│   ├── demo/                  # Video demo
│   ├── docs/                  # Tài liệu
│   ├── images/                # Hình ảnh
│   └── favicon.svg            # Favicon
├── src/
│   ├── assets/                # Tài nguyên ảnh, media
│   ├── components/
│   │   ├── layout/            # Layout components (Navbar)
│   │   ├── sections/          # Các section chính
│   │   │   ├── HeroSection.jsx
│   │   │   ├── IntroSection.jsx
│   │   │   ├── ProblemSolution.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── KeyFeatures.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/                # Reusable UI components
│   ├── data/                  # Dữ liệu nội dung
│   │   ├── project.js         # Thông tin dự án
│   │   ├── features.js        # Tính năng
│   │   ├── howItWorks.js      # Quy trình hoạt động
│   │   ├── problemSolution.js # Vấn đề & Giải pháp
│   │   ├── team.js            # Thành viên đội ngũ
│   │   ├── techStack.js       # Công nghệ
│   │   ├── specs.js           # Thông số hệ thống
│   │   └── timeline.js        # Lộ trình phát triển
│   ├── styles/                # CSS stylesheets
│   ├── App.jsx                # Component gốc
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── vite.config.js             # Cấu hình Vite
├── package.json
└── README.md
```

---

## 🎨 Thiết kế

- **Color Palette**: Tông xanh dương chủ đạo (`#0b63e5`) với gradient aquatic
- **Typography**: Font hiện đại, hỗ trợ tiếng Việt
- **Effects**: Glassmorphism, SVG wave backgrounds, smooth animations
- **Responsive**: Tương thích đa thiết bị (desktop, tablet, mobile)

---

## 👥 Đội ngũ phát triển

Dự án được thực hiện bởi nhóm sinh viên **Đại học Lạc Hồng**.

---

## 📄 License

Dự án này được phát triển phục vụ cuộc thi **VietFuture 2026**. Mọi quyền được bảo lưu.

---

<p align="center">
  <strong>AquaTech</strong> — Giải pháp thông minh cho ngành nuôi trồng thủy sản 🐟
</p>
