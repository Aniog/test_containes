import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop/earrings', label: 'Earrings' },
  { to: '/shop/necklaces', label: 'Necklaces' },
  { to: '/shop/huggies', label: 'Huggies' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-vel-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_#E8E2D9]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-vel-deep"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.2em] text-vel-deep font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            VELMORA
          </Link>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-vel-gold font-medium'
                      : 'text-vel-taupe hover:text-vel-deep'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center text-vel-taupe hover:text-vel-deep transition-colors relative"
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-vel-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center leading-none">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-vel-ivory shadow-2xl animate-[slideInLeft_0.25s_ease-out]">
            <div className="flex items-center justify-between p-4 border-b border-vel-border">
              <span className="font-serif text-lg tracking-[0.2em] text-vel-deep">VELMORA</span>
              <button
                className="w-10 h-10 flex items-center justify-center text-vel-taupe"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-base tracking-wide transition-colors ${
                      isActive
                        ? 'text-vel-gold font-medium'
                        : 'text-vel-taupe hover:text-vel-deep'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
