export interface Specialty {
  id: string;
  label: string;
}

/** 15 spesialisasi sesuai PRD. */
export const specialties: Specialty[] = [
  { id: 'dalam', label: 'Penyakit Dalam' },
  { id: 'kandungan', label: 'Kandungan' },
  { id: 'anak', label: 'Anak' },
  { id: 'bedah', label: 'Bedah Umum' },
  { id: 'jantung', label: 'Jantung' },
  { id: 'saraf', label: 'Saraf' },
  { id: 'mata', label: 'Mata' },
  { id: 'tht', label: 'THT' },
  { id: 'kulit', label: 'Kulit' },
  { id: 'gigi', label: 'Gigi' },
  { id: 'jiwa', label: 'Jiwa' },
  { id: 'paru', label: 'Paru' },
  { id: 'ortopedi', label: 'Ortopedi' },
  { id: 'urologi', label: 'Urologi' },
  { id: 'anestesi', label: 'Anestesi' },
];

export interface Doctor {
  name: string;
  spec: string;
  specId: string;
  sub: string;
  /** 0 = Minggu … 6 = Sabtu */
  days: number[];
  hours: string;
  photo: string;
  /** object-position for the 3:4 arch crop */
  pos?: string;
  alt: string;
}

export const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export const doctors: Doctor[] = [
  {
    name: 'dr. Andika Pramana, Sp.PD-KGEH',
    spec: 'Penyakit Dalam',
    specId: 'dalam',
    sub: 'Konsultan Gastroenterohepatologi',
    days: [1, 3, 5],
    hours: '09.00–14.00',
    photo: 'dr-andika',
    pos: '50% 30%',
    alt: 'dr. Andika Pramana, spesialis penyakit dalam',
  },
  {
    name: 'dr. Sari Wulandari, Sp.A(K)',
    spec: 'Anak',
    specId: 'anak',
    sub: 'Spesialis Anak Konsultan',
    days: [2, 4],
    hours: '10.00–16.00',
    photo: 'dr-sari',
    pos: '50% 20%',
    alt: 'dr. Sari Wulandari, spesialis anak',
  },
  {
    name: 'dr. Reza Hartono, Sp.OG',
    spec: 'Kandungan',
    specId: 'kandungan',
    sub: 'Kandungan & Kebidanan',
    days: [1, 2, 3, 4, 5, 6],
    hours: '08.00–13.00',
    photo: 'dr-reza',
    pos: '50% 20%',
    alt: 'dr. Reza Hartono, spesialis kandungan',
  },
  {
    name: 'dr. Linda Wijaya, Sp.JP(K)',
    spec: 'Jantung',
    specId: 'jantung',
    sub: 'Kardiologi Konsultan',
    days: [3, 5],
    hours: '13.00–18.00',
    photo: 'dr-linda',
    pos: '78% 30%',
    alt: 'dr. Linda Wijaya, kardiolog',
  },
  {
    name: 'dr. Bayu Setiawan, Sp.B',
    spec: 'Bedah Umum',
    specId: 'bedah',
    sub: 'Bedah Umum',
    days: [1, 2, 4],
    hours: '14.00–19.00',
    photo: 'dr-bayu',
    pos: '50% 20%',
    alt: 'dr. Bayu Setiawan, spesialis bedah',
  },
  {
    name: 'dr. Maya Indriani, Sp.M',
    spec: 'Mata',
    specId: 'mata',
    sub: 'Spesialis Mata',
    days: [1, 3, 6],
    hours: '09.00–15.00',
    photo: 'dr-maya',
    pos: '50% 25%',
    alt: 'dr. Maya Indriani, spesialis mata',
  },
  {
    name: 'dr. Daniel Kurniawan, Sp.S',
    spec: 'Saraf',
    specId: 'saraf',
    sub: 'Spesialis Saraf',
    days: [2, 4, 5],
    hours: '15.00–20.00',
    photo: 'dr-daniel',
    pos: '50% 15%',
    alt: 'dr. Daniel Kurniawan, spesialis saraf',
  },
  {
    name: 'dr. Nina Hartati, Sp.KK',
    spec: 'Kulit',
    specId: 'kulit',
    sub: 'Kulit & Kelamin',
    days: [1, 2, 3, 4, 5],
    hours: '10.00–17.00',
    photo: 'dr-nina',
    pos: '50% 25%',
    alt: 'dr. Nina Hartati, spesialis kulit dan kelamin',
  },
];

export const scheduleLabel = (d: Doctor) => {
  const days = [...d.days];
  const consecutive = days.every((v, i) => i === 0 || v === days[i - 1] + 1);
  const label =
    days.length >= 3 && consecutive
      ? `${dayNames[days[0]]}–${dayNames[days[days.length - 1]]}`
      : days.map((n) => dayNames[n]).join(', ');
  return `${label} · ${d.hours}`;
};
