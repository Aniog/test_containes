import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/collection' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent 
            ? 'bg-transparent' 
            : 'bg-cream/95 backdrop-blur-md border-b border-sand/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className={`w-5 h-5 ${shouldBeTransparent ? 'text-white' : 'text-charcoal'}`} />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-xl md:text-2xl tracking-ultra-wide absolute left-1/2 -translate-x-1/2 ${
                shouldBeTransparent ? 'text-white' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs tracking-widest uppercase transition-colors hover:opacity-70 ${
                    shouldBeTransparent ? 'text-white' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                className={`p-2 transition-colors hover:opacity-70 ${shouldBeTransparent ? 'text-white' : 'text-charcoal'}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className={`p-2 transition-colors hover:opacity-70 relative ${shouldBeTransparent ? 'text-white' : 'text-charcoal'}`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-80 max-w-full bg-cream animate-slide-in">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-charcoal" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl text-charcoal hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <div className="h-px bg-sand mb-6" />
                <p className="text-xs text-warmGray tracking-wider uppercase">Follow Us</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-charcoal hover:text-gold transition-colors text-sm">Instagram</a>
                  <a href="#" className="text-charcoal hover:text-gold transition-colors text-sm">Pinterest</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
