import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

function PinterestIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2.1 0-3 .2-.9 1.4-5.7 1.4-5.7s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 .9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.5-1.8-4.2-4.4-4.2-3 0-4.8 2.2-4.8 4.5 0 .9.3 1.9.7 2.4.1.1.1.2.1.4-.1.3-.2.9-.3 1-.1.4-.3.5-.6.3-1.1-.5-1.8-2.1-1.8-3.4 0-2.7 2-5.2 5.7-5.2 3 0 5.3 2.1 5.3 5 0 3-1.8 5.4-4.3 5.4-.8 0-1.6-.4-1.9-.9l-.5 1.9c-.2.7-.7 1.6-1.1 2.2.9.3 1.8.4 2.7.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'Gift Sets', path: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', path: '/shipping' },
    { label: 'Care Guide', path: '/care' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ],
  Company: [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Careers', path: '/careers' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wider text-warm-charcoal">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-warm-gray leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Every piece, a treasure.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Pinterest">
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-widest font-medium text-warm-charcoal mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-warm-gray hover:text-warm-charcoal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-beige">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-warm-gray">
              <span className="text-xs uppercase tracking-wider">Visa</span>
              <span className="text-xs uppercase tracking-wider">Mastercard</span>
              <span className="text-xs uppercase tracking-wider">Amex</span>
              <span className="text-xs uppercase tracking-wider">PayPal</span>
              <span className="text-xs uppercase tracking-wider">Apple Pay</span>
            </div>
            <p className="text-xs text-warm-gray/60">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}