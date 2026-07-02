import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '/shipping' },
      { label: 'Returns & Exchanges', path: '/returns' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
];

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna',
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] font-semibold block mb-4">
              VELMORA
            </Link>
            <p className="text-stone-light text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label={`Social link ${i}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-stone-light mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-300"
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
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-stone-light bg-white/5 px-3 py-1.5 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-stone-light">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}