import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=necklaces' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '/#' },
  { label: 'Size Guide', href: '/#' },
  { label: 'Care Instructions', href: '/#' },
  { label: 'FAQ', href: '/#' },
  { label: 'Contact Us', href: '/#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '/#' },
  { label: 'Press', href: '/#' },
  { label: 'Careers', href: '/#' },
  { label: 'Affiliates', href: '/#' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif font-medium text-2xl tracking-widest uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors font-sans text-xs font-medium">
                P
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-ivory mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-ivory mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-ivory mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-ivory/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons (text-based) */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-sans text-[10px] font-medium uppercase tracking-wider text-ivory/40 border border-ivory/20 px-2 py-1 rounded-sm"
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
