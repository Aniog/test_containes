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
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.599-.299-1.484c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.141-.828 3.33-.236.996.5 1.807 1.48 1.807 1.776 0 3.142-1.872 3.142-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.33 1.779.744 2.28a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.58-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.78 0 3.45-2.176 6.228-5.195 6.228-1.014 0-1.968-.527-2.294-1.15l-.624 2.378c-.226.87-.835 1.958-1.244 2.622.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Sets', href: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', href: '#' },
      { label: 'Returns & Exchanges', href: '#' },
      { label: 'Care Guide', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay'];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white hover:opacity-70 transition-opacity">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-brand-taupe mt-3 max-w-xs leading-relaxed">
              Demi-fine gold jewelry crafted for the modern woman. Elevated essentials for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-taupe hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-taupe hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-taupe hover:text-brand-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-brand-taupe hover:text-brand-gold transition-colors"
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
        <div className="mt-12 pt-8 border-t border-brand-charcoal-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-brand-taupe">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="font-sans text-xs text-brand-taupe uppercase tracking-wider"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}