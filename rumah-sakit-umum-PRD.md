# PRD: RSU Bunda Sehat — Rumah Sakit Umum

## 1. Brand Identity

**Nama Brand:** RSU Bunda Sehat
**Alasan Naming:** "Bunda" memberi nuansa keibuan, hangat, dan caring — sangat positif untuk industri rumah sakit yang sering associated dengan ketakutan. "Sehat" menyampaikan outcome yang dijanjikan. Sangat Indonesian, mudah diingat, dan family-friendly.

**Tagline:** *"Merawat Dengan Hati, Menyembuhkan Dengan Ilmu."*

**Target Audience:**
- Keluarga (orangtua untuk anak, anak untuk orangtua lansia)
- Pasien umum semua usia
- Patient untuk emergency & rawat inap
- Patient untuk medical check-up rutin
- Perusahaan untuk MOU MCU karyawan
- Pasien BPJS Kesehatan (segmen volume)
- Pasien asuransi swasta (segmen value)

**Brand Voice:**
- Tone: Caring, profesional, terpercaya, informative tanpa fear-mongering
- Style copywriting: Empathetic, clear medical info, family-oriented
- Avoid: Jargon medis berlebihan, bahasa scary, sales-y

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (subtle, calming)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (caring, professional medical)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Emergency Banner | `.astro` static | Top banner: IGD 24/7, hotline |
| 2 | Navbar | `.astro` static | Logo, nav, CTA "Book Appointment" |
| 3 | Hero | React island `client:load` | Warm welcome, find doctor search |
| 4 | Quick Access | React island `client:visible` | 4 CTA: book, IGD, MCU, hotline |
| 5 | Our Services | React island `client:visible` | 8 layanan utama dengan icon |
| 6 | Specialist Doctors | React island `client:visible` | Filter dokter by spesialisasi |
| 7 | Facilities | React island `client:visible` | Fasilitas rumah sakit |
| 8 | Medical Check-Up | React island `client:visible` | Paket MCU dengan pricing |
| 9 | Insurance Partners | React island `client:visible` | BPJS + asuransi swasta |
| 10 | Health Tips / Blog | React island `client:visible` | Latest health article |
| 11 | Patient Stories | React island `client:visible` | Testimonial dengan permission |
| 12 | Location & Contact | `.astro` static | Map, hotline, IGD |
| 13 | Booking CTA | React island `client:idle` | Form janji temu dokter |
| 14 | Footer | `.astro` static | Akreditasi, sertifikasi, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Emergency Banner (top)
- 🚑 **Emergency 24/7: 119 / (021) 555-1888** | IGD selalu siap | Ambulance hotline tersedia

### Navbar
- Menu: Layanan • Dokter • Fasilitas • MCU • Karir
- CTA: **Buat Janji Temu**

### Hero
- **Headline:** Kesehatan Keluarga Anda, Prioritas Kami.
- **Subheadline:** Rumah sakit umum tipe B dengan 15 spesialisasi, 250 tempat tidur, dan layanan 24/7 di Jakarta Timur. Akreditasi Paripurna KARS 2024.
- **CTA Primary:** Cari Dokter
- **CTA Secondary:** Buat Janji

Quick Search Bar: 
- Dropdown: Spesialisasi • Nama Dokter • Tanggal → **Cari**

Trust badges: "Akreditasi Paripurna KARS" • "Terdaftar BPJS Kesehatan" • "20+ Asuransi Partner" • "ISO 9001:2015"

### Quick Access
- 4 large CTA cards:
  - 🩺 **Buat Janji Temu** — Pilih dokter & jadwal online
  - 🚑 **Emergency IGD 24/7** — Hotline langsung
  - 🏥 **Medical Check-Up** — Paket sehat preventif
  - 📞 **Hubungi Customer Care** — WhatsApp 24/7

### Our Services
- **Heading:** Layanan Medis Kami
- **Subheading:** Pelayanan lengkap untuk segala usia, dari preventif sampai tindakan kompleks.

