import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-charcoal">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-xs text-warm-gray leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it daily, treasure it always.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.238 2.636 7.855 6.356 9.312-.087-.791-.167-2.005.035-2.868.182-.78 1.172-4.971 1.172-4.971s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.329-.236.995.5 1.807 1.48 1.807 1.776 0 3.143-1.873 3.143-4.577 0-2.393-1.72-4.066-4.174-4.066-2.843 0-4.512 2.134-4.512 4.339 0 .859.331 1.779.744 2.28a.3.3 0 0 1 .069.288c-.076.317-.245.998-.278 1.137-.044.183-.145.222-.334.134-1.247-.582-2.027-2.405-2.027-3.874 0-3.153 2.291-6.048 6.607-6.048 3.468 0 6.162 2.472 6.162 5.777 0 3.447-2.173 6.222-5.19 6.222-1.013 0-1.965-.526-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.622A10.03 10.03 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal mb-5">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Care Guide</a></li>
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Journal</Link></li>
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Sustainability</a></li>
              <li><a href="#" className="font-sans text-sm text-warm-gray hover:text-charcoal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Payment icons & bottom */}
        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.15em] text-warm-gray font-sans">We Accept</span>
            <div className="flex gap-3">
              <span className="text-xs text-warm-gray font-sans">Visa</span>
              <span className="text-xs text-warm-gray font-sans">MC</span>
              <span className="text-xs text-warm-gray font-sans">Amex</span>
              <span className="text-xs text-warm-gray font-sans">PayPal</span>
              <span className="text-xs text-warm-gray font-sans">Afterpay</span>
            </div>
          </div>
          <p className="text-[10px] text-warm-gray font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}