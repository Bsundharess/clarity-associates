export interface CaseMatter {
  id: string;
  title: string;
  date: string; // ISO format YYYY-MM-DD
  displayDate: string;
  role: string;
  court: string;
  judgmentUrl?: string;
}

// Add new representative matters here. Include only factual, verifiable information.
// Do not describe outcomes or results.
export const cases: CaseMatter[] = [
  {
    id: 'case-001',
    title: 'Raja Murugan vs Superintendent Of Police',
    date: '2024-02-20',
    displayDate: '20 February 2024',
    role: 'Counsel for the Petitioner',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
  {
    id: 'case-002',
    title: 'Justus Rejo Velan vs Collector',
    date: '2024-11-25',
    displayDate: '25 November 2024',
    role: 'Counsel for the Petitioner',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
  {
    id: 'case-003',
    title: 'Mosa Pithelis Vibin vs State of Tamil Nadu',
    date: '2025-10-15',
    displayDate: '15 October 2025',
    role: 'Counsel for the Petitioner',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
  {
    id: 'case-004',
    title: 'Mohammed Ali Jinnah vs District Collector',
    date: '2026-02-04',
    displayDate: '4 February 2026',
    role: 'Counsel for the Petitioner',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
  {
    id: 'case-005',
    title: 'M. Balasubramanian vs District Collector',
    date: '2026-03-30',
    displayDate: '30 March 2026',
    role: 'Counsel for the Petitioner',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
  {
    id: 'case-006',
    title: 'S. Selvi vs State of Tamil Nadu',
    date: '2026-04-10',
    displayDate: '10 April 2026',
    role: 'Counsel for the Intervener',
    court: 'Madurai Bench of Madras High Court',
    judgmentUrl: 'https://www.mhc.tn.gov.in/judis/',
  },
];
