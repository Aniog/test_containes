import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'What is AI', href: '#what-is-ai' },
  { label: 'Technologies', href: '#ai-technologies' },
  { label: 'Applications', href: '#ai-applications' },
  { label: 'Timeline', href: '#ai-timeline' },
  { label: 'Future', href: '#future-of-ai' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ai-dark/90 backdrop-blur-md border-b border-indigo-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <span className="text-slate-100 font-bold text-base tracking-tight">AI Explorer</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo('#future-of-ai')}
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
        >
          Explore Future
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ai-dark/95 backdrop-blur-md border-b border-indigo-500/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-slate-300 hover:text-white text-base font-medium text-left transition-colors duration-200 py-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
