import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#about' },
  { label: '产品中心', href: '#products' },
  { label: '核心优势', href: '#features' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-blue-800 tracking-tight">星闪医疗器械</span>
              <span className="text-xs text-slate-500 font-medium tracking-widest hidden sm:block">XINGSHAN MEDICAL</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-700 font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              获取报价
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-blue-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-700 font-medium py-2 border-b border-slate-100 last:border-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-700 text-white text-center py-3 rounded-lg font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              获取报价
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
