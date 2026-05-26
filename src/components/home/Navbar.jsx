import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '品牌故事', href: '#story' },
  { label: '产品系列', href: '#products' },
  { label: '生活理念', href: '#lifestyle' },
  { label: '客户评价', href: '#reviews' },
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
        scrolled ? 'bg-[#FDF8F0]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#8B6F47] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-serif-sc">罗</span>
          </div>
          <div>
            <p className="font-serif-sc font-bold text-[#5C3D1E] text-base leading-tight">罗克岚</p>
            <p className="text-[#7A6552] text-xs leading-tight">家居用品有限公司</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#5C3D1E] hover:text-[#8B6F47] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-[#8B6F47] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#5C3D1E] transition-colors duration-200"
        >
          立即咨询
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#5C3D1E] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FDF8F0] border-t border-[#E8DDD0] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#5C3D1E] text-base font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center bg-[#8B6F47] text-white text-sm font-medium px-5 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            立即咨询
          </a>
        </div>
      )}
    </header>
  );
}
