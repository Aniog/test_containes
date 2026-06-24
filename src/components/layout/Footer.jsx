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
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-cream/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-velmora-gold/15">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="block text-2xl font-light tracking-[0.2em] uppercase text-velmora-cream mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Velmora
            </Link>
            <p className="text-xs leading-relaxed text-velmora-cream/50 mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-cream mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="text-xs text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-cream mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-cream mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] text-velmora-cream/30 tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="text-[9px] font-semibold tracking-wider text-velmora-cream/30 border border-velmora-cream/15 px-2 py-1 rounded-sm"
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
