import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'Bestsellers', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/#' },
    { label: 'Size Guide', href: '/#' },
    { label: 'Care Instructions', href: '/#' },
    { label: 'FAQ', href: '/#' },
    { label: 'Contact Us', href: '/#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/#' },
    { label: 'Press', href: '/#' },
    { label: 'Careers', href: '/#' },
    { label: 'Affiliates', href: '/#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-text-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-velmora-stone">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-medium tracking-widest2 uppercase text-velmora-text-light hover:text-velmora-gold transition-colors duration-200"
            >
              Velmora
            </Link>
            <p className="font-manrope text-xs text-velmora-text-muted mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, ethically made, and designed to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="font-manrope text-xs tracking-widest uppercase text-velmora-text-light mb-5 font-medium">
                {col}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200"
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
          <p className="font-manrope text-xs text-velmora-text-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-manrope text-[9px] tracking-wider uppercase text-velmora-text-muted border border-velmora-stone px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-5">
            <a href="#" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
