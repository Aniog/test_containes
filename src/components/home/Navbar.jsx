import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const navLinks = [
  { label: '关于我们', href: '#about' },
  { label: '产品系列', href: '#products' },
  { label: '品质承诺', href: '#features' },
  { label: '客户评价', href: '#testimonials' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center shadow-sm">
            <Home className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-base md:text-lg transition-colors ${
                scrolled ? 'text-stone-800' : 'text-white'
              }`}
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              庆巷家居
            </span>
            <span
              className={`text-xs transition-colors ${
                scrolled ? 'text-amber-700' : 'text-amber-200'
              }`}
            >
              用品有限公司
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                scrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-800 transition-colors shadow-sm"
          >
            立即咨询
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 font-medium py-3 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-amber-700 text-white text-center font-semibold py-3 rounded-full hover:bg-amber-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              立即咨询
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
