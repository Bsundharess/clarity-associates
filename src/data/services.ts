import type { LucideIcon } from 'lucide-react';
import {
  Scale,
  Landmark,
  Home,
  Users,
  Banknote,
  FileSpreadsheet,
  ShieldAlert,
  Building2,
} from 'lucide-react';

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// Add or edit practice areas here.
export const practiceAreas: PracticeArea[] = [
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    description:
      'Representation and advisory work in civil disputes before District Courts and the High Court, including suits, injunctions, and appellate matters.',
    icon: Scale,
  },
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    description:
      'Appearance in criminal proceedings including bail applications, trial matters, and petitions before the Sessions Court and High Court.',
    icon: ShieldAlert,
  },
  {
    slug: 'property-law',
    title: 'Property Law',
    description:
      'Advisory and representation on title matters, partition suits, encumbrances, and disputes relating to immovable property.',
    icon: Home,
  },
  {
    slug: 'family-divorce',
    title: 'Family & Divorce',
    description:
      'Matters before Family Courts including matrimonial disputes, maintenance, custody, and related proceedings.',
    icon: Users,
  },
  {
    slug: 'debt-recovery-tribunal',
    title: 'Debt Recovery Tribunal',
    description:
      'Representation in proceedings before the Debt Recovery Tribunal concerning recovery matters under applicable statutes.',
    icon: Banknote,
  },
  {
    slug: 'gst-matters',
    title: 'GST Matters',
    description:
      'Advisory and representation in proceedings relating to the Goods and Services Tax before appropriate authorities and forums.',
    icon: FileSpreadsheet,
  },
  {
    slug: 'cyber-law',
    title: 'Cyber Law',
    description:
      'Matters concerning information technology law, including proceedings arising under the Information Technology Act.',
    icon: Landmark,
  },
  {
    slug: 'banking-law',
    title: 'Banking Law',
    description:
      'Advisory and representation on matters concerning banking regulation, disputes, and related statutory proceedings.',
    icon: Building2,
  },
];

export const courtsOfPractice: string[] = [
  'Madras High Court',
  'Madurai Bench of Madras High Court',
  'District Courts of Tamil Nadu',
  'High Court of Kerala',
  'Family Courts',
  'Courts in Karnataka',
];
