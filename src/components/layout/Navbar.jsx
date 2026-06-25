import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-sm border-b border-[#30363D]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex flex-col leading-none"
        >
          <span
            className="text-xl font-bold tracking-widest uppercase"
            style={{ fontFamily: '"Playfair Display", serif', color: '#C9A84C' }}
          >
            ARTITECT
          </span>
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: '#8B949E' }}
          >
            MACHINERY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-xs tracking-widest uppercase font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none"
              style={{ color: '#C9D1D9' }}
              onMouseEnter={(e) => (e.target.style.color = '#C9A84C')}
              onMouseLeave={(e) => (e.target.style.color = '#C9D1D9')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="text-xs tracking-widest uppercase font-semibold px-6 py-2.5 transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid #C9A84C',
              color: '#C9A84C',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C9A84C';
              e.currentTarget.style.color = '#0D1117';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#C9A84C';
            }}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 bg-transparent border-none cursor-pointer"
          style={{ color: '#C9D1D9' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: '#0D1117', borderColor: '#30363D' }}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm tracking-widest uppercase font-medium text-left bg-transparent border-none cursor-pointer"
                style={{ color: '#C9D1D9' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-xs tracking-widest uppercase font-semibold px-6 py-3 w-full text-center"
              style={{
                border: '1px solid #C9A84C',
                color: '#C9A84C',
                background: 'transparent',
              }}
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
