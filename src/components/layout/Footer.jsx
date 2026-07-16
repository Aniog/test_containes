import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

// Simple SVG placeholder for Pinterest since it's not available in this lucide version
function PinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="6" x2="12" y2="18" />
      <path d="M8 12c0 0 2-2 4-2s4 2 4 2" />
    </svg>
  );
}

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-cream/50 mt-4 leading-relaxed max-w-[220px]">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated, hypoallergenic, designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/90 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/50 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/90 mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/50 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/90 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/50 hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Pinterest">
              <PinIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/30">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
