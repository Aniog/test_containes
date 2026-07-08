import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '/' },
  { label: 'Size Guide', href: '/' },
  { label: 'Care Instructions', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'Contact Us', href: '/' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '/' },
  { label: 'Press', href: '/' },
  { label: 'Careers', href: '/' },
  { label: 'Affiliates', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl text-cream tracking-[0.18em] uppercase font-light">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-cream/50 leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/40 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/40 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Youtube" className="text-cream/40 hover:text-gold transition-colors">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-cream/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors">
                    {l.label}
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
          <p className="font-manrope text-xs text-cream/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="font-manrope text-[9px] tracking-wide text-cream/30 border border-white/10 px-1.5 py-0.5">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
