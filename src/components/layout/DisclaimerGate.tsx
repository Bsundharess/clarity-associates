import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale } from 'lucide-react';

const STORAGE_KEY = 'ca_disclaimer_ack_v1';

export default function DisclaimerGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const acknowledged = window.sessionStorage.getItem(STORAGE_KEY);
      if (!acknowledged) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* storage unavailable; proceed regardless */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-ink/98 backdrop-blur-sm flex items-center justify-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="max-w-xl w-full border border-gold/30 bg-ink px-8 py-10 sm:px-12 sm:py-14 text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
              <Scale className="text-gold" size={24} />
            </div>
            <h1 id="disclaimer-title" className="font-heading text-xl sm:text-2xl text-white tracking-wide mb-2">
              Clarity Associates
            </h1>
            <div className="hairline mx-auto my-5" />
            <p className="font-sub text-lg text-white/80 leading-relaxed mb-4">
              As per the Rules of the Bar Council of India, advocates are not permitted
              to solicit work or advertise. This website is intended solely for
              informational purposes.
            </p>
            <ul className="text-left text-sm text-white/60 space-y-2 mb-8 mx-auto max-w-md leading-relaxed">
              <li>Viewing this website does not create an advocate-client relationship.</li>
              <li>The information provided should not be construed as legal advice.</li>
              <li>You are voluntarily choosing to access this website.</li>
            </ul>
            <button onClick={handleAccept} className="btn-gold">
              I Understand
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
