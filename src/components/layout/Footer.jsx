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
  { label: 'Careers', to: '/' },
  { label: 'Affiliates', to: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-velvet text-ivory/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-ivory tracking-widest2 block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-ivory/50 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-champagne transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-champagne transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/50 hover:text-champagne transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-ivory/50 hover:text-champagne transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-ivory/50 hover:text-champagne transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-sans text-xs text-ivory/50 hover:text-champagne transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-mink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-sans text-[10px] text-ivory/30 border border-mink px-2 py-0.5 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
