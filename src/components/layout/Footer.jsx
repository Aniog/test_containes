import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop' },
      { label: 'New Arrivals', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/' },
      { label: 'Care Guide', path: '/' },
      { label: 'FAQ', path: '/' },
      { label: 'Contact Us', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/' },
      { label: 'Careers', path: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-muted-light mt-3 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted-light hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-wide font-sans font-semibold mb-4 text-velmora-gold">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-muted-light hover:text-white transition-colors"
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
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-velmora-muted-light">Visa</span>
            <span className="text-xs text-velmora-muted-light">Mastercard</span>
            <span className="text-xs text-velmora-muted-light">Amex</span>
            <span className="text-xs text-velmora-muted-light">PayPal</span>
            <span className="text-xs text-velmora-muted-light">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
