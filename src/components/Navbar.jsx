import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

const Navbar = ({ isScrolled, isHome }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/#collections' },
    { name: 'About', href: '/#about' },
    { name: 'Journal', href: '/#journal' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between",
        (isScrolled || !isHome) ? "bg-background/95 backdrop-blur-md border-b border-border py-4" : "bg-transparent text-white"
      )}>
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-serif tracking-widest font-semibold">
          VELMORA
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-xs uppercase tracking-widest hover:text-accent transition-colors transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:text-accent transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-[60] bg-background transform transition-transform duration-500 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 flex justify-between items-center border-b border-border">
          <span className="text-xl font-serif tracking-widest">VELMORA</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex flex-col p-8 space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif uppercase tracking-widest border-b border-border pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
