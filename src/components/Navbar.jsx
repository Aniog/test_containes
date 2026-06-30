import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome 
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'
        }`}
        style={{ 
          backgroundColor: isScrolled || !isHome ? 'rgba(250, 248, 245, 0.95)' : 'transparent' 
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-2xl tracking-[0.2em] text-charcoal"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-wider text-charcoal/80 hover:text-gold transition-colors"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button 
                className="text-charcoal hover:text-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              
              <button 
                className="text-charcoal hover:text-gold transition-colors relative"
                aria-label="Cart"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-[10px] text-cream bg-charcoal rounded-full"
                    style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-cream)' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-charcoal"
                aria-label="Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-2xl text-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pb-8">
            <button 
              className="flex items-center gap-2 text-charcoal/60"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
            >
              <ShoppingBag size={20} />
              <span>Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}