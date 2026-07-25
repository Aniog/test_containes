import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isHome 
    ? `fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-velmora-bg/95 backdrop-blur-md text-velmora-text border-velmora-border/50 py-4' : 'bg-transparent text-white border-transparent py-6'}`
    : `sticky top-0 left-0 right-0 z-40 bg-velmora-bg/95 backdrop-blur-md text-velmora-text border-b border-velmora-border/50 py-4`;

  const logoColor = (isHome && !isScrolled) ? 'text-white' : 'text-velmora-text';

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl tracking-[0.25em] lg:w-1/3 ${logoColor}`}>
            VELMORA
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center gap-10 w-1/3 text-sm tracking-widest uppercase">
            <Link to="/shop" className="hover:text-velmora-accent transition-colors">Shop</Link>
            <Link to="/shop?category=collections" className="hover:text-velmora-accent transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-velmora-accent transition-colors">About</Link>
            <Link to="/journal" className="hover:text-velmora-accent transition-colors">Journal</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-6 w-1/3">
            <button className="hidden md:block hover:text-velmora-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:text-velmora-accent transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-bg p-6 lg:hidden flex flex-col">
          <div className="flex justify-between items-center mb-12">
             <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-text" onClick={() => setIsMobileMenuOpen(false)}>
              VELMORA
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <Menu className="w-6 h-6" /> {/* Replace with X ideally, but reusing Menu for simplicity if X not imported */}
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-serif tracking-widest uppercase items-center">
             <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
             <Link to="/shop?category=earrings" onClick={() => setIsMobileMenuOpen(false)}>Earrings</Link>
             <Link to="/shop?category=necklaces" onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </div>
        </div>
      )}
    </>
  );
}
