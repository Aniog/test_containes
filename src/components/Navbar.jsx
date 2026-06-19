import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/cart';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore(state => state.items);
  const openCart = useCartStore(state => state.openCart);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = 
    isScrolled || !isHome
      ? "bg-background/90 backdrop-blur-md border-b border-border/50 text-foreground"
      : "bg-transparent text-white";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile Menu Toggle / Desktop Empty Space (or logo) */}
            <div className="flex items-center lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            
            {/* Desktop Links (Left) */}
            <div className="hidden lg:flex flex-1 items-center space-x-8">
              <Link to="/collection" className="text-sm tracking-wide uppercase hover:text-primary transition-colors">Shop</Link>
              <Link to="/collection" className="text-sm tracking-wide uppercase hover:text-primary transition-colors">Collections</Link>
              <Link to="/" className="text-sm tracking-wide uppercase hover:text-primary transition-colors">About</Link>
              <Link to="/" className="text-sm tracking-wide uppercase hover:text-primary transition-colors">Journal</Link>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center lg:justify-center">
              <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase whitespace-nowrap">
                Velmora
              </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex-1 flex items-center justify-end space-x-6">
              <button className="p-1 hover:text-primary transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={openCart} className="p-1 hover:text-primary transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase">Velmora</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col py-8 px-6 space-y-6 flex-1 overflow-y-auto">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/collection" className="text-2xl font-serif">Shop All</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/collection" className="text-2xl font-serif">Earrings</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/collection" className="text-2xl font-serif">Necklaces</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/collection" className="text-2xl font-serif">Huggies</Link>
              <div className="pt-8 border-t border-border mt-8 flex flex-col space-y-4">
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground">About Us</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground">Journal</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground">Help & FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}