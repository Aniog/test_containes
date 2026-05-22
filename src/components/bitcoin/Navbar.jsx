import { useState, useEffect } from 'react';

const navLinks = [
  { label: '// 简介', href: '#intro' },
  { label: '// 技术', href: '#tech' },
  { label: '// 数据', href: '#stats' },
  { label: '// FAQ', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-btc-bg/95 backdrop-blur-md border-b border-btc-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNav(e, '#')}>
          <div className="w-8 h-8 rounded bg-btc-orange flex items-center justify-center glow-orange">
            <span className="text-black font-mono font-bold text-sm">₿</span>
          </div>
          <span className="font-mono text-btc-text font-bold tracking-wider group-hover:text-btc-orange transition-colors">
            BITCOIN
          </span>
          <span className="font-mono text-btc-muted text-xs hidden sm:inline">v0.1</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="font-mono text-sm text-btc-dim hover:text-btc-cyan transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bitcoin.org"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-4 py-2 border border-btc-orange text-btc-orange hover:bg-btc-orange hover:text-black transition-all duration-200 rounded"
          >
            &gt; 官方网站
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-btc-orange transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-btc-orange transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-btc-orange transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-btc-surface border-b border-btc-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="font-mono text-sm text-btc-dim hover:text-btc-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://bitcoin.org"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs px-4 py-2 border border-btc-orange text-btc-orange text-center rounded"
          >
            &gt; 官方网站
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
