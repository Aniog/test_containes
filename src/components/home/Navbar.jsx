import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: '功能特性', href: '#features' },
  { label: '演示', href: '#demo' },
  { label: '安装步骤', href: '#how-it-works' },
  { label: '用户评价', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f1117]/90 backdrop-blur-md border-b border-[#2e3347]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-slate-100 text-lg">
            HTML<span className="text-violet-400">2MD</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#install"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold px-5 py-2 rounded-xl hover:opacity-90 transition"
          >
            免费安装
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1d27] border-b border-[#2e3347] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-slate-100 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#install"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center hover:opacity-90 transition"
            onClick={() => setMenuOpen(false)}
          >
            免费安装
          </a>
        </div>
      )}
    </nav>
  );
}
