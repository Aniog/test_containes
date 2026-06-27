import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Sets', 'Gift Cards', 'Bestsellers'];
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-vel-deep text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        {/* Top: Newsletter */}
        <div className="grid md:grid-cols-2 gap-10 items-end pb-14 border-b border-white/10">
          <div>
            <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-3">
              Join the Velmora Circle
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Receive 10% off your first order, early access to new collections, and
              notes from our design studio.
            </p>
          </div>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/8 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-vel-gold transition-colors"
            />
            <button className="bg-vel-gold hover:bg-vel-gold-hover text-white px-6 py-3 text-sm font-medium tracking-wide rounded-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-14 pb-14 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="text-white/40 text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry for the modern woman. Crafted to be treasured,
              priced to be worn every day.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-white/50">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link
                    to={`/shop/${l.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-sm text-white/65 hover:text-vel-gold transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-white/50">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="#"
                    className="text-sm text-white/65 hover:text-vel-gold transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] mb-4 text-white/50">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link
                    to="#"
                    className="text-sm text-white/65 hover:text-vel-gold transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-vel-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-vel-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-vel-gold transition-colors" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
