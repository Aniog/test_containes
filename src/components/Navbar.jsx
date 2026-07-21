import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '运动介绍', href: '#about' },
  { label: '比赛规则', href: '#rules' },
  { label: '投壶技术', href: '#techniques' },
  { label: '重要赛事', href: '#events' },
  { label: '冠军榜', href: '#champions' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl no-underline">
          <span className="text-2xl">🥌</span>
          <span className="text-blue-400">冰壶</span>
          <span className="text-gray-200 font-light">运动</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline hover:bg-blue-500/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-gray-800 px-4 pb-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 px-3 py-3 rounded-lg text-sm font-medium transition-colors no-underline hover:bg-blue-500/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
