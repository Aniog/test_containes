import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=Earrings' },
  { label: 'Necklaces', href: '/shop?category=Necklaces' },
  { label: 'Huggies', href: '/shop?category=Huggies' },
  { label: 'Gift Sets', href: '/shop?category=Sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '#' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Affiliates', href: '#' },
  { label: 'Journal', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory font-light">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-ivory/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the woman who values beauty in the everyday.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/40 hover:text-gold transition-colors">
                <Pinterest size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5 font-semibold">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors tracking-wide">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5 font-semibold">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors tracking-wide">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/40 mb-5 font-semibold">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-sans text-xs text-ivory/60 hover:text-gold transition-colors tracking-wide">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30 tracking-wide">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-ivory/30 border border-ivory/10 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-ivory/30 hover:text-ivory/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
