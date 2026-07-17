import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();
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
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled || !isHome ? "bg-velmora-bg/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className={cn("w-6 h-6", !isScrolled && isHome ? "text-white" : "text-velmora-text")} />
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-3xl tracking-widest font-light transition-colors duration-500",
            !isScrolled && isHome ? "text-white" : "text-velmora-text"
          )}
        >
          VELMORA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-all duration-300 hover:text-velmora-accent",
                !isScrolled && isHome ? "text-white" : "text-velmora-text"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className={cn("p-2 transition-colors duration-500 hidden sm:block", !isScrolled && isHome ? "text-white hover:text-velmora-accent" : "text-velmora-text hover:text-velmora-accent")}>
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCartOpen(true)}
            className={cn("p-2 transition-colors duration-500 relative group", !isScrolled && isHome ? "text-white hover:text-velmora-accent" : "text-velmora-text hover:text-velmora-accent")}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-velmora-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-velmora-bg z-[100] transition-transform duration-500 lg:hidden",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex justify-between items-center border-b border-velmora-text/5">
          <span className="font-serif text-2xl tracking-widest">VELMORA</span>
          <button onClick={() => setMobileMenuOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-8 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif uppercase tracking-widest hover:text-velmora-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
