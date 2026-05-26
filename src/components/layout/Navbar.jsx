import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Mold Sourcing', path: '/mold-sourcing' },
  { label: 'Custom Mold Making', path: '/custom-mold-making' },
  { label: 'Mold Types', path: '/mold-types' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1B4F8A] rounded-lg flex items-center justify-center">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#1B4F8A] font-bold text-lg leading-tight">
              Case Mold<br className="hidden" />
              <span className="text-[#E87722]"> Trading</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1B4F8A] bg-[#1B4F8A]/10'
                    : 'text-[#1A2332] hover:text-[#1B4F8A] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-[#1A2332] hover:bg-[#F7F9FC] transition-colors border-0 bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1B4F8A] bg-[#1B4F8A]/10'
                    : 'text-[#1A2332] hover:text-[#1B4F8A] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors text-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
