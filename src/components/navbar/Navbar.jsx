import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '新闻', href: '#news' },
  { label: '球队', href: '#teams' },
  { label: '赛程', href: '#matches' },
  { label: '排行榜', href: '#standings' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              足球<span className="text-green-400">世界</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-green-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#matches"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              直播赛事
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-green-400 transition-colors font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#matches"
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            直播赛事
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
