<div align="center">
  <h1>Saung Berkah Waras 🍽️</h1>
  <p><strong>Platform Pemesanan dan Informasi Restoran Modern</strong></p>
</div>

---

## 📖 Tentang Proyek
**Saung Berkah Waras** adalah sebuah website *landing page* interaktif sekaligus aplikasi pemesanan (*web-app*) berbasis peramban (browser) yang dirancang untuk memberikan pengalaman terbaik kepada pelanggan, baik melalui perangkat desktop maupun seluler. 

Website ini mengadaptasi antarmuka modern yang estetik dengan sentuhan ala aplikasi pemesanan online populer khusus untuk pengalaman *mobile*, sehingga memudahkan pelanggan memesan menu andalan seperti paket ayam, lele, soto, dan bakso.

## ✨ Fitur Utama
- **🖥️ Desktop View**: Landing page yang elegan dengan desain visual yang *rich*, menampilkan menu andalan, lokasi, jam operasional, dan galeri restoran.
- **📱 Mobile App View**: Antarmuka khusus pengguna ponsel pintar yang menyerupai aplikasi *food-delivery* (seperti ShopeeFood/GoFood), lengkap dengan kategori menu, tombol keranjang, dan integrasi pemesanan langsung via WhatsApp atau platform pihak ketiga.
- **⚡ Super Cepat & SEO Friendly**: Dibangun menggunakan Next.js (App Router) untuk memastikan waktu muat (*loading time*) yang cepat dan visibilitas pencarian yang optimal.
- **🎨 Modern UI/UX**: Efek transisi, tata letak responsif, dan desain visual yang dirancang untuk memanjakan mata serta memberikan kesan profesional.

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** CSS3 / Vanilla CSS (Fully Responsive)
- **Icons & Assets:** Custom SVG & Next/Image untuk optimasi gambar.
- **Architecture:** Komponen modular terpisah antara desktop dan mobile.

## 🚀 Memulai Proyek (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di perangkat lokal:

### Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18.x atau lebih baru) di perangkat Anda.

### Instalasi
1. Masuk ke direktori proyek:
   ```bash
   cd website-saung-berkah-waras
   ```
2. Instal semua dependensi paket:
   ```bash
   npm install
   ```

### Menjalankan Server Pengembangan (Development)
Jalankan perintah berikut untuk memulai server lokal:
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda untuk melihat hasilnya. Proyek akan memuat ulang secara otomatis (*hot-reload*) setiap kali Anda menyimpan perubahan pada kode.

## 📂 Struktur Direktori Utama
```text
├── public/              # Aset statis seperti gambar makanan, ikon aplikasi, dan logo.
├── src/
│   ├── app/             # Routing Next.js, layout utama, page.js, dan global/mobile CSS.
│   ├── components/      # Komponen antarmuka pengguna (Navbar, Hero, Footer, dll).
│   │   └── mobile/      # Komponen antarmuka spesifik untuk pengalaman layar kecil/mobile.
│   └── data/            # Data terstruktur (contoh: site.js untuk profil restoran, menu.js untuk daftar menu).
```

## 🌍 Deployment (Rilis Publik)
Proyek berbasis Next.js ini paling optimal jika di-*deploy* menggunakan **Vercel**:
1. Buat repositori GitHub dan *push* kode ini ke dalamnya.
2. Hubungkan repositori GitHub Anda di [Dashboard Vercel](https://vercel.com/new).
3. Vercel akan secara otomatis membangun (*build*) dan memublikasikan website Anda dengan tautan publik yang super cepat.

---
*Dibuat dengan dedikasi untuk mendukung kemajuan kuliner lokal.* 🚀
