import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '产品系列', href: '#products' },
  { label: '品牌故事', href: '#about' },
  { label: '生活理念', href: '#lifestyle' },
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
        scrolled ? 'bg-brand-cream/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-brand-gold text-2xl">✦</span>
          <span className="font-serif font-bold text-lg md:text-xl text-brand-dark group-hover:text-brand-brown transition-colors">
            梅露可
          </span>
          <span className="hidden sm:block text-brand-muted text-sm font-sans">家居用品</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-muted hover:text-brand-brown font-sans text-sm font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-brown text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            立即咨询
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-dark p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-beige px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-dark font-sans text-base py-1 border-b border-brand-beige"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-brown text-white px-5 py-2 rounded-full text-sm font-medium text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            立即咨询
          </a>
        </div>
      )}
    </header>
  );
}
