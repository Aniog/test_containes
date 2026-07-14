import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=new' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-nav shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} style={{ color: 'var(--color-warm-black)' }} />
            </button>

            {/* Left - Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wider hover:text-gold transition-colors"
                  style={{ color: isScrolled ? 'var(--color-warm-black)' : 'var(--color-warm-black)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Center - Logo */}
            <Link 
              to="/" 
              className="absolute left-1/2 transform -translate-x-1/2 font-serif text-2xl tracking-[0.3em]"
              style={{ color: 'var(--color-warm-black)' }}
            >
              VELMORA
            </Link>

            {/* Right - Icons */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 hover:opacity-60 transition-opacity"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search size={20} style={{ color: 'var(--color-warm-black)' }} />
              </button>
              
              <button 
                className="p-2 hover:opacity-60 transition-opacity relative"
                aria-label="Shopping bag"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} style={{ color: 'var(--color-warm-black)' }} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-cream text-xs flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream border-t px-4 py-4 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search 
                  size={18} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                  style={{ color: 'var(--color-muted)' }} 
                />
                <input 
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full pl-12 pr-4 py-3 bg-ivory border-none outline-none text-sm"
                  style={{ color: 'var(--color-warm-black)' }}
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal/50 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div 
            className="fixed left-0 top-0 bottom-0 w-80 bg-cream z-50 lg:hidden shadow-xl animate-slide-in"
          >
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-champagne)' }}>
              <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="block py-4 text-lg border-b"
                  style={{ borderColor: 'var(--color-champagne)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
