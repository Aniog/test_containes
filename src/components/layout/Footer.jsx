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
    { label: 'Shipping & Returns', to: '/help' },
    { label: 'Size Guide', to: '/help' },
    { label: 'Care Instructions', to: '/help' },
    { label: 'FAQ', to: '/help' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Press', to: '/press' },
    { label: 'Affiliates', to: '/affiliates' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-gray-light leading-relaxed max-w-xs font-sans">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-warm-gray-light hover:text-champagne transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-warm-gray-light hover:text-champagne transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-warm-gray-light hover:text-champagne transition-colors">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-champagne mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-warm-gray-light hover:text-ivory transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm-gray font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="text-[10px] font-sans text-warm-gray border border-obsidian-mid px-2 py-0.5 rounded"
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
