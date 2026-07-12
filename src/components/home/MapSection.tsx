import { MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import Reveal from '@/components/shared/Reveal';

export default function MapSection() {
  return (
    <section className="bg-paper">
      <div className="container-luxury px-6 sm:px-10 lg:px-20 py-20 md:py-28">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Locate Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-ink">Chamber Location</h2>
          <div className="hairline mt-6" />
        </Reveal>
      </div>
      <Reveal className="w-full h-[420px] border-y border-ink/10">
        <iframe
          title="Clarity Associates chamber location on Google Maps"
          src={siteConfig.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
      <div className="container-luxury px-6 sm:px-10 lg:px-20 py-10 flex items-center gap-3">
        <MapPin className="text-gold-dark" size={20} />
        <p className="text-sm text-stone-600">
          {siteConfig.chamber}, {siteConfig.building}, {siteConfig.city} - {siteConfig.pincode}
        </p>
      </div>
    </section>
  );
}
