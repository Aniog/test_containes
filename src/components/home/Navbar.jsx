import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '特色', href: '#features' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-green-700 font-extrabold text-xl">
          <Leaf className="w-6 h-6 text-green-500" />
          <span>GreenLife</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-green-800 font-medium hover:text-green-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-green-600 text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-green-700 transition-colors shadow-md"
        >
          立即开始
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-green-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-green-800 font-medium hover:text-green-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-green-600 text-white rounded-full px-6 py-2 font-semibold text-sm text-center hover:bg-green-700 transition-colors"
            onClick={() => setOpen(false)}
          >
            立即开始
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
