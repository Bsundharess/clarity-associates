export const siteConfig = {
  name: 'Clarity Associates',
  tagline: 'Clarity in Law. Confidence in Justice.',
  chamber: 'Chamber No. 58',
  building: 'High Court Building, Madurai Bench of Madras High Court',
  city: 'Madurai',
  pincode: '625023',
  phone: '+91 93841 83941',
  phoneAlt: '+91 86086 63878',
  email: 'clarityassociatess@gmail.com',
  whatsappUrl:
    'https://wa.me/919384183941?text=Hello%20Advocate,%20I%20would%20like%20to%20request%20a%20consultation.',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=9.881948471069336,78.07235717773438&z=17&hl=en&output=embed',
  mapsUrl:
    'https://www.google.com/maps?q=9.881948471069336,78.07235717773438&z=17&hl=en',
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is the purpose of this website?',
    answer:
      'This website is intended solely to provide factual information about Clarity Associates, including the practice areas and courts before which the advocates appear. It is not intended for advertising or solicitation.',
  },
  {
    question: 'Does browsing this website create an advocate-client relationship?',
    answer:
      'No. Viewing or browsing this website does not create an advocate-client relationship. Such a relationship is established only after direct consultation and formal engagement.',
  },
  {
    question: 'Is the information on this website legal advice?',
    answer:
      'No. The information provided on this website is general in nature and should not be construed as legal advice. For advice concerning a specific matter, please contact the chamber directly.',
  },
  {
    question: 'How can I get in touch with the chamber?',
    answer:
      'You may reach the chamber using the contact details on the Contact page, or use the Request Consultation option to initiate a conversation over WhatsApp.',
  },
  {
    question: 'Which courts does the chamber appear before?',
    answer:
      'The advocates at Clarity Associates appear before the Madras High Court, the Madurai Bench of the Madras High Court, District Courts of Tamil Nadu, the High Court of Kerala, Family Courts, and courts in Karnataka.',
  },
];

export const statistics = [
  { label: 'Year Chamber Established', value: 2022, suffix: '' },
  { label: 'Practice Areas', value: 8, suffix: '' },
  { label: 'Courts of Practice', value: 6, suffix: '' },
  { label: 'Languages Spoken', value: 2, suffix: '' },
];
