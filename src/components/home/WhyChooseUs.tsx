import { BookOpen, Lock, ScrollText, Compass } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';

const POINTS = [
  {
    icon: BookOpen,
    title: 'Diligent Research',
    description:
      'Matters are approached with thorough legal research grounded in statute and precedent.',
  },
  {
    icon: Lock,
    title: 'Client Confidentiality',
    description:
      'Information shared in the course of representation is treated with strict confidentiality.',
  },
  {
    icon: ScrollText,
    title: 'Procedural Rigour',
    description:
      'Careful attention is paid to procedure and documentation at every stage of a matter.',
  },
  {
    icon: Compass,
    title: 'Considered Strategy',
    description:
      'Each matter is assessed on its own facts to determine an appropriate course of action.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-luxury">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Our Approach</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-white">
            Principles That Guide Our Practice
          </h2>
          <div className="hairline mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 0.08}>
                <Icon className="text-gold" size={26} strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-lg text-white">{point.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{point.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
