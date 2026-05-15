import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品与方案', href: '#products' },
  { label: '核心优势', href: '#advantages' },
  { label: '荣誉资质', href: '#honors' },
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

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-2xl' : 'bg-brand-navy/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('#hero')}>
          <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-white font-bold text-base md:text-lg leading-tight tracking-wide">
              温思达电力装备
            </div>
            <div className="text-brand-orange text-xs font-medium tracking-widest hidden md:block">
              WENSIDA POWER EQUIPMENT
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-brand-orange text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="ml-4 bg-brand-orange hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
          >
            获取报价
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-brand-orange text-sm font-medium py-3 text-left border-b border-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-3 bg-brand-orange text-white text-sm font-semibold py-3 rounded-lg"
          >
            获取报价
          </button>
        </div>
      )}
    </header>
  );
}
