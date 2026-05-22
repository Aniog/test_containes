import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '赛事概览', href: '#about' },
  { label: '主办国', href: '#countries' },
  { label: '举办城市', href: '#cities' },
  { label: '赛事数据', href: '#stats' },
  { label: '赛程', href: '#schedule' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 via-amber-400 to-blue-500 flex items-center justify-center text-white font-black text-sm">
            26
          </div>
          <span className="font-black text-white text-lg tracking-tight hidden sm:block">
            FIFA <span className="text-amber-400">2026</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          查看赛程
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-md border-t border-gray-800 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-amber-400 text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#schedule"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                查看赛程
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
