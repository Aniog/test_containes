import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: '功能', href: '#features' },
  { label: '关于', href: '#about' },
  { label: '定价', href: '#pricing' },
  { label: '联系', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0520]/80 backdrop-blur-md border-b border-purple-800/40">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-purple-100 font-bold text-xl">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
            Lumina
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-violet-300 hover:text-purple-100 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-violet-300 hover:text-purple-100 transition-colors font-medium"
          >
            登录
          </a>
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all shadow-lg shadow-purple-900/50"
          >
            免费开始
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-purple-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a0a35]/95 backdrop-blur-md border-t border-purple-800/40 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-violet-300 hover:text-purple-100 transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all text-center mt-2"
            onClick={() => setOpen(false)}
          >
            免费开始
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
