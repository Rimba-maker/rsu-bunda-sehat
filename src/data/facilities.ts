export interface Facility {
  id: string;
  name: string;
  lines: string[];
  photo: string;
  alt: string;
  pos?: string;
}

export const facilities: Facility[] = [
  {
    id: 'kamar',
    name: 'Kamar rawat inap',
    lines: [
      'VVIP: tempat tidur king-size, sofa keluarga, kulkas, TV 50"',
      'VIP: single bed, sofa, kulkas, TV',
      'Kelas 1: 2 tempat tidur per kamar, AC, TV',
      'Kelas 2 & 3: ramah BPJS, ber-AC',
    ],
    photo: 'kamar-vip',
    alt: 'Kamar rawat inap terang dengan jendela besar',
    pos: '50% 60%',
  },
  {
    id: 'diagnostik',
    name: 'Modern diagnostic center',
    lines: ['MRI 1.5T Siemens', 'CT-Scan 128 slice', 'USG 4D Doppler', 'Mammografi & bone densitometry', 'Endoscopy suite'],
    photo: 'radiologi-mri',
    alt: 'Pasien menjalani pemeriksaan MRI',
    pos: '50% 40%',
  },
  {
    id: 'igd',
    name: 'IGD fully equipped',
    lines: ['8 bed observasi', '2 trauma bay', 'Resuscitation room', 'Helipad emergency di rooftop'],
    photo: 'igd-paramedis',
    alt: 'Paramedis mendorong brankar menuju IGD',
    pos: '50% 35%',
  },
  {
    id: 'birth',
    name: 'Birth center',
    lines: ['6 labor room', '2 kamar operasi obstetri', 'NICU 12 bed (level 3)', 'Bonding suite'],
    photo: 'nicu',
    alt: 'Bayi di dalam inkubator NICU',
    pos: '50% 50%',
  },
  {
    id: 'cathlab',
    name: 'Cath lab & ICU',
    lines: ['Cath lab untuk PCI dan EP study', 'ICU 16 bed, CCU 8 bed', 'HCU 12 bed', 'Hemodialisis 20 unit'],
    photo: 'icu-monitor',
    alt: 'Monitor tanda vital di ruang ICU',
    pos: '50% 40%',
  },
  {
    id: 'taman',
    name: 'Healing environment',
    lines: [
      'Kantin keluarga, mushola, taman terapeutik',
      'Wi-Fi gratis, parkir 500 mobil',
      'Kafe dan toko buku',
    ],
    photo: 'taman',
    alt: 'Tiga ibu lansia berjalan di taman yang teduh',
    pos: '50% 50%',
  },
];
