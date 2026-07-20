import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/">
              <span className="font-cormorant font-light text-3xl tracking-ultra-wide text-ivory">
                VELMORA
              </span>
            </Link>
            <p className="font-inter text-sm text-ivory/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/40 hover:text-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-inter text-xs font-medium tracking-widest uppercase text-ivory/40 mb-5">
                {col}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-inter text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map(p => (
              <span
                key={p}
                className="font-inter text-xs text-ivory/30 border border-ivory/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="font-inter text-xs text-ivory/30">
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
