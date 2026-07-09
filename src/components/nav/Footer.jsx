import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'];
const helpLinks = ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl text-ivory tracking-[0.2em] uppercase mb-4">Velmora</p>
            <p className="font-sans text-xs leading-relaxed text-ivory/60 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-ivory/50 hover:text-gold transition-colors">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/40 mb-4">Shop</p>
            <ul className="space-y-2.5">
              {shopLinks.map(l => (
                <li key={l}>
                  <Link to="/shop" className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/40 mb-4">Help</p>
            <ul className="space-y-2.5">
              {helpLinks.map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/40 mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map(l => (
                <li key={l}>
                  <a href="#" className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-[11px] text-ivory/30">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] uppercase tracking-wide text-ivory/30 border border-ivory/10 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
