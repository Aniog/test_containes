import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-warm-gray leading-relaxed">
              Crafted for the modern woman. Demi-fine jewelry designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-brand-warm-gray mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-brand-warm-gray mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-brand-warm-gray mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Press</a></li>
              <li><a href="#" className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors no-underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-brand-warm-gray">Visa</span>
            <span className="text-xs text-brand-warm-gray">•</span>
            <span className="text-xs text-brand-warm-gray">Mastercard</span>
            <span className="text-xs text-brand-warm-gray">•</span>
            <span className="text-xs text-brand-warm-gray">Apple Pay</span>
            <span className="text-xs text-brand-warm-gray">•</span>
            <span className="text-xs text-brand-warm-gray">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
