import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-light">
              Velmora
            </Link>
            <p className="text-sm text-velmora-taupe mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-taupe mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-taupe mb-4">
              Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-taupe mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-velmora-gold transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-warmgray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges for now */}
            <span className="text-[10px] tracking-wider uppercase bg-white/10 px-2 py-1 rounded">Visa</span>
            <span className="text-[10px] tracking-wider uppercase bg-white/10 px-2 py-1 rounded">MC</span>
            <span className="text-[10px] tracking-wider uppercase bg-white/10 px-2 py-1 rounded">Amex</span>
            <span className="text-[10px] tracking-wider uppercase bg-white/10 px-2 py-1 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
