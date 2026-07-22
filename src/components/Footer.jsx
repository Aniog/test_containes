import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest uppercase block mb-4"
            >
              Velmora
            </Link>
            <p className="text-sm text-taupe-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in New York, worn everywhere.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-taupe-light">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-taupe-light">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-taupe-light">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/press" className="hover:text-gold transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Payment icons as text badges for simplicity */}
            <span className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 rounded-sm">
              Visa
            </span>
            <span className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 rounded-sm">
              Mastercard
            </span>
            <span className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 rounded-sm">
              Amex
            </span>
            <span className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 rounded-sm">
              PayPal
            </span>
          </div>

          <p className="text-xs text-taupe-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
