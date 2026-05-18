import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品系列', href: '#products' },
  { label: '品牌故事', href: '#about' },
  { label: '服务承诺', href: '#services' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">金</span>
          </div>
          <div className="leading-tight">
            <p className="text-brand-brown font-bold text-base tracking-wide">金利厨具</p>
            <p className="text-text-sub text-xs">用品有限公司</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-text-main hover:text-brand-orange font-medium text-sm transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:block bg-brand-orange text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition"
        >
          立即咨询
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-brown"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-warm-card px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-text-main hover:text-brand-orange font-medium text-base transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="bg-brand-orange text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition w-full"
          >
            立即咨询
          </button>
        </div>
      )}
    </header>
  );
}
