import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
              VELMORA
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
              Direct-to-consumer demi-fine jewelry. Crafted with intention, designed to be treasured forever.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-gray-400 hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={20} className="text-gray-400 hover:text-accent cursor-pointer transition-colors" />
              <Pinterest size={20} className="text-gray-400 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Find Your Size</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Materials & Care</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-widest text-xs font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
             {/* Payment Icons Placeholder */}
             <div className="h-6 w-10 bg-white/5 rounded" />
             <div className="h-6 w-10 bg-white/5 rounded" />
             <div className="h-6 w-10 bg-white/5 rounded" />
             <div className="h-6 w-10 bg-white/5 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