Grid 8 service cards:

**👨‍⚕️ Rawat Jalan (Poliklinik)**
- 15 spesialisasi dokter
- Buka Senin-Sabtu, 07:00-21:00
- Sistem antrian online

**🏥 Rawat Inap**
- 250 tempat tidur (Kelas 1, 2, 3, VIP, VVIP)
- 24/7 nursing care
- Single & family room

**🚑 IGD (Instalasi Gawat Darurat)**
- 24/7, no appointment needed
- Triage system (kategori merah-kuning-hijau)
- Stabilisasi & transfer ke spesialis

**🤰 Maternal & Anak**
- Klinik kandungan, bayi tabung
- USG 4D
- NICU & PICU level 3
- Lactation consultant

**❤️ Cardiac Center**
- ECG, treadmill test, ekokardiografi
- Cath lab (kateterisasi jantung)
- PCI emergency 24/7

**🔬 Laboratorium & Diagnostic**
- Lab klinik 24/7
- Radiologi: X-ray, USG, CT-Scan, MRI 1.5T
- Hasil online via app

**💉 Vaksinasi & Imunisasi**
- Vaksin anak (IDAI schedule)
- Vaksin dewasa & lansia
- Travel vaccine (yellow fever, dll)

**🏃 Medical Check-Up**
- Paket general health
- Paket eksekutif
- Pre-employment, pre-marriage
- Kustom MCU

### Specialist Doctors
- **Heading:** Tim Dokter Spesialis
- **Subheading:** 80+ dokter spesialis bersertifikat siap melayani Anda.

Filter chips (multi-select):
- Spesialisasi: Penyakit Dalam • Kandungan • Anak • Bedah Umum • Jantung • Saraf • Mata • THT • Kulit • Gigi • Jiwa • Paru • Ortopedi • Urologi • Anestesi

Sample doctors (grid 8-12 dokter):
- **dr. Andika Pramana, Sp.PD-KGEH** — Penyakit Dalam, Konsultan Gastroenterohepatologi
- **dr. Sari Wulandari, Sp.A(K)** — Spesialis Anak Konsultan
- **dr. Reza Hartono, Sp.OG** — Kandungan & Kebidanan
- **dr. Linda Wijaya, Sp.JP(K)** — Kardiologi Konsultan
- **dr. Bayu Setiawan, Sp.B** — Bedah Umum
- **dr. Maya Indriani, Sp.M** — Mata
- **dr. Daniel Kurniawan, Sp.S** — Saraf
- **dr. Nina Hartati, Sp.KK** — Kulit & Kelamin

Per card: foto, nama lengkap dengan gelar, spesialisasi, sub-spesialisasi, jadwal praktik, CTA "Buat Janji"

### Facilities
- **Heading:** Fasilitas Modern, Pelayanan Caring
- 6 facility cards:

**🛏️ Kamar Rawat Inap**
- VVIP: King-size bed, sofa keluarga, kulkas, TV 50"
- VIP: Single bed, sofa, kulkas, TV
- Kelas 1: 2 bed per kamar, AC, TV
- Kelas 2 & 3: BPJS-friendly, AC

**🔬 Modern Diagnostic Center**
- MRI 1.5T Siemens
- CT-Scan 128 slice
- USG 4D Doppler
- Mammografi & Bone Densitometry
- Endoscopy suite

**🚑 IGD Fully Equipped**
- 8 bed observasi
- 2 trauma bay
- Resuscitation room
- Helipad emergency (rooftop)

**🤰 Birth Center**
- 6 labor room
- 2 OK obstetri
- NICU 12 bed (level 3)
- Bonding suite

**❤️ Cath Lab & ICU**
- Cath lab (PCI, EP study)
- ICU 16 bed, CCU 8 bed
- HCU 12 bed
- Hemodialisis 20 unit

**🍽️ Healing Environment**
- Kantin keluarga, mushola, taman therapeutic
- Free Wi-Fi, parking 500 mobil
- Kafe & toko buku

