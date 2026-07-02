import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '赛程', href: '#matches' },
  { label: '积分榜', href: '#standings' },
  { label: '射手榜', href: '#scorers' },
  { label: '球队', href: '#teams' },
  { label: '淘汰赛', href: '#bracket' },
  { label: '场馆', href: '#venues' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wc-bg/95 backdrop-blur-md border-b border-wc-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-wc-gold rounded-full flex items-center justify-center">
              <Trophy className="w-4 h-4 text-black" />
            </div>
            <div>
              <span className="text-white font-black text-sm tracking-wide">FIFA</span>
              <span className="text-wc-gold font-black text-sm tracking-wide ml-1">WORLD CUP</span>
              <span className="text-gray-400 text-xs ml-1">2026™</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-gray-400 hover:text-wc-gold text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Live Badge */}
          <div className="hidden md:flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-wc-red/20 border border-wc-red/40 text-wc-red text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
              <span className="w-1.5 h-1.5 bg-wc-red rounded-full"></span>
              LIVE
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-wc-surface border-t border-wc-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-gray-300 hover:text-wc-gold py-2.5 text-sm font-medium border-b border-wc-border/50 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
