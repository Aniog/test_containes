import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1B2A]/97 shadow-2xl' : 'bg-[#0D1B2A]/80'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex flex-col leading-none"
        >
          <span
            className="text-xl font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: '#C9A84C' }}
          >
            ARTITECT
          </span>
          <span
            className="text-xs tracking-[0.3em] uppercase text-white/70 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            MACHINERY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-xs tracking-widest uppercase text-white/70 hover:text-[#C9A84C] transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="ml-4 px-6 py-2 rounded-full border border-[#C9A84C] text-[#C9A84C] text-xs tracking-widest uppercase font-semibold hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-all duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mt-2 px-6 py-3 rounded-full bg-[#C9A84C] text-[#0D1B2A] text-sm tracking-widest uppercase font-bold text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
