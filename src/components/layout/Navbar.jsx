import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '特色', href: '#features' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-pink-500 font-bold text-xl">
          <Heart className="w-6 h-6 fill-pink-400 text-pink-400" />
          <span className="text-gray-800">Blossom</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-pink-500 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2.5 font-semibold text-sm shadow-lg shadow-pink-200 transition-all duration-200"
        >
          立即开始
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-pink-500 font-medium py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2.5 font-semibold text-sm text-center shadow-lg shadow-pink-200 transition-all duration-200"
            onClick={() => setOpen(false)}
          >
            立即开始
          </a>
        </div>
      )}
    </nav>
  );
}
