import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

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
    <footer className="bg-obsidian text-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-stone/30">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-widest text-parchment mb-4">VELMORA</p>
            <p className="text-xs text-ink-faint leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ink-faint hover:text-gold transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ink-faint hover:text-gold transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ink-faint hover:text-gold transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs tracking-widest uppercase font-medium text-parchment mb-4">{section}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-ink-faint hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">© 2024 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="text-[10px] text-stone border border-stone/30 px-2 py-0.5 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
