import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '关于我们', href: '#about' },
  { label: '核心业务', href: '#services' },
  { label: '核心优势', href: '#advantages' },
  { label: '典型案例', href: '#cases' },
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
        scrolled ? 'bg-[#0A1628] shadow-lg' : 'bg-[#0A1628]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E87722] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-[Inter]">威达</span>
          </div>
          <div>
            <div className="text-white font-bold text-base md:text-lg leading-tight tracking-wide" style={{ fontFamily: 'Noto Serif SC, serif' }}>
              威达机械智造
            </div>
            <div className="text-[#E87722] text-xs tracking-widest hidden md:block">WEIDA MACHINERY</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#E87722] text-sm font-medium transition-colors duration-200 tracking-wide"
              style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#E87722] text-white px-5 py-2 text-sm font-semibold hover:bg-[#F5A623] transition-colors duration-200"
            style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
          >
            获取报价
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#1A3A6B] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#E87722] text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Noto Sans SC, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#E87722] text-white px-5 py-2 text-sm font-semibold text-center hover:bg-[#F5A623] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            获取报价
          </a>
        </div>
      )}
    </nav>
  );
}
