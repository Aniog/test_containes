import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest-editorial mb-6 block">
              VELMORA
            </Link>
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-xs">
              Crafting timeless, demi-fine jewelry for the modern woman. Quiet luxury designed to be treasured for a lifetime.
            </p>
            <div className="flex gap-5 mt-8">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-gold transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-gold transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 invisible md:visible">Shop</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400 uppercase tracking-wider">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop/earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 invisible md:visible">Help</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400 uppercase tracking-wider">
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter (Simplified for footer) */}
          <div>
            <h4 className="font-serif text-lg mb-6">Stay Connected</h4>
            <p className="text-gray-400 font-sans text-sm mb-6">
              Join us for 10% off your first order and exclusive access to new launches.
            </p>
            <div className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-xs font-sans tracking-widest-editorial w-full outline-none placeholder:text-gray-600"
              />
              <button className="text-gray-400 hover:text-gold">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-sans tracking-[0.2em] uppercase text-gray-500">
          <p>© {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
          <div className="flex gap-4 opacity-50">
            {/* Payment icons placeholders */}
            <div className="border border-gray-700 px-2 py-1 rounded">VISA</div>
            <div className="border border-gray-700 px-2 py-1 rounded">MC</div>
            <div className="border border-gray-700 px-2 py-1 rounded">AMEX</div>
            <div className="border border-gray-700 px-2 py-1 rounded">PAYPAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
