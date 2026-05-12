import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '特色', href: '#features' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-950/95 backdrop-blur-md border-b border-green-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">GreenLife</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-green-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors"
          >
            立即加入
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-950 border-t border-green-800/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-green-300 hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            立即加入
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
