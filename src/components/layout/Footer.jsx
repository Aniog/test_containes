import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-ivory hover:text-gold transition-colors duration-200 block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-ivory-muted hover:text-gold transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-ivory-muted hover:text-gold transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-ivory-muted hover:text-gold transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-sm text-ivory-muted hover:text-ivory transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-ivory-muted hover:text-ivory transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-ivory-muted hover:text-ivory transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(card => (
              <div key={card} className="bg-stone/30 border border-stone/40 rounded px-2 py-1">
                <span className="font-sans text-[9px] font-semibold text-ivory-muted tracking-wider">{card}</span>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-ivory-muted">
            Designed with care · 18K Gold Plated · Hypoallergenic
          </p>
        </div>
      </div>
    </footer>
  );
}
