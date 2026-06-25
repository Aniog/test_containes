import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { cn } from '../../lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' }
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        (isScrolled || !isHome || isMobileMenuOpen) 
          ? 'bg-[#FAF9F5] text-[#2D2A26] border-b border-[#E5E0D8]/40 py-4 shadow-sm' 
          : 'bg-transparent text-white py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "font-serif text-2xl lg:text-3xl tracking-widest uppercase flex-shrink-0 transition-colors",
              (!isScrolled && isHome && !isMobileMenuOpen) ? "text-white" : "text-[#2D2A26]"
            )}
          >
            Velmora
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-10 flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-sm font-sans tracking-wide uppercase transition-colors hover:opacity-70",
                  (!isScrolled && isHome) ? "text-white/90" : "text-[#2D2A26]/80 hover:text-[#2D2A26]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative hover:opacity-70 transition-opacity"
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#A68D47] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FAF9F5] border-b border-[#E5E0D8]/40 shadow-md p-6 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-lg font-serif uppercase tracking-widest text-[#2D2A26] border-b border-[#E5E0D8]/40 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}