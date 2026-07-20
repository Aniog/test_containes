import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-900 text-deep-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-xl text-cream tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-deep-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold plated, hypoallergenic, designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-deep-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-deep-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-deep-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Care Guide</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-wider uppercase text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Journal</a></li>
              <li><a href="#" className="font-sans text-sm text-deep-400 hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="hairline-divider border-deep-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-deep-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 font-sans text-xs text-deep-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}