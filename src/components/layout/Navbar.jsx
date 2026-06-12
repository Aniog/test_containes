import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/98 shadow-xl' : 'bg-navy/90'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-heading font-800 text-white text-lg tracking-widest uppercase">
            ARTITECT
          </span>
          <span className="font-heading font-400 text-gold text-xs tracking-[0.35em] uppercase">
            MACHINERY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-silver hover:text-gold transition-colors duration-200 text-xs font-body font-medium tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gold text-navy font-heading font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200 tracking-wide"
        >
          Get a Quote
        </a>

        {/* Mobile Toggle */}
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
        <div className="md:hidden bg-navy border-t border-white/10 px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-silver hover:text-gold transition-colors text-sm font-body tracking-widest uppercase py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center bg-gold text-navy font-heading font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
