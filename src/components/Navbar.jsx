import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <span
              className={`text-lg md:text-xl font-extrabold tracking-tight transition-colors ${
                scrolled ? 'text-text-primary' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span
              className={`text-lg md:text-xl font-light tracking-widest transition-colors ${
                scrolled ? 'text-brand' : 'text-brand-light'
              }`}
            >
              MACHINERY
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-brand ${
                    scrolled ? 'text-text-primary' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors"
          >
            Get a Quote
          </a>

          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-text-primary' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-3 py-2 rounded-md text-text-primary font-medium hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="block text-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-colors"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
