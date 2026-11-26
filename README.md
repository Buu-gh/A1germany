# Deutsch A1 mit Buu

Website tự học tiếng Đức A1 theo giáo trình Menschen A1 (Hueber): từ vựng Đức–Việt, thẻ ghi nhớ, ngữ pháp, giao tiếp, hướng dẫn học Kursbuch từng bài, bài tập Arbeitsbuch tự chấm điểm kèm giải thích, kiểm tra từ và ôn tập.

Trang tĩnh, không cần build: `index.html` đọc dữ liệu từ `data.json`. Tiến độ học lưu trong trình duyệt (localStorage).

## Chạy thử trên máy

```
python3 -m http.server 8000
```
rồi mở http://localhost:8000

## Deploy

Vercel: Framework Preset = Other, không có Build Command, Output Directory = `.` (gốc repo).

## Nguồn dữ liệu (`src/`)

- `c1.js`–`c3.js`: ngữ pháp, giao tiếp, bài luyện cho từng Lektion
- `gNN.js`: hướng dẫn học Kursbuch + bài tập Arbeitsbuch của Lektion NN
- `w01-05.js`: giải thích cho bài tập Lektion 1–5 (từ Lektion 6 giải thích nằm sẵn trong `gNN.js`)
- `parse.py` → `clean.py` → `assemble.js` tạo dữ liệu từ vựng, `assemble2.js` gộp phần hướng dẫn và bài tập vào `data.json`
