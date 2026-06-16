import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1B2A4A] shadow-lg' : 'bg-[#1B2A4A]/95'
      } border-b border-[#C9A84C]/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center">
              <span className="text-[#1B2A4A] font-bold text-sm">AM</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wide">ARTITECT</span>
              <span className="text-[#C9A84C] font-bold text-lg tracking-wide"> MACHINERY</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-300 hover:text-[#C9A84C] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold px-5 py-2 text-sm tracking-wide transition-all duration-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F1C33] border-t border-[#C9A84C]/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-300 hover:text-[#C9A84C] transition-colors duration-200 text-sm font-medium tracking-wide text-left py-2 border-b border-slate-700"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold px-5 py-3 text-sm tracking-wide transition-all duration-200 mt-2"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
