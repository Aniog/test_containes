import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-widest2 text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-400 leading-relaxed max-w-[220px]">
              Demi-fine gold jewelry crafted for the modern woman. Quiet luxury, made to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-charcoal-400 hover:text-cream-100 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-cream-100 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-cream-100 transition-colors" aria-label="Pinterest">
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-widest2 uppercase text-cream-100 mb-5">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-widest2 uppercase text-cream-100 mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact Us'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] font-semibold tracking-widest2 uppercase text-cream-100 mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-charcoal-500">
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
