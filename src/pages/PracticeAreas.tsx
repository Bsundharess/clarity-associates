import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';
import { practiceAreas, courtsOfPractice } from '@/data/services';

export default function PracticeAreas() {
  return (
    <>
      <SEO
        title="Practice Areas"
        description="An overview of the practice areas of Clarity Associates, including civil litigation, criminal law, property law, family and matrimonial matters, and more."
        path="/practice-areas"
      />
      <PageHeader
        eyebrow="Practice Areas"
        title="Areas of Legal Practice"
        description="The chamber advises and appears in the following areas of law. This information is provided for reference and does not constitute a guarantee of outcome or an offer of services for a specific matter."
      />

      <section className="section-pad bg-paper">
        <div className="container-luxury grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.slug} delay={i * 0.06}>
                <div className="card-luxury p-8 h-full flex flex-col">
                  <Icon className="text-gold-dark" size={28} strokeWidth={1.5} />
                  <h2 className="mt-6 font-heading text-xl text-ink">{area.title}</h2>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
                    {area.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest2 uppercase text-gold-dark hover:text-gold transition-colors w-fit"
                  >
                    Enquire About This Matter <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-ink">
        <div className="container-luxury">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Forums of Appearance</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white">Courts of Practice</h2>
            <div className="hairline mt-6" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courtsOfPractice.map((court, i) => (
              <Reveal key={court} delay={i * 0.06}>
                <div className="p-6 border border-white/10 hover:border-gold/40 transition-colors duration-500">
                  <span className="font-sub text-lg text-white/90">{court}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
