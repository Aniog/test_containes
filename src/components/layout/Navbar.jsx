import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1B2A] shadow-lg' : 'bg-[#0D1B2A]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="flex flex-col leading-tight">
            <span
              className="text-xl md:text-2xl font-bold tracking-widest text-[#C8922A]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ARTITECT
            </span>
            <span className="text-xs tracking-[0.3em] text-white/70 font-inter font-light uppercase">
              Machinery
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#C8922A] transition-colors duration-200 text-sm tracking-wider font-inter font-medium uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-[#C8922A] hover:bg-[#E8B04A] text-white text-sm font-semibold px-6 py-2.5 tracking-wider uppercase transition-all duration-200 font-inter"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-[#C8922A] transition-colors text-left text-sm tracking-wider font-inter font-medium uppercase"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-[#C8922A] hover:bg-[#E8B04A] text-white text-sm font-semibold px-6 py-3 tracking-wider uppercase transition-all duration-200 font-inter w-full"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
