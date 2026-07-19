import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-background/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              Velmora
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
                Shop
              </Link>
              <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-accent transition-colors">
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-accent transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-accent transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 hover:text-accent transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between p-5 border-b border-border/50">
            <Link to="/" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              Velmora
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            <Link to="/shop" className="text-lg tracking-widest uppercase py-4 border-b border-border/30" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="text-lg tracking-widest uppercase py-4 border-b border-border/30" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="text-lg tracking-widest uppercase py-4 border-b border-border/30" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="text-lg tracking-widest uppercase py-4 border-b border-border/30" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
