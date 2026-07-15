import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Track Order', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
  },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'Youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + Social */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-widest text-cream-100">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-ink-400 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-ink-700 flex items-center justify-center text-ink-400 hover:text-cream-100 hover:border-cream-100 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-2 md:col-start-auto">
              <h4 className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-300 hover:text-cream-100 transition-colors font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ink-500">Visa</span>
            <span className="text-xs text-ink-500">MC</span>
            <span className="text-xs text-ink-500">Amex</span>
            <span className="text-xs text-ink-500">PayPal</span>
            <span className="text-xs text-ink-500">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}