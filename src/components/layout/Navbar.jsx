import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '特色', href: '#features' },
  { label: '关于我们', href: '#about' },
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

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-mint' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center group-hover:bg-emerald transition-colors">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-forest">GreenLife</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-forest font-medium transition-colors text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick('#contact')}
          className="hidden md:block bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald transition-colors"
        >
          立即开始
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-forest"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-mint px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-700 hover:text-forest font-medium text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald transition-colors w-full"
          >
            立即开始
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
