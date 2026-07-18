import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-warmwhite">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl tracking-[0.25em] text-gold mb-4">VELMORA</h3>
            <p className="text-warmgray text-sm leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be worn, loved, and treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-warmgray">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop/earrings" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-warmgray">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-warmgray">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-warmwhite/70 hover:text-gold transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-warmwhite/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="#" className="text-warmwhite/50 hover:text-gold transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-warmwhite/50 hover:text-gold transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-warmwhite/50 hover:text-gold transition-colors"><Heart size={18} /></a>
          </div>
          <div className="flex items-center gap-4 text-xs text-warmgray tracking-wider uppercase">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
          <p className="text-xs text-warmgray">&copy; {new Date().getFullYear()} Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  );
}
