import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartActions } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCartActions();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-velvet-50/95 backdrop-blur-md text-velvet-900 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-xs tracking-super uppercase font-medium hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link to="/shop/earrings" className="text-xs tracking-super uppercase font-medium hover:opacity-70 transition-opacity">
              Earrings
            </Link>
            <Link to="/shop/necklaces" className="text-xs tracking-super uppercase font-medium hover:opacity-70 transition-opacity">
              Necklaces
            </Link>
            <Link to="/shop/huggies" className="text-xs tracking-super uppercase font-medium hover:opacity-70 transition-opacity">
              Huggies
            </Link>
          </div>

          {/* Logo — center */}
          <Link
            to="/"
            className={`font-serif text-2xl lg:text-3xl tracking-widest absolute left-1/2 -translate-x-1/2 transition-colors duration-500 ${
              isTransparent ? 'text-white' : 'text-velvet-900'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 lg:gap-3">
            <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              className="p-2 hover:opacity-70 transition-opacity relative"
              onClick={openDrawer}
              aria-label={`Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sand-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 pb-6 pt-2 flex flex-col gap-3 ${isTransparent && mobileOpen ? 'bg-velvet-50/95 backdrop-blur-md text-velvet-900' : ''}`}>
          <Link to="/shop" className="text-xs tracking-super uppercase font-medium py-2 border-b border-velvet-100">
            Shop All
          </Link>
          <Link to="/shop/earrings" className="text-xs tracking-super uppercase font-medium py-2 border-b border-velvet-100">
            Earrings
          </Link>
          <Link to="/shop/necklaces" className="text-xs tracking-super uppercase font-medium py-2 border-b border-velvet-100">
            Necklaces
          </Link>
          <Link to="/shop/huggies" className="text-xs tracking-super uppercase font-medium py-2 border-b border-velvet-100">
            Huggies
          </Link>
        </div>
      </div>
    </nav>
  );
}
