import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

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
    { label: 'Careers', href: '/' },
    { label: 'Journal', href: '/' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-text-inverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-velmora-stone/30">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-velmora-cream block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-text-muted leading-relaxed mb-6 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-text-muted hover:text-velmora-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-muted hover:text-velmora-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-velmora-text-muted hover:text-velmora-gold transition-colors">
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-cream mb-5 font-600">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors"
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
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velmora-text-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="bg-velmora-stone/30 border border-velmora-stone/40 px-2 py-1 rounded-sm"
              >
                <span className="font-sans text-[9px] tracking-wide text-velmora-text-muted font-600">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
