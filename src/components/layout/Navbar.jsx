import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1C2C]/98 shadow-xl' : 'bg-[#0B1C2C]/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex flex-col items-start group"
        >
          <span className="text-[#C9A84C] font-bold text-xl tracking-widest uppercase leading-none">
            ARTITECT
          </span>
          <span className="text-[#8A9BB0] text-xs tracking-[0.3em] uppercase font-medium leading-none mt-0.5">
            MACHINERY
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-[#F5F5F0] hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:block bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0B1C2C] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200"
        >
          Get a Quote
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#F5F5F0] hover:text-[#C9A84C] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1C2C] border-t border-[#C9A84C]/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[#F5F5F0] hover:text-[#C9A84C] text-base font-medium text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 bg-[#C9A84C] hover:bg-[#E8C97A] text-[#0B1C2C] font-semibold px-6 py-3 rounded-full transition-all"
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
