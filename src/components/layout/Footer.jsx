import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 font-medium">Shop</h4>
            <div className="flex flex-col gap-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'All Jewelry'].map((label) => (
                <Link
                  key={label}
                  to="/shop"
                  className="text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 font-medium">Help</h4>
            <div className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-5 font-medium">Company</h4>
            <div className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Journal', 'Stockists'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </div>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Pinterest">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 tracking-wider">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.15em] uppercase text-cream/40">
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
