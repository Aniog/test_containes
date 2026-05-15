import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A2E] shadow-lg' : 'bg-[#1A1A2E]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white font-bold text-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-[#E63946] text-2xl">🍔</span>
          <span>Burger Joint</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#F4A261] transition-colors text-sm font-medium tracking-wide uppercase cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNavClick('#menu')}
          className="hidden md:block bg-[#E63946] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#c62d39] transition-colors cursor-pointer border-none"
        >
          Order Now
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A2E] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-[#F4A261] transition-colors text-sm font-medium tracking-wide uppercase text-left bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#menu')}
            className="bg-[#E63946] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-[#c62d39] transition-colors w-full border-none cursor-pointer"
          >
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
