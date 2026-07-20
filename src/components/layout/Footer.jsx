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
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-cormorant text-2xl tracking-widest2 font-medium mb-4">VELMORA</p>
            <p className="font-inter text-xs text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-ivory/40 mb-5">Shop</p>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
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
            <p className="font-inter text-xs tracking-widest uppercase text-ivory/40 mb-5">Help</p>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
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
            <p className="font-inter text-xs tracking-widest uppercase text-ivory/40 mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-inter text-[9px] tracking-wide text-ivory/40 border border-ivory/20 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="font-inter text-xs text-ivory/40">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
