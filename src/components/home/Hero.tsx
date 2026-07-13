import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505663912202-ac224b208bcb?q=80&w=2200&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mb-10 flex items-center justify-center"
        >
          {/* Gold Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />

          <motion.img
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Clarity Associates"
            className="relative w-48 md:w-60 lg:w-72 object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.25)]"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="uppercase tracking-[0.45em] text-gold text-xs md:text-sm mb-6"
        >
          Advocates • Madurai Bench of Madras High Court
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-heading text-white text-5xl sm:text-7xl md:text-8xl leading-none tracking-wide drop-shadow-xl"
        >
          Clarity Associates
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.65,
          }}
          className="mt-8 font-sub italic text-gold-light text-2xl md:text-4xl"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.85,
          }}
          className="mt-8 max-w-3xl text-white/75 text-base md:text-lg leading-9"
        >
          A chamber of advocates providing informed, principled legal
          representation before the Madurai Bench of the Madras High Court,
          District Courts of Tamil Nadu, and other judicial forums with
          integrity, precision, and unwavering commitment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.05,
          }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <Link
            to="/contact"
            className="btn-gold px-10 py-4 text-sm tracking-wider"
          >
            Contact Us
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-10 py-4 text-sm tracking-wider"
          >
            Request Consultation
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="uppercase tracking-[0.4em] text-[10px] text-white/40 mb-3">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="h-10 w-px bg-gradient-to-b from-gold via-gold/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
