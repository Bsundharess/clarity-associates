import CountUp from 'react-countup';
import { statistics } from '@/data/site';
import Reveal from '@/components/shared/Reveal';

export default function StatsSection() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-luxury px-6 sm:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {statistics.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center">
            <div className="font-heading text-3xl sm:text-4xl md:text-5xl text-gold">
              <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </div>
            <p className="mt-3 text-white/60 text-xs sm:text-sm tracking-wide uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
