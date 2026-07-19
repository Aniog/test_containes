import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Size Guide', 'Care Guide'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Journal', 'Careers', 'Press'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep-base text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top section: Logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + social */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-3 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured, worn, and passed down.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm uppercase tracking-[0.15em] text-white/60 mb-4 font-medium">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-brand-gold transition-colors"
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
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 uppercase tracking-widest">Visa</span>
            <span className="text-xs text-white/40 uppercase tracking-widest">MC</span>
            <span className="text-xs text-white/40 uppercase tracking-widest">Amex</span>
            <span className="text-xs text-white/40 uppercase tracking-widest">PayPal</span>
            <span className="text-xs text-white/40 uppercase tracking-widest">Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
}