import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '何为非遗', href: '#about' },
  { label: '非遗项目', href: '#items' },
  { label: '传承故事', href: '#stories' },
  { label: '参与保护', href: '#join' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C1C1E]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#C9A84C] text-2xl font-calligraphy leading-none">非遗</span>
          <div className="w-px h-6 bg-[#C9A84C]/40" />
          <span className="text-[#F8F3EA] text-sm font-light tracking-widest">文化传承</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-[#F8F3EA]/80 hover:text-[#C9A84C] text-sm tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNav('#join')}
          className="hidden md:block bg-[#8B1A1A] hover:bg-[#A52020] text-[#F8F3EA] text-sm px-5 py-2 rounded-full transition-colors duration-200 border-none cursor-pointer"
        >
          参与保护
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F8F3EA] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1C1C1E]/98 backdrop-blur-md border-t border-[#C9A84C]/20">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left text-[#F8F3EA]/80 hover:text-[#C9A84C] text-base px-6 py-3 transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
