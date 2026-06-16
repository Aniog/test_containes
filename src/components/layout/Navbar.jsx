import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-2xl' : 'bg-brand-navy/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex flex-col leading-none"
        >
          <span className="font-heading font-800 text-brand-white text-lg tracking-widest uppercase">
            ARTITECT
          </span>
          <span className="font-heading font-400 text-brand-gold text-xs tracking-[0.3em] uppercase">
            MACHINERY
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-body text-brand-silver hover:text-brand-gold uppercase tracking-widest text-xs font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden md:inline-block bg-brand-gold text-brand-navy font-heading font-semibold px-6 py-2.5 uppercase tracking-widest text-xs hover:bg-brand-gold-light transition-colors duration-200"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-steel">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block px-6 py-3 text-brand-silver hover:text-brand-gold hover:bg-brand-steel/30 uppercase tracking-widest text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-4 pb-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="block text-center bg-brand-gold text-brand-navy font-semibold py-3 uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
