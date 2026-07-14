import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { navLinks } from '../../data/products';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isHomePage && !isScrolled 
    ? 'bg-transparent' 
    : 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm';

  const textColor = isHomePage && !isScrolled 
    ? 'text-white' 
    : 'text-[#1C1917]';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 -ml-2 ${textColor}`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Navigation - Left */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-medium tracking-[0.15em] uppercase ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-2xl md:text-3xl tracking-[0.15em] absolute left-1/2 -translate-x-1/2 ${textColor}`}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation - Right */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-medium tracking-[0.15em] uppercase ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button 
                className={`p-2 -mr-2 hidden md:block ${textColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                onClick={toggleCart}
                className={`p-2 -mr-2 relative ${textColor}`}
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#C4A962] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        <div className={`h-px ${isScrolled ? 'bg-[#E7E5E4]' : 'bg-white/20'}`} />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#FAFAF8] z-50 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#E7E5E4]">
            <span className="font-serif text-xl tracking-[0.15em]">VELMORA</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-[#1C1917]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="flex-1 p-6">
            <div className="space-y-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm font-medium tracking-[0.15em] uppercase text-[#1C1917] hover:text-[#C4A962] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="p-6 border-t border-[#E7E5E4]">
            <button className="flex items-center gap-3 text-sm text-[#57534E] hover:text-[#1C1917] transition-colors">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
