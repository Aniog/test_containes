import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/shop">Collections</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Journal</NavLink>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl tracking-[0.2em] transition-colors duration-500 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-2">
            <button
              className={`p-2 transition-colors duration-500 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              className={`p-2 relative transition-colors duration-500 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
              onClick={toggleCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/30 py-4 flex flex-col gap-3 pb-6">
            <MobileNavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Collections</MobileNavLink>
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Journal</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-xs tracking-[0.08em] uppercase text-inherit hover:text-accent transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-sm tracking-widest uppercase py-2 text-foreground hover:text-accent transition-colors"
    >
      {children}
    </Link>
  );
}
