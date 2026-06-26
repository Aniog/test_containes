import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#2a2a2e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#c9a44c] flex items-center justify-center rounded-sm">
              <span className="text-[#0a0a0b] font-bold text-lg leading-none">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#f5f5f5] font-bold text-sm tracking-[0.15em] uppercase leading-tight">
                ARTITECT
              </span>
              <span className="text-[#a0a0a8] text-[10px] tracking-[0.2em] uppercase leading-tight">
                MACHINERY
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[#a0a0a8] hover:text-[#c9a44c] text-xs font-medium uppercase tracking-[0.12em] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[#f5f5f5]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0b]/98 backdrop-blur-md border-t border-[#2a2a2e]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-[#a0a0a8] hover:text-[#c9a44c] text-sm font-medium uppercase tracking-[0.12em] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
