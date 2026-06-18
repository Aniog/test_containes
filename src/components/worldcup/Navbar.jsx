import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '赛程', href: '#schedule' },
  { label: '球队', href: '#teams' },
  { label: '历届冠军', href: '#champions' },
  { label: '数据统计', href: '#stats' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 text-white font-black text-xl tracking-tight"
        >
          <Trophy className="w-6 h-6 text-[#f5c518]" />
          <span>FIFA <span className="text-[#f5c518]">世界杯</span></span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-[#f5c518] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-md border-t border-gray-700/50 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-gray-300 hover:text-[#f5c518] text-base font-medium transition-colors w-full text-left py-1"
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
}
