import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-accent flex items-center justify-center rounded-sm">
            <span className="text-bg font-heading font-bold text-base leading-none">A</span>
          </div>
          <span className="text-text-primary font-heading font-semibold text-lg tracking-wide">
            ARTITECT MACHINERY
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-text-secondary text-sm font-medium uppercase tracking-extra-wide hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-accent text-bg text-sm font-semibold uppercase tracking-wide-btn px-6 py-2.5 rounded hover:bg-accent-hover transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text-secondary text-sm font-medium uppercase tracking-extra-wide hover:text-accent transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-accent text-bg text-sm font-semibold uppercase tracking-wide-btn px-6 py-2.5 rounded text-center hover:bg-accent-hover transition-colors duration-200 mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
