import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品系列', href: '#products' },
  { label: '品牌故事', href: '#about' },
  { label: '客户评价', href: '#reviews' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#8B6F47] flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <span
            className="font-serif-cn font-bold text-lg text-[#2C1810] leading-tight"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            由妮可
            <span className="block text-xs font-normal text-[#9E8E82] leading-none">家居用品有限公司</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B5B4E] hover:text-[#8B6F47] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-[#8B6F47] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#6B5035] transition-colors"
        >
          立即选购
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#2C1810]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-[#F5EFE6] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#6B5B4E] hover:text-[#8B6F47] transition-colors font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#8B6F47] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#6B5035] transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            立即选购
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