### Medical Check-Up
- **Heading:** Paket Medical Check-Up
- **Subheading:** Deteksi dini, pencegahan terbaik. Pilih paket sesuai kebutuhan.

3 cards:

**🌱 Basic MCU — Rp 850k**
*Untuk usia < 35 tahun, rutin tahunan*
- Konsultasi dokter umum
- Cek darah lengkap, urine, fungsi liver, ginjal
- Cek gula darah, kolesterol
- EKG dasar
- Foto rontgen dada

**🌿 Premium MCU — Rp 2.5 jt** ⭐ Most Popular
*Untuk usia 35-50, eksekutif*
- Semua Basic +
- Tumor marker (CEA, AFP, PSA/CA-125)
- USG abdomen
- Treadmill test
- Konsultasi dokter penyakit dalam
- Vit D, fungsi tiroid

**🌳 Executive MCU — Rp 5.5 jt**
*Untuk usia 50+, atau dengan riwayat penyakit*
- Semua Premium +
- MRI / CT-Scan area tertentu
- Echocardiography
- Colonoscopy screening (opt-in)
- Konsultasi multi-spesialis
- Personalized health report

Spesial:
- 📋 **Pre-Employment MCU** — Mulai Rp 450k (bulk corporate available)
- 💍 **Pre-Marriage MCU** — Mulai Rp 950k untuk couple
- 👶 **Pediatric MCU** — Mulai Rp 650k

### Insurance Partners
- **Heading:** Kami Bekerjasama Dengan
- **Subheading:** BPJS Kesehatan + 20+ asuransi swasta untuk kemudahan Anda.

Logo grid:
- BPJS Kesehatan (logo besar)
- Allianz, AXA, Cigna, Mandiri Inhealth, Prudential, Sequislife, Sun Life, Manulife, Tugu Insurance, BNI Life, FWD, AIA, Generali, Astra Life, dll

**Sistem Pembayaran:**
- ✅ BPJS Kesehatan (FKTL — rujukan)
- ✅ Asuransi swasta (cashless di 20+ partner)
- ✅ Reimbursement (dokumen lengkap disediakan)
- ✅ Pembayaran mandiri (transfer, debit, credit, QRIS)

### Health Tips / Blog
- **Heading:** Tips Kesehatan
- 3 article cards:
  - "Kapan Sebaiknya Anak Pertama Kali Cek Mata?"
  - "Mengenal Gejala Awal Diabetes Tipe 2 — Jangan Diabaikan"
  - "Panduan MCU Tahunan: Apa Yang Harus Dicek Sesuai Usia?"

Per article: thumbnail, judul, by dokter [nama], read time, link

### Patient Stories
- **Heading:** Cerita Dari Pasien Kami
- 4 testimonial dengan permission (anonim/persetujuan):

> "Anak saya operasi appendicitis di RSU Bunda Sehat. Tim dokter dan perawat sabar menjelaskan, anak saya cepat pulih. Pelayanan caring."
> — **Ibu Lina, ibu pasien anak**

> "Sebagai pasien BPJS, antrian dan layanan cukup efisien. Dokter penyakit dalam saya komunikatif, tidak buru-buru."
> — **Pak Bambang, pensiunan**

> "Melahirkan anak pertama di sini, fasilitas NICU lengkap saat anak butuh perawatan ekstra. Nurse 24/7 supportive."
> — **Bu Sari, ibu baru**

> "MCU tahunan kami sekeluarga di sini sejak 3 tahun. Hasil cepat keluar, dokter explainnya bagus, follow-up jelas."
> — **Keluarga Wijaya**

### Location & Contact
- **Heading:** Lokasi & Kontak
- **Alamat:** Jl. Bunda Sehat No. 88, Jakarta Timur
- **Hotline 24/7:**
  - Emergency: 119 atau (021) 555-1888
  - Informasi: (021) 555-1999
  - WhatsApp: 0812-3456-7890
