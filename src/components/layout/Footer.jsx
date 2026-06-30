import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

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
  { label: 'Careers', to: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-velvet text-text-on-dark">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-[0.18em] uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-text-on-dark-muted leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-text-on-dark-muted hover:text-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-text-on-dark-muted hover:text-gold transition-colors duration-200">
                <Pinterest size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-text-on-dark-muted hover:text-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-text-on-dark-muted hover:text-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-text-on-dark-muted hover:text-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-[10px] tracking-[0.18em] uppercase text-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-text-on-dark-muted hover:text-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-[11px] text-text-on-dark-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] tracking-wide text-text-on-dark-muted border border-white/10 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-[11px] text-text-on-dark-muted hover:text-ivory transition-colors duration-200">Privacy</a>
            <a href="#" className="font-manrope text-[11px] text-text-on-dark-muted hover:text-ivory transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
