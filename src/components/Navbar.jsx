import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(28,28,28,0.06)]'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';
  const borderColor = scrolled || !isHome ? 'border-charcoal/20' : 'border-white/30';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial ${navBg}`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Left — Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.15em] font-medium ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center — Desktop links */}
            <div className={`hidden md:flex items-center gap-10 text-sm font-medium tracking-wide ${textColor}`}>
              <Link to="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
              <Link to="/shop?filter=collections" className="hover:opacity-60 transition-opacity">Collections</Link>
              <Link to="/#story" className="hover:opacity-60 transition-opacity">About</Link>
              <Link to="/#journal" className="hover:opacity-60 transition-opacity">Journal</Link>
            </div>

            {/* Right — Icons */}
            <div className={`flex items-center gap-4 md:gap-5 ${textColor}`}>
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
                className="hover:opacity-60 transition-opacity"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                aria-label="Cart"
                className="relative hover:opacity-60 transition-opacity"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-warm-gold text-[10px] font-semibold text-white">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-serif text-charcoal">
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop?filter=collections" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/#story" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/#journal" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className={`fixed inset-x-0 top-16 md:top-20 z-40 border-b ${borderColor} bg-white/95 backdrop-blur-sm px-6 py-4`}>
          <div className="mx-auto max-w-[1280px]">
            <input
              type="text"
              placeholder="Search jewelry..."
              autoFocus
              className="w-full bg-transparent text-charcoal placeholder:text-stone outline-none text-base py-2"
            />
          </div>
        </div>
      )}
    </>
  );
}
