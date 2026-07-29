import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Waves } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur border-b border-border-ocean sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-teal-ocean rounded-xl flex items-center justify-center">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-navy tracking-tight">
              Slug<span className="text-teal-ocean">Sea</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-slate-text font-medium hover:text-teal-ocean transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 rounded-xl hover:bg-surface-alt transition-colors text-slate-text hover:text-teal-ocean"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="hidden md:block bg-teal-ocean text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-teal-ocean-dark transition-colors"
              onClick={() => navigate('/shop')}
            >
              Shop Now
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-surface-alt transition-colors text-slate-text"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-ocean bg-white px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-slate-text font-medium py-2 hover:text-teal-ocean transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            className="bg-teal-ocean text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-teal-ocean-dark transition-colors mt-2"
            onClick={() => { navigate('/shop'); setMenuOpen(false); }}
          >
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
}
