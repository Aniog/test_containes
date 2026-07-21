import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const navLinks = [
  { label: '关于帆船', href: '#about' },
  { label: '赛事活动', href: '#events' },
  { label: '装备指南', href: '#equipment' },
  { label: '精彩图集', href: '#gallery' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 text-white font-serif font-bold text-xl tracking-wide"
        >
          <Anchor className="w-6 h-6 text-seafoam" />
          <span>扬帆远航</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-seafoam text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#events"
          onClick={(e) => handleNavClick(e, '#events')}
          className="hidden md:inline-flex items-center bg-seafoam text-navy font-semibold text-sm px-5 py-2 rounded-full hover:bg-sky hover:text-white transition-colors duration-200"
        >
          立即报名
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-6 py-3 text-white/80 hover:text-seafoam hover:bg-white/5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a
                href="#events"
                onClick={(e) => handleNavClick(e, '#events')}
                className="block text-center bg-seafoam text-navy font-semibold text-sm px-5 py-2 rounded-full"
              >
                立即报名
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
