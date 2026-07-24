import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/collection' },
      { label: 'Earrings', path: '/collection' },
      { label: 'Necklaces', path: '/collection' },
      { label: 'Sets', path: '/collection' },
      { label: 'Bestsellers', path: '/collection' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '/' },
      { label: 'Returns & Exchanges', path: '/' },
      { label: 'FAQ', path: '/' },
      { label: 'Track Order', path: '/' },
      { label: 'Contact Us', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/' },
      { label: 'Our Story', path: '/' },
      { label: 'Sustainability', path: '/' },
      { label: 'Careers', path: '/' },
      { label: 'Press', path: '/' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Heart, label: 'Pinterest' },
  { icon: Twitter, label: 'Twitter' },
];

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.15em] text-ivory font-light"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 border border-ivory/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm tracking-[0.1em] uppercase text-ivory font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory/60 hover:text-ivory transition-colors"
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
        <div className="mt-12 pt-8 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-ivory/40 border border-ivory/10 px-3 py-1.5 rounded-sm"
                >
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-ivory/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}