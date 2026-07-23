import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Gold that lives with you, every day.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-charcoal-400 hover:text-cream-200 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-cream-200 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-cream-200 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-cream-200 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-cream-200 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Sustainability</a></li>
              <li><Link to="/journal" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-charcoal-400 hover:text-cream-200 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center space-x-3 text-xs text-charcoal-500">
            <span>Visa</span>
            <span className="text-charcoal-700">·</span>
            <span>Mastercard</span>
            <span className="text-charcoal-700">·</span>
            <span>Amex</span>
            <span className="text-charcoal-700">·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}