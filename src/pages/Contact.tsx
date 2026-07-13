import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';
import { siteConfig } from '@/data/site';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact details for Clarity Associates, No. 4, Keela Ratha Veethi, Thiruparankundram, Madurai – 625005."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Reach Our Office"
        description="For queries, please reach the chamber using the details below."
      />

      <section className="section-pad bg-paper">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16">

          <Reveal>
            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gold/30">
                  <MapPin className="text-gold-dark" size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">
                    Address
                  </p>

                  <p className="text-ink leading-relaxed">
                    No. 4
                    <br />
                    Keela Ratha Veethi
                    <br />
                    Thiruparankundram
                    <br />
                    Madurai – 625005
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gold/30">
                  <Phone className="text-gold-dark" size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">
                    Phone
                  </p>

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-ink hover:text-gold-dark transition-colors block"
                  >
                    {siteConfig.phone}
                  </a>

                  <p className="text-xs uppercase tracking-wide text-stone-500 mt-3 mb-1">
                    Alternative Contact
                  </p>

                  <a
                    href={`tel:${siteConfig.phoneAlt.replace(/\s/g, '')}`}
                    className="text-ink hover:text-gold-dark transition-colors"
                  >
                    {siteConfig.phoneAlt}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gold/30">
                  <Mail className="text-gold-dark" size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-500 mb-1">
                    Email
                  </p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-ink hover:text-gold-dark transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-ink p-10 sm:p-12 text-center">

              <MessageCircle
                className="mx-auto text-gold mb-6"
                size={32}
                strokeWidth={1.5}
              />

              <h2 className="font-heading text-2xl text-white mb-3">
                Request Consultation
              </h2>

              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                To initiate a conversation regarding a consultation,
                you may write to the chamber over WhatsApp.
              </p>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                Request Consultation
              </a>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs uppercase tracking-wide text-white/40 mb-2">
                  Alternative Contact
                </p>

                <p className="font-sub text-lg text-white/90">
                  Adv. B. Viveghaa Shri
                </p>

                <a
                  href={`tel:${siteConfig.phoneAlt.replace(/\s/g, '')}`}
                  className="text-gold-light hover:text-gold transition-colors"
                >
                  {siteConfig.phoneAlt}
                </a>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      <Reveal className="w-full h-[420px] border-y border-ink/10">
        <iframe
          title="Clarity Associates office location on Google Maps"
          src={siteConfig.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  );
}
