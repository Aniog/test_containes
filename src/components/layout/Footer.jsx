import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
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
  { label: 'Journal', href: '/#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-stone/20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-widest uppercase text-cream">
              Velmora
            </Link>
            <p className="font-inter text-xs text-cream/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/50 hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-cream/40 mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-inter text-xs text-cream/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-cream/40 mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-inter text-xs text-cream/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-cream/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-inter text-xs text-cream/70 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-cream/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-inter text-[9px] uppercase tracking-wider text-cream/30 border border-cream/10 px-2 py-1"
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
