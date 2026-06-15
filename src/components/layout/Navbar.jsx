import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
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

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1B2A]/98 shadow-2xl' : 'bg-[#0D1B2A]'
      } border-b border-[#C9A84C]/20`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex flex-col leading-none"
        >
          <span
            className="text-xl font-extrabold tracking-widest uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#C9A84C' }}
          >
            ARTITECT
          </span>
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[#8A9BB0]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
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
                className="text-[#8A9BB0] hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden md:inline-block bg-[#C9A84C] text-[#0D1B2A] font-bold px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#E8C97A] transition-colors duration-200"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Get a Quote
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#C9A84C] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-[#C9A84C]/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#8A9BB0] hover:text-[#C9A84C] text-sm font-semibold tracking-widest uppercase transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="bg-[#C9A84C] text-[#0D1B2A] font-bold px-6 py-3 text-xs tracking-widest uppercase text-center hover:bg-[#E8C97A] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
