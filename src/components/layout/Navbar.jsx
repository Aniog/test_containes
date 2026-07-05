import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '@/store';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, setCartOpen } = useStore();
  
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = isHome && !isScrolled && !isMobileMenuOpen;
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparent 
          ? 'bg-transparent text-foreground' 
          : 'bg-background/95 backdrop-blur-md shadow-sm text-foreground'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl tracking-[0.2em] font-serif font-semibold absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link to="/collection" className="hover:text-primary transition-colors">SHOP</Link>
          <Link to="/collection?category=Collections" className="hover:text-primary transition-colors">COLLECTIONS</Link>
          <Link to="#" className="hover:text-primary transition-colors">ABOUT</Link>
          <Link to="#" className="hover:text-primary transition-colors">JOURNAL</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="hover:text-primary transition-colors relative"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-background border-t border-border flex flex-col p-8 gap-6 text-lg">
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-border pb-4">Shop All</Link>
          <Link to="/collection?category=Earrings" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-border pb-4">Earrings</Link>
          <Link to="/collection?category=Necklaces" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-border pb-4">Necklaces</Link>
          <Link to="/collection?category=Huggies" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary border-b border-border pb-4">Huggies</Link>
        </div>
      )}
    </header>
  );
}