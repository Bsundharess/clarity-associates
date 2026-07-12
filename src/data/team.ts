export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  enrollment?: string;
  barCouncil?: string;
  experience?: string;
  languages?: string[];
  courts: string[];
  practiceAreas?: string[];
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'vishnu-kanth',
    name: 'Adv. Vishnu Kanth S',
    designation: 'Advocate',
    qualification: 'B.Com., LL.B.',
    enrollment: 'Ms.7906/2022',
    barCouncil: 'Bar Council of Tamil Nadu & Puducherry',
    experience: 'Practicing since 2022',
    languages: ['English', 'Tamil'],
    courts: [
      'Madras High Court',
      'Madurai Bench of Madras High Court',
      'District Courts of Tamil Nadu',
      'High Court of Kerala',
      'Family Courts',
      'Courts in Karnataka',
    ],
    practiceAreas: [
      'Civil Litigation',
      'Criminal Law',
      'Property Law',
      'Family & Divorce',
      'Debt Recovery Tribunal',
      'GST Matters',
      'Cyber Law',
    ],
    photo: '/images/team/vishnu-kanth.png',
  },
  {
    id: 'viveghaa-shri',
    name: 'Adv. B. Viveghaa Shri',
    designation: 'Advocate',
    qualification: 'B.B.A., LL.B., LL.M.',
    barCouncil: 'Madurai Bench of Madras High Court',
    courts: ['Madurai Bench of Madras High Court'],
    photo: '/images/team/viveghaa-shri.png',
  },
];
