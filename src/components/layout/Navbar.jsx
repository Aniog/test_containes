import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: '功能', href: '#features' },
  { label: '数据', href: '#stats' },
  { label: '定价', href: '#cta' },
  { label: '关于', href: '#footer' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-950/80 backdrop-blur-md border-b border-purple-800/40">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
            Lumina
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-purple-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-purple-300 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            登录
          </a>
          <a
            href="#cta"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-purple-600/40 transition-all duration-200"
          >
            免费开始
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-purple-300 hover:text-white bg-transparent border-none p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-purple-950/95 backdrop-blur-md border-t border-purple-800/40 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-purple-300 hover:text-white text-base font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center shadow-md shadow-purple-600/40"
          >
            免费开始
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
