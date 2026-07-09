import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const navLinks = [
  { label: '目的地', href: '#destinations' },
  { label: '技巧指南', href: '#skills' },
  { label: '装备推荐', href: '#gear' },
  { label: '雪况报告', href: '#conditions' },
  { label: '关于我们', href: '#about' },
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
        scrolled ? 'bg-deep-navy/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Mountain className="w-7 h-7 text-sky-blue group-hover:scale-110 transition-transform" />
          <span className="text-snow-white font-black text-xl tracking-tight">
            SNOW<span className="text-sky-blue">PEAK</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-ice-white hover:text-sky-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#destinations"
          className="hidden md:inline-flex bg-sky-blue text-snow-white font-bold px-6 py-2.5 rounded-full hover:bg-blue-500 transition text-sm"
        >
          立即出发
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ice-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-deep-navy/98 backdrop-blur-md border-t border-frost px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold uppercase tracking-widest text-ice-white hover:text-sky-blue transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#destinations"
            onClick={() => setOpen(false)}
            className="mt-2 bg-sky-blue text-snow-white font-bold px-6 py-3 rounded-full text-center hover:bg-blue-500 transition"
          >
            立即出发
          </a>
        </div>
      )}
    </nav>
  );
}
