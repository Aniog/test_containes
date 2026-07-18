import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', path: '/shop?category=Earrings' },
      { label: 'Necklaces', path: '/shop?category=Necklaces' },
      { label: 'Huggies', path: '/shop?category=Huggies' },
      { label: 'Gift Sets', path: '/shop?category=Sets' },
      { label: 'New Arrivals', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '#' },
      { label: 'Care Guide', path: '#' },
      { label: 'FAQ', path: '#' },
      { label: 'Contact Us', path: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '#' },
      { label: 'Careers', path: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold text-brand-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-super-wide uppercase font-semibold text-brand-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-muted-light hover:text-brand-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-charcoal-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted-light">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-brand-muted-light">Visa</span>
              <span className="text-xs text-brand-muted-light">Mastercard</span>
              <span className="text-xs text-brand-muted-light">Amex</span>
              <span className="text-xs text-brand-muted-light">PayPal</span>
              <span className="text-xs text-brand-muted-light">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
