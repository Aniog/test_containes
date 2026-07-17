import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/60 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-sans text-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-sans text-cream mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-sans text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-cream/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
