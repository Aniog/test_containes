import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-superwide font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-warmgray mt-4 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-warmgray hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-warmgray hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-warmgray hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5 text-gold">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-warmgray hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-warmgray hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-warmgray hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-warmgray hover:text-cream transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-warmgray hover:text-cream transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5 text-gold">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium mb-5 text-gold">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-warmgray hover:text-cream transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmgray">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-warmgray">
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