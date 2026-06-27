import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
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
  }, [location]);

  const navLinks = [
    { to: '/collection', label: 'Shop' },
    { to: '/collection?category=earrings', label: 'Earrings' },
    { to: '/collection?category=necklaces', label: 'Necklaces' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden btn-icon"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-[0.2em] text-charcoal hover:text-gold transition-colors"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs font-sans font-medium tracking-[0.1em] uppercase text-charcoal/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button className="btn-icon hidden md:flex" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="btn-icon relative"
                onClick={() => setCartOpen(true)}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-cream z-50 md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
                <button
                  className="btn-icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg font-serif tracking-wide text-charcoal hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
