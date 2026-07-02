import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-base text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-medium">
              VELMORA
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Meticulously crafted gold jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Materials & Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] uppercase tracking-ultra-wide text-gray-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
             <span className="text-[10px] uppercase tracking-[0.1em] text-gray-400 px-2 py-1 border border-white/10 rounded font-sans">Visa</span>
             <span className="text-[10px] uppercase tracking-[0.1em] text-gray-400 px-2 py-1 border border-white/10 rounded font-sans">Mastercard</span>
             <span className="text-[10px] uppercase tracking-[0.1em] text-gray-400 px-2 py-1 border border-white/10 rounded font-sans">AMEX</span>
             <span className="text-[10px] uppercase tracking-[0.1em] text-gray-400 px-2 py-1 border border-white/10 rounded font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
