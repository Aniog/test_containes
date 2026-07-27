import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: '功能', href: '#features' },
  { label: '数据', href: '#stats' },
  { label: '关于', href: '#about' },
  { label: '联系', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">BluePeak</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-blue-200 hover:text-white font-medium transition text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-blue-200 hover:text-white font-medium text-sm transition"
            >
              登录
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow transition"
            >
              免费开始
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-blue-950/98 backdrop-blur-md border-t border-blue-800/50 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-blue-200 hover:text-white font-medium py-2 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center px-5 py-3 rounded-full shadow transition mt-2"
          >
            免费开始
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
