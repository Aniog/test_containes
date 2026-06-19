import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl tracking-widest text-cream-50 mb-4">
              VELMORA
            </p>
            <p className="text-sm text-cream-300 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday luxury. Designed in-house, made to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream-400 font-medium mb-4">Shop</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold-400 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream-400 font-medium mb-4">Help</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Care Instructions</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">FAQs</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream-400 font-medium mb-4">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Press</Link></li>
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors" aria-label="Twitter">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-wider uppercase text-cream-500 border border-ink-600 px-2 py-1 rounded-sm">Visa</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-500 border border-ink-600 px-2 py-1 rounded-sm">MC</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-500 border border-ink-600 px-2 py-1 rounded-sm">Amex</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-500 border border-ink-600 px-2 py-1 rounded-sm">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
