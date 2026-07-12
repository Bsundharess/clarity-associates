import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request a consultation on WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-ink text-white px-5 py-3.5 shadow-chamber border border-gold/40 hover:border-gold transition-all duration-500 ease-luxury group"
    >
      <MessageCircle size={18} className="text-gold" />
      <span className="hidden sm:inline text-xs tracking-widest2 uppercase font-body">
        Request Consultation
      </span>
    </a>
  );
}