- **Jam Operasional:**
  - IGD: 24/7
  - Poliklinik: Senin-Sabtu 07:00-21:00, Minggu 08:00-15:00
  - Apotek: 24/7
  - Lab: 24/7
- Map embed + akses transportasi
- **Parking:** 500 mobil + 200 motor, gratis 2 jam pertama

### Booking CTA
- **Heading:** Buat Janji Temu Online
- **Body:** Pilih dokter, tanggal, dan jam yang sesuai. Konfirmasi dalam 1 jam kerja.
- Form: Nama, NIK/Tanggal lahir, WhatsApp, Spesialisasi (dropdown), Dokter preferensi (optional), Tanggal preferensi
- **CTA:** Buat Janji

Alternative:
- **WhatsApp Direct**
- **Telepon Customer Care**

### Footer
- Tagline: *"Merawat Indonesia, Generasi ke Generasi."*
- Akreditasi: KARS Paripurna 2024, ISO 9001:2015, ISO 14001 (environment)
- Lisensi: Kemenkes RI, Pemda DKI Jakarta
- Sosmed: IG (@rsubundasehat), Facebook, YouTube (health education)
- Quick links: Karir, Pengaduan pasien, Donasi, CSR

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/hospital-caring-family-doctor | "Dokter merawat pasien dengan caring" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/hospital%20doctor%20patient%20family/ | "Family at hospital" | 1920x1080 |
| Quick Access - Appointment | Unsplash | https://unsplash.com/s/photos/doctor-appointment-tablet | "Janji temu online" | 600x600 |
| Quick Access - Emergency | Pexels | https://www.pexels.com/search/emergency%20ambulance%20hospital/ | "Emergency 24/7" | 600x600 |
| Quick Access - MCU | Unsplash | https://unsplash.com/s/photos/medical-checkup-health | "Medical check up" | 600x600 |
| Quick Access - Hotline | Pexels | https://www.pexels.com/search/customer%20service%20phone/ | "Customer care" | 600x600 |
| Service - Rawat Jalan | Unsplash | https://unsplash.com/s/photos/clinic-consultation-doctor | "Poliklinik konsultasi" | 800x600 |
| Service - Rawat Inap | Pexels | https://www.pexels.com/search/hospital%20room%20bed%20modern/ | "Kamar rawat inap" | 800x600 |
| Service - IGD | Unsplash | https://unsplash.com/s/photos/emergency-room-medical | "IGD 24 jam" | 800x600 |
| Service - Maternal | Pexels | https://www.pexels.com/search/maternity%20hospital%20baby/ | "Maternal anak" | 800x600 |
| Service - Cardiac | Unsplash | https://unsplash.com/s/photos/heart-cardiology-doctor | "Cardiac center" | 800x600 |
| Service - Lab | Pexels | https://www.pexels.com/search/medical%20laboratory%20test/ | "Lab klinik" | 800x600 |
| Service - Vaksinasi | Unsplash | https://unsplash.com/s/photos/vaccination-child-doctor | "Vaksinasi" | 800x600 |
| Service - MCU | Pexels | https://www.pexels.com/search/health%20check%20doctor%20patient/ | "MCU service" | 800x600 |
| Doctor portraits | Pexels | https://www.pexels.com/search/asian%20doctor%20portrait/ | "Dokter portrait" | 600x800 |
| Facility - Room | Unsplash | https://unsplash.com/s/photos/luxury-hospital-room | "Kamar VVIP" | 800x600 |
| Facility - MRI | Pexels | https://www.pexels.com/search/MRI%20scanner%20medical/ | "MRI scanner" | 800x600 |
| Facility - IGD | Unsplash | https://unsplash.com/s/photos/emergency-room-trauma | "Trauma bay IGD" | 800x600 |
| Facility - NICU | Pexels | https://www.pexels.com/search/NICU%20newborn%20baby/ | "NICU bayi" | 800x600 |
| Facility - ICU | Unsplash | https://unsplash.com/s/photos/icu-intensive-care-unit | "ICU unit" | 800x600 |
| Facility - Garden | Pexels | https://www.pexels.com/search/hospital%20healing%20garden/ | "Healing garden" | 800x600 |
| MCU - Doctor | Unsplash | https://unsplash.com/s/photos/doctor-consultation-results | "MCU consultation" | 1200x800 |
| Insurance logos | (placeholder) | BPJS + insurance logos | Insurance logos | 200x100 |
| Blog thumbnails | Unsplash | https://unsplash.com/s/photos/healthy-lifestyle-medical | "Article thumbnails" | 800x600 |
| Patient stories | Pexels | https://www.pexels.com/search/recovering%20patient%20happy/ | "Pasien recovery" | 600x800 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Brand healthcare butuh tone tenang & caring — animasi harus subtle, jangan flashy. Avoid bouncy springs.

