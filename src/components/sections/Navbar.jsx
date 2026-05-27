import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#about' },
  { label: '核心业务', href: '#services' },
  { label: '产品中心', href: '#products' },
  { label: '制造实力', href: '#capability' },
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
        scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1E5FA8] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">罗</span>
          </div>
          <div>
            <div className="text-white font-bold text-base leading-tight">罗科百道</div>
            <div className="text-[#8A9BB0] text-xs tracking-widest">MECHANICAL MANUFACTURING</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8A9BB0] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1E5FA8] hover:bg-[#2E9CDB] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
          >
            获取报价
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8A9BB0] hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1E5FA8] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            获取报价
          </a>
        </div>
      )}
    </header>
  );
}
