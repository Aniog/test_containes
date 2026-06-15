import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于球队', href: '#about' },
  { label: '球队阵容', href: '#team' },
  { label: '赛程', href: '#schedule' },
  { label: '新闻', href: '#news' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rugby-dark/95 backdrop-blur-sm border-b border-rugby-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-rugby-gold font-extrabold text-xl tracking-wide">AB橄榄球CD</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-rugby-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-rugby-gold text-rugby-dark font-bold text-sm px-5 py-2 rounded-full hover:bg-rugby-gold-light transition-colors"
        >
          加入我们
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-rugby-dark border-t border-rugby-gold/20 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-rugby-gold transition-colors text-base font-medium block"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block bg-rugby-gold text-rugby-dark font-bold text-sm px-5 py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            加入我们
          </a>
        </div>
      )}
    </nav>
  );
}
