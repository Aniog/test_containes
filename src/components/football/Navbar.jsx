import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '世界杯历史', href: '#history' },
  { label: '冠军榜', href: '#champions' },
  { label: '传奇球星', href: '#legends' },
  { label: '2026赛事', href: '#2026' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 text-yellow-400 font-black text-xl tracking-tight">
          <Trophy className="w-6 h-6" />
          <span>WORLD CUP</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 bg-transparent border-none p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-base font-medium"
                  onClick={() => setOpen(false)}
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
}
