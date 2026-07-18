import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
};

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Top: Logo + Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-light tracking-widest text-white">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-white/50 mt-3 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Ethical, timeless, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Pinterest">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/60 mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span
                key={method}
                className="font-sans text-[10px] uppercase tracking-wider text-white/30 bg-white/5 px-2.5 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}