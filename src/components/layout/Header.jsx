import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${isScrolled || !isHome ? 'text-velmora-black' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isScrolled || !isHome ? 'text-velmora-black' : 'text-white'}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <h1
                className={`font-serif text-2xl md:text-3xl tracking-widest-xl transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-velmora-black' : 'text-white'
                }`}
              >
                VELMORA
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/collection' : item === 'Collections' ? '/collection' : '/'}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-velmora-gold ${
                    isScrolled || !isHome ? 'text-velmora-black' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-velmora-gold ${
                  isScrolled || !isHome ? 'text-velmora-black' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-velmora-gold ${
                  isScrolled || !isHome ? 'text-velmora-black' : 'text-white'
                }`}
                onClick={openDrawer}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-velmora-cream md:hidden animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
              <Link
                key={item}
                to={item === 'Shop' ? '/collection' : item === 'Collections' ? '/collection' : '#'}
                className="font-serif text-3xl text-velmora-black hover:text-velmora-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
