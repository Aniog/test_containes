import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <span
              className={`text-xl md:text-2xl font-extrabold tracking-wider transition-colors ${
                scrolled ? 'text-[#1a3a5c]' : 'text-white'
              }`}
            >
              ARTITECT
            </span>
            <span className="text-xl md:text-2xl font-extrabold tracking-wider text-[#c9a84c]">
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-medium transition-colors hover:text-[#c9a84c] ${
                  scrolled ? 'text-[#1a1a1a]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-[#c9a84c] text-white px-5 py-2.5 rounded font-semibold hover:bg-[#b8983e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  scrolled ? 'text-[#1a1a1a]' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  scrolled ? 'text-[#1a1a1a]' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-[#1a1a1a] font-medium py-2 hover:text-[#c9a84c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] text-white px-5 py-3 rounded font-semibold hover:bg-[#b8983e] transition-colors mt-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
