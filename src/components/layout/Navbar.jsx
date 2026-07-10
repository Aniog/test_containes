import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
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
          ? 'bg-steel-900/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-steel-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-gold-500 rounded flex items-center justify-center">
              <span className="text-steel-900 font-barlow font-900 text-sm leading-none">A</span>
            </div>
            <span className="font-barlow font-800 text-lg tracking-tight">
              <span className="text-gold-500">ARTITECT</span>
              <span className="text-steel-100"> MACHINERY</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-inter text-sm font-medium text-steel-200 hover:text-gold-500 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="bg-gold-500 hover:bg-gold-400 text-steel-900 font-inter font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-gold-500/20"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-steel-200 hover:text-gold-500 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-steel-900/98 backdrop-blur-md border-t border-steel-700 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-inter text-base font-medium text-steel-200 hover:text-gold-500 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="bg-gold-500 hover:bg-gold-400 text-steel-900 font-inter font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 text-center mt-2"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
