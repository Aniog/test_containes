import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-accent-light transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-accent-light transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-accent-light transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Help</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Size Guide</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">FAQ</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Company</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Our Story</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Sustainability</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Journal</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream/40 font-sans">Visa</span>
            <span className="text-xs text-cream/40 font-sans">Mastercard</span>
            <span className="text-xs text-cream/40 font-sans">Amex</span>
            <span className="text-xs text-cream/40 font-sans">PayPal</span>
            <span className="text-xs text-cream/40 font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
