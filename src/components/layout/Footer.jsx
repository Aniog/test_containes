import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-50 pt-16 pb-8 border-t border-stone-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase mb-6 inline-block">
              VELMORA
            </Link>
            <p className="text-stone-400 text-sm mb-6 max-w-xs">
              Crafting accessible luxury. Demi-fine jewelry designed to be treasured every day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/shop" className="hover:text-amber-500 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-amber-500 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-amber-500 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-amber-500 transition-colors">Huggies</Link></li>
              <li><Link to="/collections/new" className="hover:text-amber-500 transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-amber-500 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-amber-500 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-amber-500 transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-amber-500 transition-colors">Sustainability</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-stone-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;