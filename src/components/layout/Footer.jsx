import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-velmora-divider mt-20 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/">
            <h2 className="text-2xl font-serif tracking-widest text-charcoal">VELMORA</h2>
          </Link>
          <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">
            Timeless jewelry for the modern woman. Crafted with care in 18K gold plating, designed to be treasured everyday.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="#" className="text-charcoal/40 hover:text-charcoal transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-charcoal/40 hover:text-charcoal transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-charcoal/40 hover:text-charcoal transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h3 className="text-xs uppercase tracking-velmora font-semibold mb-6">Shop</h3>
          <ul className="space-y-4 text-sm text-charcoal/60">
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">All Jewelry</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Earrings</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Necklaces</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Huggies</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="text-xs uppercase tracking-velmora font-semibold mb-6">Help</h3>
          <ul className="space-y-4 text-sm text-charcoal/60">
            <li><Link to="#" className="hover:text-charcoal transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Jewelry Care</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Sizing Guide</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-charcoal transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-velmora font-semibold mb-6">Stay Inspired</h3>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            Join the Velmora community for exclusive early access and style inspiration.
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-parchment border-none border-b border-velmora-divider py-3 pr-10 focus:ring-0 focus:border-charcoal text-sm transition-colors outline-none h-12 px-4"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Mail className="w-4 h-4 text-charcoal/40 hover:text-charcoal transition-colors" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-velmora-divider flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-charcoal/40">
          © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center space-x-6 opacity-40">
          {/* Payment Icons Placeholder */}
          <span className="text-[10px] uppercase tracking-widest">VISA</span>
          <span className="text-[10px] uppercase tracking-widest">MASTERCARD</span>
          <span className="text-[10px] uppercase tracking-widest">AMEX</span>
          <span className="text-[10px] uppercase tracking-widest">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
