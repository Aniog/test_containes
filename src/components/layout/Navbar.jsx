import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
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
        scrolled
          ? 'bg-steel-900/98 backdrop-blur-md border-b border-steel-600/60 shadow-xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex flex-col leading-none group"
          >
            <span className="text-gold-500 font-extrabold text-lg md:text-xl tracking-widest uppercase group-hover:text-gold-400 transition-colors duration-200">
              ARTITECT
            </span>
            <span className="text-steel-400 font-light text-xs tracking-[0.3em] uppercase">
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-steel-200 hover:text-gold-500 font-medium text-sm tracking-wide uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:inline-flex items-center bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
          >
            Get a Quote
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-steel-200 hover:text-gold-500 transition-colors duration-200 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-steel-800/98 backdrop-blur-md border-b border-steel-600/60`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-steel-200 hover:text-gold-500 font-medium text-sm tracking-wide uppercase py-3 border-b border-steel-600/40 last:border-0 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mt-3 inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-200"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
