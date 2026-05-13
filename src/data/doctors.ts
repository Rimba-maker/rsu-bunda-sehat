export interface Doctor {
  name: string;
  title: string;
  spec: string;
  specId: string;
  schedule: string;
  badge: string;
  photo: string;
}

export const doctors: Doctor[] = [
  {
    name: 'dr. Andika Pramana, Sp.PD-KGEH',
    title: 'Konsultan',
    spec: 'Penyakit Dalam · Gastroenterohepatologi',
    specId: 'dalam',
    schedule: 'Senin, Rabu, Jumat — 09.00–14.00',
    badge: 'Konsultan',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  {
    name: 'dr. Sari Wulandari, Sp.A(K)',
    title: 'Konsultan',
    spec: 'Spesialis Anak Konsultan',
    specId: 'anak',
    schedule: 'Selasa, Kamis — 10.00–16.00',
    badge: 'Konsultan',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    name: 'dr. Reza Hartono, Sp.OG',
    title: 'Spesialis',
    spec: 'Kandungan & Kebidanan',
    specId: 'kandungan',
    schedule: 'Senin–Sabtu — 08.00–13.00',
    badge: 'Spesialis',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
  },
  {
    name: 'dr. Linda Wijaya, Sp.JP(K)',
    title: 'Konsultan',
    spec: 'Kardiologi Konsultan',
    specId: 'jantung',
    schedule: 'Rabu, Jumat — 13.00–18.00',
    badge: 'Konsultan',
    photo: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80',
  },
  {
    name: 'dr. Bayu Setiawan, Sp.B',
    title: 'Spesialis',
    spec: 'Bedah Umum',
    specId: 'bedah',
    schedule: 'Senin, Selasa, Kamis — 14.00–19.00',
    badge: 'Spesialis',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
  },
  {
    name: 'dr. Maya Indriani, Sp.M',
    title: 'Spesialis',
    spec: 'Mata',
    specId: 'mata',
    schedule: 'Senin–Jumat — 10.00–15.00',
    badge: 'Spesialis',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80',
  },
  {
    name: 'dr. Daniel Kurniawan, Sp.S',
    title: 'Spesialis',
    spec: 'Saraf',
    specId: 'saraf',
    schedule: 'Selasa, Jumat — 09.00–14.00',
    badge: 'Spesialis',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
  },
  {
    name: 'dr. Nina Hartati, Sp.KK',
    title: 'Spesialis',
    spec: 'Kulit & Kelamin',
    specId: 'kulit',
    schedule: 'Rabu, Sabtu — 11.00–16.00',
    badge: 'Spesialis',
    photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&q=80',
  },
];

export const specializations = [
  { id: 'all',       label: 'Semua' },
  { id: 'dalam',     label: 'Penyakit Dalam' },
  { id: 'anak',      label: 'Anak' },
  { id: 'kandungan', label: 'Kandungan' },
  { id: 'jantung',   label: 'Jantung' },
  { id: 'bedah',     label: 'Bedah' },
  { id: 'saraf',     label: 'Saraf' },
  { id: 'mata',      label: 'Mata' },
  { id: 'kulit',     label: 'Kulit' },
];
