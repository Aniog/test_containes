import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品中心', href: '#products' },
  { label: '制造工艺', href: '#process' },
  { label: '核心优势', href: '#advantages' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D2137] shadow-lg' : 'bg-[#0D2137]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#D4820A] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">溪</span>
          </div>
          <span className="text-white font-bold text-lg leading-tight hidden sm:block">
            溪流谷机械智造
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-[#D4820A] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:block bg-[#D4820A] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#B8700A] transition"
        >
          获取报价
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0D2137] border-t border-[#1A5276] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-gray-300 hover:text-[#D4820A] text-base font-medium transition-colors w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="w-full bg-[#D4820A] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[#B8700A] transition mt-2"
              >
                获取报价
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
