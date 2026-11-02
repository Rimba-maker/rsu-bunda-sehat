export interface McuPlan {
  id: 'basic' | 'premium' | 'executive';
  name: string;
  who: string;
  age: [number, number];
  price: string;
  priceNote: string;
  includes: string;
  popular?: boolean;
}

export const mcuPlans: McuPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    who: 'Untuk usia di bawah 35 tahun, rutin tahunan.',
    age: [0, 34],
    price: 'Rp 850 rb',
    priceNote: 'per orang',
    includes:
      'Konsultasi dokter umum, cek darah lengkap, urine, fungsi liver dan ginjal, gula darah, kolesterol, EKG dasar, dan foto rontgen dada.',
  },
  {
    id: 'premium',
    name: 'Premium',
    who: 'Untuk usia 35–50 tahun dan eksekutif. Paket paling banyak dipilih.',
    age: [35, 50],
    price: 'Rp 2,5 jt',
    priceNote: 'per orang',
    popular: true,
    includes:
      'Semua isi Basic, ditambah tumor marker (CEA, AFP, PSA atau CA-125), USG abdomen, treadmill test, vitamin D, fungsi tiroid, dan konsultasi dokter penyakit dalam.',
  },
  {
    id: 'executive',
    name: 'Executive',
    who: 'Untuk usia 50 tahun ke atas, atau dengan riwayat penyakit.',
    age: [51, 120],
    price: 'Rp 5,5 jt',
    priceNote: 'per orang',
    includes:
      'Semua isi Premium, ditambah MRI atau CT-Scan area tertentu, ekokardiografi, skrining kolonoskopi (opsional), konsultasi multi-spesialis, dan laporan kesehatan personal.',
  },
];

export const mcuSpecials = [
  { name: 'Pre-Employment MCU', price: 'Mulai Rp 450 rb', note: 'Tersedia harga khusus untuk perusahaan (bulk).' },
  { name: 'Pre-Marriage MCU', price: 'Mulai Rp 950 rb', note: 'Untuk pasangan, satu paket.' },
  { name: 'Pediatric MCU', price: 'Mulai Rp 650 rb', note: 'Tumbuh kembang dan imunisasi anak.' },
];
