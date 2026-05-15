import { useState, useEffect } from 'react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品系列', href: '#products' },
  { label: '品牌优势', href: '#features' },
  { label: '用户好评', href: '#testimonials' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-3xl">🧸</span>
          <div>
            <div className={`font-black text-lg leading-tight ${scrolled ? 'text-orange-500' : 'text-white'}`}>
              高高乐
            </div>
            <div className={`text-xs font-medium leading-tight ${scrolled ? 'text-gray-500' : 'text-orange-200'}`}>
              儿童玩具
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-orange-400 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-all shadow-lg hover:shadow-orange-300 hover:-translate-y-0.5"
        >
          立即选购 →
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-semibold py-1 border-b border-gray-100 hover:text-orange-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-orange-500 text-white font-bold text-center py-2 rounded-full hover:bg-orange-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            立即选购 →
          </a>
        </div>
      )}
    </nav>
  );
}
