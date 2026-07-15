import { Link } from 'react-router-dom';
import { Instagram, Facebook, Share2 } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/#' },
    { label: 'Size Guide', to: '/#' },
    { label: 'Care Instructions', to: '/#' },
    { label: 'FAQ', to: '/#' },
    { label: 'Contact Us', to: '/#' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/#' },
    { label: 'Press', to: '/#' },
    { label: 'Careers', to: '/#' },
    { label: 'Journal', to: '/#' },
  ],
};

const Footer = () => (
  <footer className="bg-charcoal text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-white mb-4">
            Velmora
          </p>
          <p className="font-inter text-xs text-white/60 leading-relaxed max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-white/50 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/50 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-white/50 hover:text-gold transition-colors">
              <Share2 size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div key={col}>
            <p className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-white/80 mb-4">
              {col}
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-xs text-white/50 hover:text-gold transition-colors"
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
        <p className="font-inter text-xs text-white/40">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
            <span
              key={p}
              className="font-inter text-[9px] font-medium text-white/40 border border-white/15 px-2 py-1 rounded-sm"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/#" className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/#" className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
