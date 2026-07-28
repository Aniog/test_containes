import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '业务领域', href: '#services' },
  { label: '律师团队', href: '#team' },
  { label: '成功案例', href: '#cases' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <div className={`font-serif font-bold text-lg leading-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
              明远律师事务所
            </div>
            <div className={`text-xs tracking-widest uppercase ${scrolled ? 'text-gold' : 'text-gold-light'}`}>
              Law Firm
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="bg-gold text-white px-6 py-2.5 text-sm font-semibold rounded hover:bg-gold-light transition-colors"
          >
            免费咨询
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 text-dark font-medium border-b border-gray-100 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-4 bg-gold text-white py-3 font-semibold rounded hover:bg-gold-light transition-colors"
            >
              免费咨询
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
