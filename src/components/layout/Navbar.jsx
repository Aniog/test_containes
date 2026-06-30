import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '服务', href: '#services' },
  { label: '关于', href: '#about' },
  { label: '作品', href: '#works' },
  { label: '联系', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-[#c8a96e] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-black" />
          </span>
          <span className="text-white font-bold text-lg tracking-tight">NOIR</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNav('#contact')}
            className="bg-[#c8a96e] text-black text-sm font-semibold rounded-full px-6 py-2.5 hover:bg-[#d4b87a] transition-colors duration-200 cursor-pointer border-none"
          >
            开始合作
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-900 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-neutral-300 hover:text-white text-base font-medium text-left bg-transparent border-none cursor-pointer transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 bg-[#c8a96e] text-black text-sm font-semibold rounded-full px-6 py-3 hover:bg-[#d4b87a] transition-colors border-none cursor-pointer w-full"
          >
            开始合作
          </button>
        </div>
      )}
    </header>
  );
}
