import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-50 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-wide uppercase inline-block">
            Velmora
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
            Crafted to be treasured. Fine and demi-fine jewelry designed for the modern romantic. Effortless elegance for everyday wear.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-stone-300 uppercase">Shop</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><Link to="/shop?category=earrings" className="hover:text-stone-50 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-stone-50 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-stone-50 transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-stone-50 transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6 text-stone-300 uppercase">Help</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><Link to="/faq" className="hover:text-stone-50 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-stone-50 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-stone-50 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-stone-50 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-lg tracking-wider mb-6 text-stone-300 uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><Link to="/about" className="hover:text-stone-50 transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-stone-50 transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="hover:text-stone-50 transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="hover:text-stone-50 transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="opacity-50 text-xs tracking-wider">SECURE CHECKOUT</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
