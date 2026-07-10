import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Navigation.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();
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
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled || !isHome ? 'navigation--solid' : ''} ${isMobileMenuOpen ? 'navigation--menu-open' : ''}`}>
        <div className="navigation__container">
          {/* Mobile Menu Button */}
          <button 
            className="navigation__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="navigation__logo">
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="navigation__links">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`navigation__link ${location.pathname === link.to ? 'navigation__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="navigation__icons">
            <button className="navigation__icon" aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="navigation__icon navigation__cart" 
              onClick={openCart}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="navigation__cart-count">{cartCount}</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navigation__mobile-menu ${isMobileMenuOpen ? 'navigation__mobile-menu--open' : ''}`}>
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="navigation__mobile-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="navigation__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}