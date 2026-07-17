import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    { href: '/collection', label: 'Shop' },
    { href: '/collection?category=earrings', label: 'Earrings' },
    { href: '/collection?category=necklaces', label: 'Necklaces' },
    { href: '/collection?category=huggies', label: 'Huggies' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-ivory/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wider transition-colors ${
                isScrolled || !isHome ? 'text-charcoal' : 'text-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm tracking-wider text-warm-gray hover:text-charcoal transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleDrawer}
                className="p-2 text-charcoal hover:text-gold transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs flex items-center justify-center rounded-full">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-ivory shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-hairline">
              <span className="font-serif text-xl tracking-wider">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-lg tracking-wider text-warm-gray hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
