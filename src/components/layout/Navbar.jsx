import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X, ShoppingCart, Search, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Store', path: '/store' },
  { label: 'Deals', path: '/deals' },
  { label: 'News', path: '/news' },
  { label: 'Favorite Games', path: '/favorite-games' },
];

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              Game<span className="text-brand-light">Vault</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand/20 text-brand-light'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-elevated border border-surface-border text-text-muted hover:text-text-primary hover:border-brand/40 transition-all text-sm">
              <Search className="w-4 h-4" />
              <span>Search games...</span>
            </button>

            <Link
              to="/store"
              className="relative p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/deals"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-brand-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow-sm"
            >
              <Zap className="w-4 h-4" />
              Hot Deals
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-surface-border bg-surface-card">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand/20 text-brand-light'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
