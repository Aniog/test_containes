import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-product text-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/40 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/collection?category=earrings" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Huggies</Link></li>
              <li><Link to="/collection" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/40 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Size Guide</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-cream/40 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Our Story</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Press</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-normal">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream/40 uppercase tracking-wider">Visa</span>
            <span className="text-xs text-cream/40">•</span>
            <span className="text-xs text-cream/40 uppercase tracking-wider">Mastercard</span>
            <span className="text-xs text-cream/40">•</span>
            <span className="text-xs text-cream/40 uppercase tracking-wider">Amex</span>
            <span className="text-xs text-cream/40">•</span>
            <span className="text-xs text-cream/40 uppercase tracking-wider">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
