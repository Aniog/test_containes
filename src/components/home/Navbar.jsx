import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '赛程', href: '#schedule' },
  { label: '球队', href: '#teams' },
  { label: '场馆', href: '#venues' },
  { label: '统计', href: '#stats' },
  { label: '举办城市', href: '#cities' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0E1A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C8102E] via-[#FFD700] to-[#003DA5] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)]">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-white">
              FIFA <span className="text-[#FFD700]">2026</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-[#FFD700] text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#schedule"
              className="bg-[#C8102E] hover:bg-red-700 text-white text-sm font-bold py-2 px-6 rounded-full uppercase tracking-widest transition-colors duration-200"
            >
              购票
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A0E1A]/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-[#FFD700] text-base font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#schedule"
              onClick={() => setOpen(false)}
              className="bg-[#C8102E] text-white text-sm font-bold py-2 px-6 rounded-full uppercase tracking-widest text-center mt-2"
            >
              购票
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
