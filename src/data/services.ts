export interface Service {
  icon: string;
  name: string;
  meta: string;
  photo: string;
}

export const services: Service[] = [
  {
    icon: '👨‍⚕️',
    name: 'Rawat Jalan (Poliklinik)',
    meta: '15 spesialisasi · Senin–Sabtu 07.00–21.00 · Antrian online',
    photo: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  },
  {
    icon: '🏥',
    name: 'Rawat Inap',
    meta: '250 tempat tidur · Kelas 1–3, VIP, VVIP · Nursing 24/7',
    photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  },
  {
    icon: '🚑',
    name: 'IGD 24/7',
    meta: 'Triage merah–kuning–hijau · Tanpa antrian · Transfer spesialis',
    photo: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80',
  },
  {
    icon: '🤰',
    name: 'Maternal & Anak',
    meta: 'USG 4D · NICU & PICU level 3 · Laktasi konsultan',
    photo: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
  },
  {
    icon: '❤️',
    name: 'Cardiac Center',
    meta: 'Cath lab · PCI emergency 24/7 · Ekokardiografi · Treadmill test',
    photo: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  },
  {
    icon: '🔬',
    name: 'Lab & Diagnostik',
    meta: 'Lab 24/7 · MRI 1.5T · CT-Scan · USG · Hasil online via app',
    photo: 'https://images.unsplash.com/photo-1578496480157-697fc14d2e55?w=600&q=80',
  },
  {
    icon: '💉',
    name: 'Vaksinasi & Imunisasi',
    meta: 'Vaksin anak (IDAI) · Dewasa & lansia · Travel vaccine',
    photo: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
  },
  {
    icon: '🏃',
    name: 'Medical Check-Up',
    meta: 'General · Eksekutif · Pre-employment · Pre-marriage · Pediatrik',
    photo: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&q=80',
  },
];
