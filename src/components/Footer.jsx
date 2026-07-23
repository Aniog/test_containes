import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">VELMORA</Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-brand-muted-light hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-muted-light hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-brand-muted-light hover:text-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-wider text-brand-muted-light mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-wider text-brand-muted-light mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-wider text-brand-muted-light mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-brand-muted-light">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
