import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '产品与服务', href: '#products' },
  { label: '行业应用', href: '#industries' },
  { label: '核心优势', href: '#advantages' },
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
        scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('#hero')}>
            <div className="bg-[#2196F3] p-2 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-base lg:text-lg leading-tight tracking-wide">
                温思达电力装备
              </div>
              <div className="text-[#8BA3C1] text-xs tracking-widest hidden sm:block">
                WENSIDA POWER EQUIPMENT
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[#8BA3C1] hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden sm:block bg-[#2196F3] hover:bg-[#1565C0] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-300"
            >
              获取方案
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-[#1E3A5F]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[#E8EDF5] hover:text-[#2196F3] text-left px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-2 bg-[#2196F3] hover:bg-[#1565C0] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-300"
            >
              获取方案
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
