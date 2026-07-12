import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-luxury px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="font-heading text-2xl text-white tracking-widest2">CA</span>
          <p className="mt-4 font-sub text-lg italic text-gold/90 leading-snug">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/50">
            This website is for informational purposes only and does not constitute
            advertising or solicitation.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Practice Areas</Link></li>
            <li><Link to="/representative-matters" className="hover:text-gold transition-colors">Representative Matters</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Team</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Chamber</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold mb-5">Reach Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{siteConfig.chamber}, {siteConfig.building}, {siteConfig.city} - {siteConfig.pincode}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors break-all">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>&copy; {year} Clarity Associates. All rights reserved.</p>
        <p>Advocates enrolled with the Bar Council of Tamil Nadu &amp; Puducherry.</p>
      </div>
    </footer>
  );
}
