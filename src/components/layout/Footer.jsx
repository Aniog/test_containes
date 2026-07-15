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
  { label: 'Shipping & Returns', to: '/#' },
  { label: 'Size Guide', to: '/#' },
  { label: 'Care Instructions', to: '/#' },
  { label: 'FAQ', to: '/#' },
  { label: 'Contact Us', to: '/#' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Sustainability', to: '/#' },
  { label: 'Press', to: '/#' },
  { label: 'Careers', to: '/#' },
  { label: 'Affiliates', to: '/#' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <span className="font-cormorant text-2xl font-light tracking-[0.18em] uppercase text-ivory">
                Velmora
              </span>
            </Link>
            <p className="font-inter text-xs text-ivory/60 leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/60 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/60 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/60 hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-ivory/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-ivory/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-ivory/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-ivory/40 tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-inter text-[9px] text-ivory/40 border border-ivory/20 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-[10px] text-ivory/40 hover:text-ivory/70 transition-colors">Privacy</a>
            <a href="#" className="font-inter text-[10px] text-ivory/40 hover:text-ivory/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
