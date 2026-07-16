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
  { label: 'Journal', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-warmwhite">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-warmwhite"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-stone-light leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-stone-light hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone-light hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-stone-light hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-stone-light hover:text-warmwhite transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-gold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-xs text-stone-light hover:text-warmwhite transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-[10px] uppercase tracking-[0.18em] text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-xs text-stone-light hover:text-warmwhite transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[10px] text-stone-light">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="font-inter text-[9px] uppercase tracking-wide text-stone-light border border-white/10 px-2 py-1 rounded-sm"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-[10px] text-stone-light hover:text-warmwhite transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-[10px] text-stone-light hover:text-warmwhite transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
