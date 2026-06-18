import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '特色', href: '#features' },
  { label: '产品', href: '#products' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fefcf8]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="font-serif text-xl lg:text-2xl font-bold text-[#3d2314] tracking-wide"
        >
          木语·家居
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-[#5c3d2e] hover:text-[#8b5e3c] font-medium text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="bg-[#5c3d2e] text-[#fefcf8] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#3d2314] transition-colors duration-200 shadow-md"
          >
            预约体验
          </a>
        </nav>

        <button
          className="md:hidden text-[#3d2314] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fefcf8] border-t border-[#e8d5b7] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-[#5c3d2e] font-medium text-base py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="bg-[#5c3d2e] text-[#fefcf8] rounded-full px-6 py-2 text-sm font-medium text-center mt-2"
          >
            预约体验
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
