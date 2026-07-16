import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 uppercase tracking-wider">Visa</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">Mastercard</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">Amex</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
