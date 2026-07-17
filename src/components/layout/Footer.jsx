import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-champagne">
              Velmora
            </Link>
            <p className="font-sans text-sm text-stone mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-stone hover:text-champagne transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-champagne-light mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-stone hover:text-ivory transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-champagne-light mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-stone hover:text-ivory transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-champagne-light mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(item => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-stone hover:text-ivory transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[10px] text-stone border border-charcoal px-2 py-0.5 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            <a href="#" className="font-sans text-xs text-stone hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-stone hover:text-ivory transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