### Emergency Banner
- Subtle pulse on emergency number (slow, not aggressive)
- Phone icon: subtle scale `1 ↔ 1.05` infinite

### Hero (React island, `client:load`)
```tsx
// Hero: warm reveal with calming pace
const caringReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 }
  }
}

// Search bar: slight delay slide-in after headline
const searchBarReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, delay: 0.5 }
  }
}
```

### Quick Access (React island, `client:visible`)
- 4 large cards reveal stagger `staggerChildren: 0.1`
- Hover: card lift `y: -6`, icon scale, background color shift
- Emergency card: extra emphasis (slight pulse)

### Services Grid (React island, `client:visible`)
- 8 service cards reveal stagger
- Icon: subtle scale pop on visible
- Hover: card lift + icon color highlight, no bouncy

### Specialist Doctors (React island, `client:visible`)
- Filter chips: smooth `layoutId` indicator
- Doctor cards grid stagger reveal
- Filter change: `AnimatePresence` + `layout` smooth reflow
- Hover doctor card: image fade slightly + booking button slide-in

### Facilities (React island, `client:visible`)
- 6 facility cards reveal stagger
- Image inside card: subtle scale on hover
- Caring color palette transition

### Medical Check-Up Packages (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" emphasized
- Hover: card lift + checkmark items pulse subtle
- Special packages section: smooth fade-in

### Insurance Partners (React island, `client:visible`)
- Logo grid stagger reveal
- Marquee scroll desktop, pause on hover
- BPJS logo: slightly bigger emphasis

### Health Tips Cards (React island, `client:visible`)
- 3 article cards reveal stagger
- Hover: card lift + image subtle zoom
- "Read more" reveal on hover

### Patient Stories (React island, `client:visible`)
- Carousel auto-rotate 8s (slower untuk reading)
- Slide transition smooth & calming
- Pause on hover
- Quote mark fade-in

### Booking Form
- Multi-step form smooth transitions
- Field focus: subtle border accent (no flashy)
- Dropdown: gentle slide-in
- Submit: button with subtle loading + success state

### Scroll Reveal Pattern (reusable)
```tsx
const calmingFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Quick Access, Services, Doctors, Facilities, MCU, Insurance, Blog, Stories
- `client:idle` → Booking form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** RSU Bunda Sehat — Rumah Sakit Umum Tipe B Jakarta Timur, 15 Spesialisasi
- **Description:** Rumah sakit umum tipe B di Jakarta Timur. 15 spesialisasi, IGD 24/7, 80+ dokter spesialis. Akreditasi Paripurna KARS. BPJS & 20+ asuransi.
- **Keywords:** rumah sakit jakarta timur, RSU akreditasi paripurna, dokter spesialis jakarta, IGD 24 jam, medical check up jakarta, RS BPJS jakarta timur
- **OG Image:** Hero shot dokter dengan pasien (1200x630)
- **Schema:** `Hospital` + `MedicalOrganization` + `Physician` + `MedicalProcedure` schema
