import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-cream font-light block mb-4">
              VELMORA
            </Link>
            <p className="text-subtle text-sm leading-relaxed font-sans">
              Demi-fine jewelry crafted for the modern woman. Timeless design, accessible luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-cream font-sans font-medium mb-6">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-muted text-sm font-sans hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-cream font-sans font-medium mb-6">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-muted text-sm font-sans hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-cream font-sans font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-muted text-sm font-sans hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-subtle text-xs font-sans">
            <span className="w-8 h-5 bg-cream/10 rounded-sm flex items-center justify-center text-[8px]">VISA</span>
            <span className="w-8 h-5 bg-cream/10 rounded-sm flex items-center justify-center text-[8px]">MC</span>
            <span className="w-8 h-5 bg-cream/10 rounded-sm flex items-center justify-center text-[8px]">AMEX</span>
            <span className="w-8 h-5 bg-cream/10 rounded-sm flex items-center justify-center text-[8px]">PP</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <p className="text-subtle text-xs font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
