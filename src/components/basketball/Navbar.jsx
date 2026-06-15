import { useState, useEffect } from 'react';

const navLinks = [
  { label: '球队', href: '#team' },
  { label: '球员', href: '#players' },
  { label: '赛程', href: '#schedule' },
  { label: '新闻', href: '#news' },
  { label: '关于', href: '#about' },
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
        scrolled ? 'bg-court-black/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-3xl font-heading font-black text-hoop-orange tracking-tight uppercase">
            SLAM
          </span>
          <span className="hidden sm:block text-xs font-body font-semibold text-gray-400 uppercase tracking-widest mt-1">
            Basketball
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium text-gray-300 hover:text-hoop-orange transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#schedule"
          className="hidden md:inline-flex items-center gap-2 bg-hoop-orange hover:bg-hoop-orange-dark text-white text-sm font-body font-semibold px-5 py-2.5 rounded-full transition-all duration-200 uppercase tracking-wide"
        >
          购票
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-court-dark border-t border-court-border px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-body font-medium text-gray-200 hover:text-hoop-orange transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#schedule"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-hoop-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full uppercase tracking-wide"
              >
                购票
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
