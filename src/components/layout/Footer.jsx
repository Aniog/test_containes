import { Link } from 'react-router-dom';
import { Instagram, Facebook, Share2 } from 'lucide-react';

const SHOP_LINKS = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const HELP_LINKS = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const COMPANY_LINKS = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'];

export default function Footer() {
  return (
    <footer className="bg-velvet text-ivory/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest2 text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs mb-6">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and made to be treasured.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-champagne transition-colors">
                <Share2 size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-ivory mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {SHOP_LINKS.map(l => (
                <li key={l}>
                  <Link to="/shop" className="font-sans text-sm text-ivory/60 hover:text-champagne transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-ivory mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {HELP_LINKS.map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-sm text-ivory/60 hover:text-champagne transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-ivory mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-sm text-ivory/60 hover:text-champagne transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-mink">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-sans text-[10px] uppercase tracking-wide text-ivory/30 border border-ivory/20 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
