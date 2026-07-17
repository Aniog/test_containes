import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/#shipping' },
    { label: 'Size Guide', href: '/#size' },
    { label: 'Care Instructions', href: '/#care' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact Us', href: '/#contact' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/#sustainability' },
    { label: 'Press', href: '/#press' },
    { label: 'Affiliates', href: '/#affiliates' },
    { label: 'Privacy Policy', href: '/#privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-cormorant text-2xl tracking-[0.2em] uppercase text-cream"
            >
              Velmora
            </Link>
            <p className="font-manrope text-xs text-cream/60 leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be
              treasured, worn every day, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs text-cream/60 hover:text-cream transition-colors duration-300"
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
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-[11px] text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-manrope text-[9px] tracking-wide text-cream/40 border border-cream/20 px-1.5 py-0.5"
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
