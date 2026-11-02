export const site = {
  name: 'RSU Bunda Sehat',
  tagline: 'Merawat dengan hati, menyembuhkan dengan ilmu.',
  footerTagline: 'Merawat Indonesia, generasi ke generasi.',
  address: 'Jl. Bunda Sehat No. 88, Jakarta Timur',
  emergencyShort: '119',
  emergency: '(021) 555-1888',
  info: '(021) 555-1999',
  whatsapp: '0812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  instagram: '@rsubundasehat',
  hours: [
    { label: 'IGD', value: '24 jam, setiap hari' },
    { label: 'Poliklinik', value: 'Senin–Sabtu 07.00–21.00 · Minggu 08.00–15.00' },
    { label: 'Apotek', value: '24 jam' },
    { label: 'Laboratorium', value: '24 jam' },
  ],
  nav: [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Dokter', href: '#dokter' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'MCU', href: '#mcu' },
    { label: 'Karir', href: '#kontak' },
  ],
  trust: ['Akreditasi Paripurna KARS 2024', 'Terdaftar BPJS Kesehatan', '20+ asuransi partner', 'ISO 9001:2015'],
};

/** Poliklinik opening hours by weekday (0 = Sunday), minutes from midnight, Asia/Jakarta. */
export const poliHours: Record<number, [number, number]> = {
  0: [8 * 60, 15 * 60],
  1: [7 * 60, 21 * 60],
  2: [7 * 60, 21 * 60],
  3: [7 * 60, 21 * 60],
  4: [7 * 60, 21 * 60],
  5: [7 * 60, 21 * 60],
  6: [7 * 60, 21 * 60],
};
