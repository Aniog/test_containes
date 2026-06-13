import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#features' },
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
          ? 'bg-charcoal/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <span className="text-gold font-heading text-lg lg:text-xl font-bold tracking-wide">
              ARTITECT
            </span>
            <span className="text-off-white font-heading text-lg lg:text-xl font-semibold tracking-wide">
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm uppercase tracking-[0.2em] text-muted-gray hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md bg-bronze text-white text-sm font-semibold uppercase tracking-wider hover:bg-gold transition-colors duration-200"
          >
            Request a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-off-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/[0.06]">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-sm uppercase tracking-[0.2em] text-muted-gray hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="inline-block mt-2 px-5 py-2.5 rounded-md bg-bronze text-white text-sm font-semibold uppercase tracking-wider hover:bg-gold transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
