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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-deep/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className="text-xl font-bold tracking-widest text-off-white uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              ARTITECT
            </span>
            <span
              className="text-xs font-medium tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-slate-cool hover:text-gold transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gold text-navy-deep text-sm font-semibold rounded-lg hover:bg-gold-light transition-all duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-off-white hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-mid border-t border-navy-light px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-off-white hover:text-gold transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-3 bg-gold text-navy-deep text-sm font-semibold rounded-lg text-center hover:bg-gold-light transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
