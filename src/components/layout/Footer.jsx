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
  { label: 'Affiliates', href: '/' },
  { label: 'Privacy Policy', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-[0.18em] uppercase text-cream">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-cream/50 leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/40 hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/40 hover:text-gold transition-colors duration-300">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/40 hover:text-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-[0.16em] text-cream/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-[0.16em] text-cream/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-[10px] uppercase tracking-[0.16em] text-cream/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-[10px] text-cream/30 tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] uppercase tracking-wide text-cream/30 border border-cream/10 px-2 py-1"
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
