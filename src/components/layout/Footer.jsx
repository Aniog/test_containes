import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-gold-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="md:col-span-1 border-b border-stone-800 md:border-0 pb-8 md:pb-0">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-4">
              Velmora
            </Link>
            <p className="text-stone-400 text-sm max-w-sm mx-auto md:mx-0">
              Quiet luxury and demi-fine gold jewelry for the modern romantic.
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-gold-100">Shop</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li><Link to="/collections/all" className="hover:text-gold-500 transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-gold-500 transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-gold-500 transition-colors">Earrings</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-gold-500 transition-colors">Huggies</Link></li>
              <li><Link to="/collections/gifts" className="hover:text-gold-500 transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-gold-100">Help</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li><Link to="/faq" className="hover:text-gold-500 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-gold-500 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-gold-500 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide text-gold-100">Company</h4>
            <ul className="space-y-4 text-sm text-stone-300">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold-500 transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold-500 transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="hover:text-gold-500 transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Payment icons placeholder */}
            <span className="opacity-60">Visa</span>
            <span className="opacity-60">Mastercard</span>
            <span className="opacity-60">Amex</span>
            <span className="opacity-60">PayPal</span>
            <span className="opacity-60">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;