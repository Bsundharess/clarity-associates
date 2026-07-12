import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { practiceAreas } from '@/data/services';
import Reveal from '@/components/shared/Reveal';

export default function PracticeAreasSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-luxury">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Areas of Practice</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-ink">
            Counsel Across Key Areas of Law
          </h2>
          <div className="hairline mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.slug} delay={i * 0.06}>
                <Link
                  to="/practice-areas"
                  className="group block h-full bg-paper p-8 hover:bg-ink transition-colors duration-500 ease-luxury"
                >
                  <Icon className="text-gold-dark group-hover:text-gold transition-colors duration-500" size={28} strokeWidth={1.5} />
                  <h3 className="mt-6 font-heading text-lg text-ink group-hover:text-white transition-colors duration-500">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                    {area.description}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="mt-6 text-gold-dark group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
