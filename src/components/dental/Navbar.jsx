import { useState } from 'react';
import { Menu, X, Smile } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '健康知识', href: '#knowledge' },
  { label: '日常护理', href: '#care' },
  { label: '常见问题', href: '#faq' },
  { label: '预约咨询', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white rounded-xl p-2 group-hover:bg-blue-700 transition">
              <Smile className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              齿<span className="text-blue-600">护</span>健康
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-blue-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-700 transition"
          >
            免费咨询
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="切换菜单"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-white rounded-full px-5 py-2 text-sm font-semibold text-center hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            免费咨询
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
