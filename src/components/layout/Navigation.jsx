import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=new' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-velmora-bg-primary shadow-sm'
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
              <Menu 
                className={`w-5 h-5 ${shouldBeTransparent ? 'text-white' : 'text-velmora-text-primary'}`} 
              />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-xl md:text-2xl tracking-widest absolute left-1/2 -translate-x-1/2 ${
                shouldBeTransparent ? 'text-white' : 'text-velmora-text-primary'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-200 ${
                    shouldBeTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-velmora-text-secondary hover:text-velmora-text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors duration-200 ${
                  shouldBeTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-velmora-text-secondary hover:text-velmora-text-primary'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 relative transition-colors duration-200 ${
                  shouldBeTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-velmora-text-secondary hover:text-velmora-text-primary'
                }`}
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-velmora-bg-primary">
            <div className="flex items-center justify-between p-4 border-b border-velmora-border">
              <span className="font-serif text-xl tracking-widest">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-4 text-lg tracking-widest uppercase font-serif border-b border-velmora-border"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsSearchOpen(false)} 
          />
          <div className="absolute top-0 left-0 right-0 bg-velmora-bg-primary p-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center border-b border-velmora-text-primary">
                <Search className="w-5 h-5 text-velmora-text-muted mr-4" />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="flex-1 py-4 text-lg bg-transparent outline-none font-sans"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
