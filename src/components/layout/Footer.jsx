import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
  { label: 'New Arrivals', to: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/' },
  { label: 'Size Guide', to: '/' },
  { label: 'Care Instructions', to: '/' },
  { label: 'FAQ', to: '/' },
  { label: 'Contact Us', to: '/' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#story' },
  { label: 'Sustainability', to: '/' },
  { label: 'Press', to: '/' },
  { label: 'Affiliates', to: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-parchment">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.22em] uppercase text-parchment">
              Velmora
            </Link>
            <p className="mt-4 font-sans text-xs text-parchment/60 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-parchment/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-parchment/50 hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-widest text-parchment/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-xs text-parchment/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-widest text-parchment/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-xs text-parchment/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-widest text-parchment/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-xs text-parchment/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-parchment/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[9px] font-medium uppercase tracking-wider text-parchment/30 border border-parchment/20 px-1.5 py-0.5">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
