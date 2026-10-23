# Sumbar Hangout Circle — Website Portofolio (Clean Editorial Luxury Nature Edition)

Website resmi **Sumbar Hangout Circle (SHC)** dengan desain berkelas, minimalis, dan estetik (**Clean Editorial Luxury Nature**):
- **Desain Modern & Tidak Pasaran**: Mengusung konsep modern editorial youth social club (gaya estetika Apple & Kinfolk outdoor lifestyle) dengan dominasi warna dark velvet forest (`#070b08`), aksen fresh sage lime (`#84cc16`), dan frosted glassmorphism lembut tanpa elemen cyber yang norak.
- **Kartu Profil Staff (8 Slot Resmi)**: Desain kartu potret bersih dengan pill peran minimalis, tipografi Outfit tebal elegan, dan tautan langsung ke Instagram pribadi masing-masing staff.
- **Pilar Komunitas**: Bagian tentang komunitas yang menjelaskan keunggulan healing trip, kopdar cafe santai, dan keterbukaan bagi solo traveler.
- **Galeri Foto & Video Dokumentasi**: Dokumentasi asli kegiatan trip komunitas (misal: Air Terjun Lubuk Hitam, Teluk Kabung, Padang) dengan filter instan (Semua, Foto, Video) dan lightbox interaktif untuk memperbesar foto.
- **Playlist Musik Latar**: 2 lagu (*Shape of My Heart* & *The One That Got Away* Slowed + Reverb) dengan widget pemutar musik mengambang bergaya Spotify/Apple Music lengkap dengan tombol Prev, Play/Pause, Next, Mute, dan Minimize.
- **Akses Langsung Komunitas**: Tombol satu klik gabung Grup WhatsApp resmi dan Follow akun resmi Instagram (@sumbarhangoutcircle).

---

## 🛠️ Kontrol Penuh Lewat Kode di `assets/js/main.js`

Buka file [**`assets/js/main.js`**](file:///c:/Users/User/OneDrive/Desktop/Website%20Portofolio/assets/js/main.js) untuk mengatur data:

### 1. 🔗 Link WhatsApp & Instagram Resmi
```javascript
const LINK_GRUP_WHATSAPP = 'https://chat.whatsapp.com/JS7HIwFJaKlJtNHr6Rrsi1';
const LINK_INSTAGRAM_RESMI = 'https://www.instagram.com/sumbarhangoutcircle/';
```

### 2. 👥 Mengatur 8 Slot Staff
```javascript
const DAFTAR_STAFF = [
  { id: 1, name: 'Ronal Dahlan Putra', role: 'Founder & Ketua Komunitas', ... },
  { id: 2, name: 'Gilang Ramadhan', role: 'Co-Founder & Koordinator Trip', ... },
  { id: 3, name: 'Fauzan Akbar', role: 'Head Dokumentasi & Drone', ... },
  { id: 4, name: 'Pia', role: 'Admin & Humas Komunitas', ... },
  { id: 5, name: 'Okta', role: 'Divisi Logistik & Alat Camp', ... },
  { id: 6, name: 'Desi', role: 'Lead Photographer & Editor', ... },
  { id: 7, name: 'Jenzz', role: 'Tour Leader & Field Guide', ... },
  { id: 8, name: 'Mannz', role: 'Social Media & Creative Content', ... }
];
```

### 3. 📸 🎥 Menambahkan Foto & Video ke Galeri
Cari `DAFTAR_MEDIA` di [**`assets/js/main.js`**](file:///c:/Users/User/OneDrive/Desktop/Website%20Portofolio/assets/js/main.js):
```javascript
// Menambahkan foto:
{
  id: 1,
  type: 'image',
  category: 'Trip Air Terjun',
  url: 'assets/images/gallery/trip-air-terjun-1.jpg',
  title: 'Eksplorasi & Healing Air Terjun Lubuk Hitam',
  location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
},

// Menambahkan video:
{
  id: 5,
  type: 'video',
  category: 'First Meet SHC',
  url: 'assets/videos/first-meet-lubuk-hitam.mp4',
  poster: 'assets/images/gallery/cover-first-meet.jpg',
  tiktokUrl: 'https://www.tiktok.com/@sumbarhongoutcircl/video/7698264158340418836',
  title: 'First Meet Acara Komunitas di Air Terjun Lubuk Hitam',
  location: 'Air Terjun Lubuk Hitam, Teluk Kabung, Padang'
}
```

---

## 🚀 Cara Melihat Website
Cukup buka file [**`index.html`**](file:///c:/Users/User/OneDrive/Desktop/Website%20Portofolio/index.html) di browser Anda!
