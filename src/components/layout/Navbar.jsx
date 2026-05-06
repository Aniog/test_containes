import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, TreePine } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '产品', href: '#products' },
  { label: '分类', href: '#categories' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdf8f3]/95 backdrop-blur-md shadow-md border-b border-[#d4a96a]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-[#8b5e3c] rounded-full flex items-center justify-center group-hover:bg-[#6b4423] transition-colors">
              <TreePine className="w-5 h-5 text-[#fdf8f3]" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#3d2b1f]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                匠心木作
              </span>
              <p className="text-[10px] text-[#8b5e3c] leading-none tracking-widest hidden sm:block">
                HANDCRAFTED WOOD ART
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#5c3d2e] hover:text-[#8b5e3c] font-medium transition-colors text-sm tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8b5e3c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-[#5c3d2e] hover:text-[#8b5e3c] hover:bg-[#f0e6d3] rounded-full transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-[#5c3d2e] hover:text-[#8b5e3c] hover:bg-[#f0e6d3] rounded-full transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8b5e3c] text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-[#5c3d2e] hover:text-[#8b5e3c] hover:bg-[#f0e6d3] rounded-full transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#fdf8f3] border-t border-[#d4a96a]/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block px-4 py-3 text-[#5c3d2e] hover:text-[#8b5e3c] hover:bg-[#f0e6d3] rounded-lg font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
