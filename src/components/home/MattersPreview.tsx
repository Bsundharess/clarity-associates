import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FileText, ExternalLink } from 'lucide-react';
import { cases } from '@/data/cases';
import Reveal from '@/components/shared/Reveal';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MattersPreview() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-luxury">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Representative Matters</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white">
              A Record of Appearances
            </h2>
          </div>
          <Link to="/representative-matters" className="btn-outline w-fit">
            View All Matters
          </Link>
        </Reveal>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.4 },
          }}
          className="matters-swiper"
        >
          {cases.map((c) => (
            <SwiperSlide key={c.id}>
              <div className="card-luxury bg-white/[0.03] border-white/10 hover:border-gold/50 p-8 h-full flex flex-col">
                <FileText className="text-gold" size={22} strokeWidth={1.5} />
                <h3 className="mt-5 font-heading text-lg text-white leading-snug">{c.title}</h3>
                <p className="mt-3 text-xs text-white/40 tracking-wide uppercase">{c.displayDate}</p>
                <p className="mt-2 text-sm text-gold-light/90">{c.role}</p>
                <p className="mt-1 text-xs text-white/40">{c.court}</p>
                {c.judgmentUrl && (
                  <a
                    href={c.judgmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest2 uppercase text-gold hover:text-gold-light transition-colors"
                  >
                    Read Public Judgment <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
