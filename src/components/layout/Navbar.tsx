import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Representative Matters", to: "/representative-matters" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="container-luxury flex items-center justify-between px-6 sm:px-10 lg:px-20"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="Clarity Associates Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Clarity Associates"
            className={`transition-all duration-500 object-contain ${
              scrolled
                ? "h-12 w-auto"
                : "h-14 md:h-16 w-auto drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${
                  scrolled
                    ? ""
                    : "text-white/90 hover:text-white after:bg-gold"
                } ${isActive ? "text-gold-dark after:w-full" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className={`px-6 py-2.5 text-xs tracking-widest2 uppercase font-body transition-all duration-500 ease-luxury border ${
              scrolled
                ? "border-ink text-ink hover:bg-ink hover:text-white"
                : "border-white/60 text-white hover:border-gold hover:text-gold"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 ${
            scrolled ? "text-ink" : "text-white"
          }`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <img
                src={`${import.meta.env.BASE_URL}images/Logo.png`}
                alt="Clarity Associates"
                className="h-12 w-auto object-contain"
              />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white p-2"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-start gap-8 px-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.45,
                  }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-heading text-3xl text-white/90 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
