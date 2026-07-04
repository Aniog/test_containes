import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music2 } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-text-light">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-[0.2em] uppercase text-velmora-gold">
              Velmora
            </Link>
            <p className="font-manrope text-sm text-velmora-text-muted mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Music2 size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-xs tracking-widest uppercase text-velmora-sand font-medium mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200"
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
      <div className="border-t border-velmora-stone/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-xs text-velmora-text-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-manrope text-[10px] text-velmora-text-muted border border-velmora-stone/40 px-2 py-1 rounded-sm"
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
