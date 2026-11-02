export const tips = [
  {
    title: 'Kapan sebaiknya anak pertama kali cek mata?',
    by: 'dr. Maya Indriani, Sp.M',
    read: '4 menit',
    photo: 'tips-mata',
    alt: 'Anak menjalani pemeriksaan penglihatan',
    href: '#',
  },
  {
    title: 'Mengenal gejala awal diabetes tipe 2, jangan diabaikan',
    by: 'dr. Andika Pramana, Sp.PD-KGEH',
    read: '6 menit',
    photo: 'tips-gula',
    alt: 'Cek gula darah dari ujung jari',
    href: '#',
  },
  {
    title: 'Panduan MCU tahunan: apa yang harus dicek sesuai usia?',
    by: 'dr. Linda Wijaya, Sp.JP(K)',
    read: '5 menit',
    photo: 'tips-mcu',
    alt: 'Dokter berbincang dengan pasien lansia tentang hasil pemeriksaan',
    href: '#',
  },
];

export interface Story {
  quote: string;
  name: string;
  role: string;
  photo: string;
  alt: string;
  pos?: string;
}

export const stories: Story[] = [
  {
    quote:
      'Anak saya operasi appendicitis di RSU Bunda Sehat. Tim dokter dan perawat sabar menjelaskan, anak saya cepat pulih. Pelayanannya benar-benar caring.',
    name: 'Ibu Lina',
    role: 'Ibu pasien anak',
    photo: 'cerita-lina',
    alt: 'Ibu dan anak tertawa bersama di tempat tidur',
    pos: '40% 50%',
  },
  {
    quote:
      'Sebagai pasien BPJS, antrean dan layanannya efisien. Dokter penyakit dalam saya komunikatif, tidak buru-buru.',
    name: 'Pak Bambang',
    role: 'Pensiunan',
    photo: 'cerita-bambang',
    alt: 'Dokter merawat pasien lansia',
    pos: '40% 40%',
  },
  {
    quote:
      'Melahirkan anak pertama di sini, fasilitas NICU-nya lengkap saat anak butuh perawatan ekstra. Perawat 24 jam sangat suportif.',
    name: 'Bu Sari',
    role: 'Ibu baru',
    photo: 'cerita-sari',
    alt: 'Ibu mencium bayinya yang baru lahir',
    pos: '35% 40%',
  },
  {
    quote:
      'MCU tahunan kami sekeluarga di sini sejak tiga tahun lalu. Hasil cepat keluar, dokternya menjelaskan dengan baik, tindak lanjutnya jelas.',
    name: 'Keluarga Wijaya',
    role: 'Pasien MCU keluarga',
    photo: 'cerita-wijaya',
    alt: 'Ibu memeluk anak-anaknya',
    pos: '50% 40%',
  },
];
