import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, CreditCard } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ];

  const helpLinks = [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
    { label: 'Track Order', to: '#' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '#' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
    { label: 'Journal', to: '#' },
  ];

  return (
    <footer className="bg-espresso-950 text-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 lg:py-20">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-3xl tracking-mega-wide font-light text-warm-100 block mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              VELMORA
            </Link>
            <p className="text-warm-400 text-sm leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman —
              premium quality, accessible luxury.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-warm-400 hover:text-warm-100 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-warm-400 hover:text-warm-100 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-warm-400 hover:text-warm-100 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-warm-300 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-warm-400 hover:text-warm-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-warm-300 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-warm-400 hover:text-warm-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-ultra-wide text-warm-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-warm-400 hover:text-warm-100 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-espresso-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-500 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-warm-500">
            <CreditCard size={24} />
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
