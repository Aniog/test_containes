import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const openCart = useCartStore((state) => state.openCart);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links (Left) */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors tracking-wide uppercase">Shop</Link>
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors tracking-wide uppercase">Collections</Link>
        </nav>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center">
          <Link to="/">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-foreground font-medium uppercase">
              Velmora
            </h1>
          </Link>
        </div>

        {/* Desktop Nav Links & Icons (Right) */}
        <nav className="hidden md:flex items-center justify-end gap-8 flex-1">
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors tracking-wide uppercase hidden lg:block">About</Link>
          <div className="flex items-center gap-5">
            <button className="text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button
              className="text-foreground hover:text-primary transition-colors relative"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Icons (Right) */}
        <div className="flex md:hidden items-center gap-4">
          <button className="text-foreground" onClick={openCart}>
            <div className="relative">
              <ShoppingBag size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden shadow-lg">
          <nav className="flex flex-col py-4">
            <Link to="/shop" className="px-6 py-4 text-sm font-medium hover:bg-muted transition-colors tracking-wide uppercase border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="px-6 py-4 text-sm font-medium hover:bg-muted transition-colors tracking-wide uppercase border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="px-6 py-4 text-sm font-medium hover:bg-muted transition-colors tracking-wide uppercase border-b border-border/50" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/journal" className="px-6 py-4 text-sm font-medium hover:bg-muted transition-colors tracking-wide uppercase" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </nav>
        </div>
      )}
    </header>
  );
}