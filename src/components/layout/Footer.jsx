import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.1em] font-medium">
              VELMORA
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces to treasure every day.
            </p>
            <div className="flex space-x-5">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-wider">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
            <span>APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
