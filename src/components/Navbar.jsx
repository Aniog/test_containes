import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-parchment/95 backdrop-blur-sm shadow-sm text-obsidian' : 'bg-transparent text-white'
      )}
    >
      {/* Mobile Menu Toggle */}
      <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Brand */}
      <div className="flex-1 flex justify-start lg:block hidden">
        <div className="flex gap-8 items-center text-sm font-medium tracking-wide">
          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-gold transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="text-2xl font-serif tracking-widest absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex-none"
      >
        VELMORA
      </Link>

      {/* Desktop Links */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="lg:flex hidden gap-8 text-sm font-medium tracking-wide mr-8">
          {navLinks.slice(2).map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-gold transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <button className="hover:text-gold transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="relative hover:text-gold transition-colors" onClick={() => setIsCartOpen(true)}>
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-parchment z-[60] p-8 flex flex-col items-center">
          <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col gap-8 mt-20 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-serif"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
