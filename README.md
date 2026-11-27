# COPELANDselect — Chọn máy nén Copeland (PWA)

Ứng dụng web (PWA) chọn máy nén lạnh Copeland (ZX) theo nhiệt độ ngưng tụ / bay hơi, tra theo model hoặc theo công suất lạnh. Chạy **offline** sau lần mở đầu tiên, có giỏ chọn
thiết bị và xuất phiếu yêu cầu báo giá (CSV / In-PDF / Word).

- Địa chỉ: https://decoolboy-source.github.io/COPELANDselect/
- Hãng: **Copeland (ZX Series)** — mỗi hãng là một app riêng (xem danh sách app trên
  https://decoolboy-source.github.io/cong-cu/).
- Tách ngày 2026-11-26 từ MCselect (app nhiều hãng, đã ngừng): giữ nguyên giao diện và
  cách tra, chỉ giữ dữ liệu của hãng này, trang chủ đi thẳng vào các dòng sản phẩm.

## Dữ liệu

`data.json`: 81 series, 1782 điểm vận hành; môi chất: R404A, R407F, R448A/R449A.
Tra đúng các mức nhiệt độ có trong dữ liệu nguồn (không nội suy).

Số liệu trích từ catalogue của hãng, chỉ để **tham khảo sơ bộ** — đối chiếu tài liệu gốc
hoặc nhà cung cấp trước khi chọn thiết bị cho dự án thực tế.

## Sổ tay

Tab **Sổ tay** (nút trên thanh đầu / thanh dưới, link thẳng `index.html#so-tay`): 9 thẻ song ngữ,
tìm không dấu, lọc Cụm máy ZX / Chung — đọc tên model và mã điện, bảng công suất ZX/ZXL, ZX Digital,
ZX biến tần, ZX microchannel, tính năng ZX, checklist khởi động (tick lưu trong máy), cách tính
quá nhiệt / quá lạnh, các dòng cụm máy Copeland khác.

Nguồn: brochure "Copeland Compressors and Condensing Units for Refrigeration Applications" (2023) và
phiếu "System start-up and operational check sheet" của cụm máy ZX. Khoá localStorage:
`COPELANDselect:hbChecks` (checklist).

## Cấu trúc thư mục

```
index.html      Giao diện
app.js          Logic tra cứu, giỏ báo giá, xuất phiếu
data.json       Dữ liệu thiết bị của hãng — sửa/thêm model ở đây
data-io.js      Xuất/Nhập dữ liệu JSON (chuẩn chung các app)
nasa-ui.css     Giao diện CHUNG các app chọn thiết bị (giống hệt nhau giữa các app)
icons.js        Bộ icon CHUNG (trích từ Lucide, chạy offline)
style.css       Phần riêng của app
handbook.js     Engine tab Sổ tay (giống hệt bản ở MYCOMselect)
handbook-data.js Nội dung Sổ tay Copeland (song ngữ) — sửa/thêm thẻ ở đây
manifest.json   Khai báo PWA
sw.js           Service worker — cache offline
icon-*.png      Icon app
```

## Chạy thử trên máy

App là file tĩnh, không cần cài gói:

```
python -m http.server 8080
```

rồi mở http://localhost:8080/ (không mở bằng `file://` vì service worker không chạy).

## Triển khai

Repo GitHub `decoolboy-source/COPELANDselect`, GitHub Pages từ nhánh `main`, thư mục gốc.
App chạy tại `/COPELANDselect/` chung origin với site chính và các app khác, nên:

- Service worker đăng ký tương đối `./sw.js`, scope `./`.
- Cache tên `COPELANDselect-v<số>`; khi kích hoạt chỉ xoá cache có tiền tố này.
- Khoá localStorage có tiền tố `COPELANDselect:`.
- File xuất dữ liệu `COPELANDselect_YYYYMMDD.json` (`app: "COPELANDselect"`, `schemaVersion: 1`).

Cập nhật: sửa code/dữ liệu, tăng `CACHE_NAME` trong `sw.js` và `BUILD_VERSION` trong
`app.js`, push lên `main`. Dòng "build ..." cuối trang cho biết bản đang chạy.

## Lịch sử phiên bản

### 2026-11-27.2 — `COPELANDselect-v3`

Thêm tab **Sổ tay** (handbook.js + handbook-data.js), thanh dưới thành 3 mục.

### 2026-11-26.1 — bản đầu `COPELANDselect-v1`

Tách từ MCselect: chỉ dữ liệu Copeland (ZX Series), ẩn bước chọn hãng, đánh số lại các bước 1–5; khoá lưu trữ, cache,
file xuất dữ liệu dùng tiền tố `COPELANDselect`.
