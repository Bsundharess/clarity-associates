import { Landmark } from 'lucide-react';
import { courtsOfPractice } from '@/data/services';
import Reveal from '@/components/shared/Reveal';

export default function CourtsSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-luxury">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Courts of Practice</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-ink">Forums of Appearance</h2>
          <div className="hairline mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courtsOfPractice.map((court, i) => (
            <Reveal key={court} delay={i * 0.06}>
              <div className="flex items-center gap-4 p-6 border border-ink/10 bg-white hover:border-gold/50 transition-colors duration-500">
                <Landmark className="text-gold-dark shrink-0" size={22} strokeWidth={1.5} />
                <span className="font-sub text-lg text-ink">{court}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
