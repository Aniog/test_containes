import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { label: '赛程', href: '#schedule' },
  { label: '球队', href: '#teams' },
  { label: '举办城市', href: '#cities' },
  { label: '关于赛事', href: '#about' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-wc-dark/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-wc-red via-wc-gold to-wc-blue flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="font-bebas text-2xl tracking-widest text-white group-hover:text-wc-gold transition-colors">
            WC<span className="text-wc-gold">2026</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-wc-gold font-inter font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-flex items-center gap-2 bg-wc-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full uppercase tracking-widest text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(200,16,46,0.5)]"
        >
          购票
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-wc-dark/98 backdrop-blur-md border-t border-gray-800 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-wc-gold font-inter font-medium text-base uppercase tracking-widest transition-colors py-2 border-b border-gray-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#schedule"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-wc-red text-white font-bold py-3 px-6 rounded-full uppercase tracking-widest text-sm text-center"
          >
            购票
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
