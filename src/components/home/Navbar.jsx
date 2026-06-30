import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '服务', href: '#services' },
  { label: '关于我们', href: '#about' },
  { label: '评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-pink-600 font-extrabold text-xl tracking-tight">
          <Sparkles className="w-5 h-5 text-pink-500" />
          Blossom
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-pink-500 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors shadow-sm"
        >
          立即体验
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-pink-500 bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-pink-500 font-medium text-base transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            立即体验
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
