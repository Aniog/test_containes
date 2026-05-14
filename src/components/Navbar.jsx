import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '服务', href: '#services' },
  { label: '关于我们', href: '#about' },
  { label: '作品集', href: '#portfolio' },
  { label: '客户评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
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
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-amber flex items-center justify-center">
            <span className="text-white font-bold text-sm">秋</span>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            秋易<span className="text-gold">广告</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-gold text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gradient-to-r from-gold to-amber text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          免费咨询
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold text-base font-medium transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex justify-center bg-gradient-to-r from-gold to-amber text-white font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              免费咨询
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
