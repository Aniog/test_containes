import { Link } from 'react-router-dom';
import { Instagram, Pin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-deep text-velmora-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-velmora-stone max-w-xs">
              Demi-fine gold jewelry designed to be treasured. Crafted with 18K gold plating for lasting luminosity.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <Pin size={18} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-ivory mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-ivory mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-ivory mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-borderDark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-3 text-xs text-velmora-stone">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>PayPal</span>
            <span>·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
