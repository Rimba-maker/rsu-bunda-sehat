export interface Service {
  name: string;
  meta: string;
  text: string;
  photo: string;
  alt: string;
}

export const services: Service[] = [
  {
    name: 'Rawat Jalan',
    meta: '15 spesialisasi',
    text: 'Poliklinik buka Senin–Sabtu 07.00–21.00. Antrean online, jadi Anda datang saat dokter siap.',
    photo: 'rawat-jalan',
    alt: 'Dokter berbincang dengan ibu dan anak di poliklinik',
  },
  {
    name: 'Rawat Inap',
    meta: '250 tempat tidur',
    text: 'Kelas 1, 2, 3, VIP dan VVIP, kamar single atau family room, dengan perawat siaga 24 jam.',
    photo: 'rawat-inap',
    alt: 'Kamar rawat inap dengan tempat tidur pasien',
  },
  {
    name: 'IGD 24 Jam',
    meta: 'Tanpa janji temu',
    text: 'Triage merah-kuning-hijau, stabilisasi cepat, dan rujukan langsung ke dokter spesialis.',
    photo: 'igd-ambulans',
    alt: 'Paramedis berdiri di depan ambulans',
  },
  {
    name: 'Maternal & Anak',
    meta: 'NICU & PICU level 3',
    text: 'Klinik kandungan dan bayi tabung, USG 4D, dan konsultan laktasi untuk ibu baru.',
    photo: 'maternal',
    alt: 'Bayi baru lahir menggenggam tangan ibunya di rumah sakit',
  },
  {
    name: 'Cardiac Center',
    meta: 'PCI emergency 24 jam',
    text: 'EKG, treadmill, ekokardiografi, dan kateterisasi jantung di cath lab kami.',
    photo: 'jantung-ekg',
    alt: 'Elektroda EKG di dada pasien',
  },
  {
    name: 'Laboratorium & Diagnostik',
    meta: 'Hasil via aplikasi',
    text: 'Lab klinik 24 jam. Radiologi: X-ray, USG, CT-Scan dan MRI 1.5T.',
    photo: 'lab',
    alt: 'Sampel darah di mesin sentrifus laboratorium',
  },
  {
    name: 'Vaksinasi & Imunisasi',
    meta: 'Jadwal IDAI',
    text: 'Vaksin anak sesuai jadwal IDAI, vaksin dewasa dan lansia, serta vaksin perjalanan seperti yellow fever.',
    photo: 'vaksin',
    alt: 'Perawat menyuntikkan vaksin ke lengan pasien',
  },
  {
    name: 'Medical Check-Up',
    meta: 'Mulai Rp 450 ribu',
    text: 'Paket general health dan eksekutif, pre-employment, pre-marriage, atau paket yang Anda susun sendiri.',
    photo: 'mcu-cek',
    alt: 'Dokter melakukan pemeriksaan pada pasien',
  },
];
