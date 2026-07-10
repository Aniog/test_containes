import { useState } from 'react';
import { Gamepad2, Menu, X, ShoppingCart, Search } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Deals', href: '#deals' },
  { label: 'News', href: '#news' },
  { label: 'Articles', href: '#articles' },
  { label: 'Store', href: '#store' },
];

const Navbar = ({ cartCount = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-game-bg/90 backdrop-blur-md border-b border-game-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-game-purple rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-game-text font-bold text-lg tracking-tight">
              0701 <span className="text-game-purple">Game</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-game-muted hover:text-game-text text-sm font-medium transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg border border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60 transition-all duration-200 bg-transparent">
              <Search className="w-4 h-4" />
            </button>
            <a href="#store" className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60 transition-all duration-200">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-game-purple text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
            <a
              href="#store"
              className="hidden md:inline-flex items-center bg-game-purple hover:bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 no-underline"
            >
              Browse Store
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-game-border text-game-muted hover:text-game-text transition-all duration-200 bg-transparent"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-game-surface border-t border-game-border px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-game-muted hover:text-game-text text-sm font-medium py-2 transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#store"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-game-purple hover:bg-purple-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 no-underline"
          >
            Browse Store
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
