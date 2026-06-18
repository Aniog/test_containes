import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '景点', href: '#attractions' },
  { label: '美食', href: '#food' },
  { label: '文化', href: '#culture' },
  { label: '熊猫', href: '#panda' },
  { label: '联系', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-serif font-bold text-chengdu-red">成都</span>
          <span className={`text-sm font-sans font-medium transition-colors ${scrolled ? 'text-gray-500' : 'text-white/80'}`}>
            天府之国
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled ? 'text-gray-700 hover:text-chengdu-red' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chengdu-red transition-all group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-3 text-gray-700 hover:text-chengdu-red hover:bg-red-50 transition-colors font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
