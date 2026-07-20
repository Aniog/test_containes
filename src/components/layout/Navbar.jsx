import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl lg:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/shop?category=earrings" className="nav-link">Collections</Link>
              <a href="#about" className="nav-link">About</a>
              <a href="#journal" className="nav-link">Journal</a>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-accent transition-colors" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="p-2 hover:text-accent transition-colors relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="serif-heading text-3xl py-2 border-b border-border" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="serif-heading text-3xl py-2 border-b border-border" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <a href="#about" className="serif-heading text-3xl py-2 border-b border-border" onClick={() => setMobileOpen(false)}>
              About
            </a>
            <a href="#journal" className="serif-heading text-3xl py-2 border-b border-border" onClick={() => setMobileOpen(false)}>
              Journal
            </a>
          </div>
        </div>
      )}
    </>
  );
}
