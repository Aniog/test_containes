import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Navbar = ({ onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
        isScrolled || !isHome ? 'bg-white text-primary shadow-sm' : 'bg-transparent text-white'
      )}
    >
      <div className="flex-1 flex items-center lg:hidden">
        <Menu className="w-6 h-6 cursor-pointer" />
      </div>

      <div className="flex-1 hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-xs uppercase letter-spacing-wide hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex-1 flex justify-center">
        <Link to="/" className="text-2xl font-serif tracking-widest">
          VELMORA
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end gap-5">
        <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
        <div className="relative cursor-pointer hover:opacity-70 transition-opacity" onClick={onCartClick}>
          <ShoppingBag className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-accent text-primary pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
          <p className="text-sm text-primary/70 leading-relaxed max-w-xs">
            Quiet luxury for the modern woman. Thoughtfully designed, ethically crafted, and made to be treasured.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Twitter className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Shop</h4>
          <ul className="space-y-4 text-xs uppercase letter-spacing-wide text-primary/70">
            <li><Link to="/shop?category=Earrings">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies">Huggies</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Help</h4>
          <ul className="space-y-4 text-xs uppercase letter-spacing-wide text-primary/70">
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/care">Care Guide</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-xs uppercase letter-spacing-wide text-primary/70">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/ethical">Sustainability</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase letter-spacing-wide text-primary/50">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 grayscale opacity-50">
          {/* Payment Icons Placeholder */}
          <span className="text-[10px] uppercase tracking-tighter">Visa</span>
          <span className="text-[10px] uppercase tracking-tighter">Mastercard</span>
          <span className="text-[10px] uppercase tracking-tighter">Amex</span>
          <span className="text-[10px] uppercase tracking-tighter">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};
