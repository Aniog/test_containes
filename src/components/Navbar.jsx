import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Microscope } from "lucide-react";

const navLinks = [
  { label: "Observatory", href: "/" },
  { label: "Specimens", href: "/specimens" },
  { label: "Slide Gallery", href: "/gallery" },
  { label: "Lab Notes", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ${
          scrolled
            ? "bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl shadow-black/10"
            : "bg-white/20 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5"
        } rounded-2xl`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="MicroCosmos Home"
          >
            <div className="w-8 h-8 rounded-lg bg-ink/90 flex items-center justify-center">
              <Microscope className="w-4 h-4 text-parchment" strokeWidth={1.5} />
            </div>
            <span className="font-serif font-bold text-ink text-lg tracking-tight leading-none">
              Micro<span className="font-light italic">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-sans font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-ink bg-white/50"
                        : "text-charcoal hover:text-ink hover:bg-white/30"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-xl bg-white/50 -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/gallery"
              className="px-4 py-2 text-sm font-sans font-medium bg-ink text-parchment rounded-xl hover:bg-charcoal transition-colors duration-200"
            >
              View Slides
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-ink hover:bg-white/40 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl shadow-black/10 p-4 md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 text-sm font-sans font-medium rounded-xl transition-colors ${
                        isActive
                          ? "bg-ink text-parchment"
                          : "text-charcoal hover:bg-white/50 hover:text-ink"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
