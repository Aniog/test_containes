import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop/Earrings' },
  { label: 'Necklaces', to: '/shop/Necklaces' },
  { label: 'Huggies', to: '/shop/Huggies' },
  { label: 'Gift Sets', to: '/shop/Sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'Jewelry Care', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '#' },
  { label: 'Sustainability', to: '#' },
  { label: 'Journal', to: '#' },
  { label: 'Stockists', to: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-oxford text-cream/80">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-cream hover:text-bronze transition-colors duration-300">
              VELMORA
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream/60 max-w-[280px]">
              Demi-fine jewelry crafted to be treasured. Gold-plated pieces designed for everyday elegance and lasting beauty.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-bronze transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-bronze transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-bronze transition-colors duration-300 text-xs font-medium" aria-label="Pinterest">
                Pin
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-cream/50 hover:text-bronze transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cream mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to} className="text-sm text-cream/50 hover:text-bronze transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to} className="text-sm text-cream/50 hover:text-bronze transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
