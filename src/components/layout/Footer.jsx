import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 leading-loose max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces to be treasured for a lifetime.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-8 tracking-wider">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/rings" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-8 tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-8 tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500">
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
          <div className="flex gap-6">
            <Instagram size={18} className="hover:text-white cursor-pointer" />
            <Facebook size={18} className="hover:text-white cursor-pointer" />
          </div>
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
