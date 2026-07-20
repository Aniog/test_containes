import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Affiliates', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-cormorant text-3xl tracking-widest-xl text-velmora-ivory">
              VELMORA
            </Link>
            <p className="font-manrope text-xs text-velmora-subtle mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-subtle hover:text-velmora-gold transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="text-velmora-subtle hover:text-velmora-gold transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-subtle hover:text-velmora-gold transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-xs uppercase tracking-widest text-velmora-ivory mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors duration-200"
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
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-subtle">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="bg-velmora-charcoal border border-velmora-charcoal px-2 py-1 rounded-sm"
              >
                <span className="font-manrope text-[9px] text-velmora-subtle tracking-wider">{icon}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="font-manrope text-xs text-velmora-subtle hover:text-velmora-gold transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
