import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/' },
    { label: 'Size Guide', to: '/' },
    { label: 'Care Instructions', to: '/' },
    { label: 'FAQ', to: '/' },
    { label: 'Contact Us', to: '/' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Affiliates', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-champagne/20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-light text-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-stone leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-champagne transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-champagne transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-stone hover:text-champagne transition-colors">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-champagne mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-stone hover:text-ivory transition-colors"
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
          <p className="font-sans text-xs text-stone/60">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] font-semibold tracking-wider text-stone/50 border border-stone/20 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="font-sans text-xs text-stone/40">
            Designed with care · Shipped worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
