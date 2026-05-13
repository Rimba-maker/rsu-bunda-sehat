export interface McuPackage {
  icon: string;
  name: string;
  price: string;
  target: string;
  items: string[];
  popular?: boolean;
}

export interface McuSpecial {
  icon: string;
  name: string;
  price: string;
}

export const mcuPackages: McuPackage[] = [
  {
    icon: '🌱',
    name: 'Basic MCU',
    price: 'Rp 850.000',
    target: 'Untuk usia <35 tahun, rutin tahunan',
    items: [
      'Konsultasi dokter umum',
      'Cek darah lengkap & urine',
      'Fungsi liver & ginjal',
      'Gula darah & kolesterol',
      'EKG dasar',
      'Foto rontgen dada',
    ],
  },
  {
    icon: '🌿',
    name: 'Premium MCU',
    price: 'Rp 2.500.000',
    target: 'Untuk usia 35–50, eksekutif',
    popular: true,
    items: [
      'Semua item Basic MCU',
      'Tumor marker (CEA, AFP, PSA/CA-125)',
      'USG abdomen',
      'Treadmill test',
      'Konsultasi penyakit dalam',
      'Vitamin D & fungsi tiroid',
    ],
  },
  {
    icon: '🌳',
    name: 'Executive MCU',
    price: 'Rp 5.500.000',
    target: 'Untuk usia 50+ atau riwayat penyakit',
    items: [
      'Semua item Premium MCU',
      'MRI / CT-Scan area tertentu',
      'Echocardiography',
      'Colonoscopy screening (opt-in)',
      'Konsultasi multi-spesialis',
      'Personalized health report',
    ],
  },
];

export const mcuSpecials: McuSpecial[] = [
  {
    icon: '📋',
    name: 'Pre-Employment MCU',
    price: 'Mulai Rp 450.000 · Bulk corporate tersedia',
  },
  {
    icon: '💍',
    name: 'Pre-Marriage MCU',
    price: 'Mulai Rp 950.000 untuk pasangan',
  },
  {
    icon: '👶',
    name: 'Pediatric MCU',
    price: 'Mulai Rp 650.000 untuk anak',
  },
];
