import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-white tracking-wide no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Press</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors font-sans no-underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-sans">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 font-sans">Visa</span>
            <span className="text-xs text-white/40 font-sans">Mastercard</span>
            <span className="text-xs text-white/40 font-sans">Amex</span>
            <span className="text-xs text-white/40 font-sans">Apple Pay</span>
            <span className="text-xs text-white/40 font-sans">Shop Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
