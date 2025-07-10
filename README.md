# 💼 Aplikasi Kas QC - Gaya Solana

Aplikasi manajemen kas, agenda, dan sosial media untuk tim QC, dibangun dengan tampilan bergaya futuristik seperti Solana. Menggunakan **Appwrite** sebagai backend (auth, database, storage).

## 🚀 Fitur Utama
- 🔐 Login & Register dengan Appwrite
- 📊 Dashboard: total kas, grafik kas masuk/keluar
- 📅 Agenda QC: tambah deskripsi + file
- 💬 Sosial media: kirim status, like, komen, PDF
- 🔒 Hak akses admin: edit/hapus status, transaksi, agenda

## 📁 Struktur Folder
```
📁 your-repo/
├── index.html
├── register.html
├── js/
│   └── auth.js
└── README.md
```

## ⚙️ Setup Appwrite
- Buat Project di Appwrite
- Tambahkan Web Platform (isi domain GitHub Pages kamu)
- Buat Collection dan Bucket sesuai dokumentasi
- Isi Project ID dan Endpoint di `auth.js`

## 🌐 Deploy ke GitHub Pages
1. Push semua file ke GitHub
2. Aktifkan Pages dari branch `main`
3. Akses aplikasi dari GitHub Pages

MIT License © 2025 by Tim QC & Radiansyah