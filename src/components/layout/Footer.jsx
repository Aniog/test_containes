import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream/90">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide text-cream">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 mt-4 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-cream/70 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/70 hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream/40 border border-cream/20 px-2 py-0.5 rounded">Visa</span>
            <span className="text-xs text-cream/40 border border-cream/20 px-2 py-0.5 rounded">Mastercard</span>
            <span className="text-xs text-cream/40 border border-cream/20 px-2 py-0.5 rounded">Amex</span>
            <span className="text-xs text-cream/40 border border-cream/20 px-2 py-0.5 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
