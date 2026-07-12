import { BookOpen, Lock, Scale, ScrollText } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';

const VALUES = [
  {
    icon: Scale,
    title: 'Ethics',
    description:
      'Practice is conducted in accordance with the Advocates Act, 1961 and the Rules framed by the Bar Council of India.',
  },
  {
    icon: BookOpen,
    title: 'Legal Research',
    description:
      'Matters are prepared with careful reference to statute, precedent, and procedure before every appearance.',
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description:
      'Client information and instructions are held in strict confidence at all stages of a matter.',
  },
  {
    icon: ScrollText,
    title: 'Strategic Representation',
    description:
      'Each matter is evaluated on its own facts to determine an appropriate and considered course of action.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About the Firm"
        description="Learn about Clarity Associates, a chamber of advocates practicing before the Madurai Bench of the Madras High Court and other forums in Tamil Nadu."
        path="/about"
      />
      <PageHeader
        eyebrow="About the Firm"
        title="Clarity Associates"
        description="A chamber of advocates founded on ethics, diligence, and considered legal representation."
      />

      <section className="section-pad bg-paper">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-4">Our Profile</p>
            <h2 className="font-heading text-3xl text-ink mb-6">Clarity in Law. Confidence in Justice.</h2>
            <div className="space-y-5 text-stone-600 leading-relaxed">
              <p>
                Clarity Associates is a chamber of advocates based in Madurai, Tamil Nadu,
                with appearances before the Madurai Bench of the Madras High Court, the
                Madras High Court, District Courts of Tamil Nadu, the High Court of
                Kerala, Family Courts, and courts in Karnataka.
              </p>
              <p>
                The chamber's practice spans civil litigation, criminal law, property
                law, family and matrimonial matters, proceedings before the Debt
                Recovery Tribunal, matters relating to the Goods and Services Tax,
                and cyber law.
              </p>
              <p>
                This website is intended to provide factual, informational content
                about the chamber in accordance with the Rules of the Bar Council of
                India concerning advocate websites. It is not intended to advertise
                or solicit legal work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="aspect-[4/5] w-full bg-ink relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop"
                alt="Interior of a courthouse corridor with classical columns"
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 border border-gold/20 m-4" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ink">
        <div className="container-luxury">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Guiding Principles</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white">
              What We Stand For
            </h2>
            <div className="hairline mt-6" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                  <h3 className="mt-5 font-heading text-lg text-white">{value.title}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{value.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
