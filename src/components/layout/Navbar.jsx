import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;
  const textColor = transparent ? 'text-white' : 'text-[var(--color-text-primary)]';
  const bgClass = transparent ? 'bg-transparent' : 'bg-[var(--color-surface)]/95 backdrop-blur-md shadow-sm';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link to="/" className={`font-[var(--font-serif)] text-xl md:text-2xl tracking-[0.3em] font-semibold ${textColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop/earrings', label: 'Earrings' },
              { to: '/shop/necklaces', label: 'Necklaces' },
              { to: '/shop/huggies', label: 'Huggies' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1">
            <button className={`p-2 ${textColor} transition-colors hover:text-[var(--color-accent)]`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleCart} className={`p-2 ${textColor} transition-colors hover:text-[var(--color-accent)] relative`} aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 text-[10px] font-medium bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${textColor} transition-colors`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-6 border-t border-[var(--color-border)] animate-fade-in">
            <div className="flex flex-col gap-4">
              {[
                { to: '/shop', label: 'Shop All' },
                { to: '/shop/earrings', label: 'Earrings' },
                { to: '/shop/necklaces', label: 'Necklaces' },
                { to: '/shop/huggies', label: 'Huggies' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-wider uppercase font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
