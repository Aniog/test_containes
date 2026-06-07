import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;
  const isChinese = lang === 'zh';

  const navLinks = [
    { label: t.destinations, href: '#destinations' },
    { label: t.experiences, href: '#experiences' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.about, href: '#about' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-black/95 backdrop-blur-md border-b border-green-900/40 shadow-[0_4px_30px_rgba(22,101,52,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.5)] group-hover:shadow-[0_0_30px_rgba(22,163,74,0.8)] transition-all">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="font-cinzel text-xl font-bold text-mist tracking-widest">
            NEXUS <span className="text-gold">VOYAGES</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300 tracking-wider uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: language toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group"
            aria-label="Switch language"
          >
            <span className={`text-xs font-semibold transition-colors ${lang === 'en' ? 'text-gold' : 'text-gray-500'}`}>EN</span>
            <span className="text-gray-600 text-xs">|</span>
            <span className={`text-xs font-semibold font-noto transition-colors ${lang === 'zh' ? 'text-gold' : 'text-gray-500'}`}>中文</span>
          </button>

          <a
            href="#book"
            className={`text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] tracking-wider ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          >
            {t.bookPortal}
          </a>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/20 bg-white/5"
          >
            <span className={`text-xs font-semibold ${lang === 'en' ? 'text-gold' : 'text-gray-500'}`}>EN</span>
            <span className="text-gray-600 text-xs">|</span>
            <span className={`text-xs font-semibold font-noto ${lang === 'zh' ? 'text-gold' : 'text-gray-500'}`}>中文</span>
          </button>
          <button
            className="text-mist hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/98 backdrop-blur-md border-t border-green-900/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium text-gray-300 hover:text-gold transition-colors tracking-wider uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white text-center tracking-wider mt-2 ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          >
            {t.bookPortal}
          </a>
        </div>
      )}
    </nav>
  );
}
