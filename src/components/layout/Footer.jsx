import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/collection?category=earrings' },
  { label: 'Necklaces', href: '/collection?category=necklaces' },
  { label: 'Huggies', href: '/collection?category=huggies' },
  { label: 'Gift Sets', href: '/collection' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/70 font-sans leading-relaxed">
              Crafted for the modern woman. Demi-fine jewelry designed to be treasured, worn daily, and passed on.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream/70 hover:text-gold transition-colors font-sans no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream/70 hover:text-gold transition-colors font-sans no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-cream/70 hover:text-gold transition-colors font-sans no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50 font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/50 font-sans">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
