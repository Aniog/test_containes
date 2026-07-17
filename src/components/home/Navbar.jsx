import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '植物图鉴', href: '#gallery' },
  { label: '种植指南', href: '#guide' },
  { label: '关于我们', href: '#about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-leaf-700 font-bold text-xl">
          <Leaf className="w-6 h-6 text-leaf-600" />
          <span>水培花园</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-leaf-600 font-medium transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#guide"
            className="bg-leaf-600 hover:bg-leaf-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
          >
            开始种植
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="切换菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-leaf-600 font-medium py-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#guide"
            className="bg-leaf-600 hover:bg-leaf-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            开始种植
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
