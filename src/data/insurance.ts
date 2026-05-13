export interface InsurancePartner {
  name: string;
  featured?: boolean;
}

export const partners: InsurancePartner[] = [
  { name: 'BPJS Kesehatan', featured: true },
  { name: 'Allianz' },
  { name: 'AXA Mandiri' },
  { name: 'Cigna' },
  { name: 'Prudential' },
  { name: 'Sun Life' },
  { name: 'Manulife' },
  { name: 'AIA' },
  { name: 'FWD' },
  { name: 'Generali' },
  { name: 'BNI Life' },
  { name: 'Astra Life' },
  { name: 'Sequislife' },
  { name: 'Tugu Ins.' },
];

export const paymentMethods = [
  '✅ BPJS Kesehatan (rujukan)',
  '✅ Cashless 20+ asuransi swasta',
  '✅ Reimbursement dokumen lengkap',
  '✅ Transfer · Debit · Kredit · QRIS',
];
