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
    { label: 'Shipping & Returns', href: '/#' },
    { label: 'Size Guide', href: '/#' },
    { label: 'Care Instructions', href: '/#' },
    { label: 'FAQ', href: '/#' },
    { label: 'Contact Us', href: '/#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Sustainability', href: '/#' },
    { label: 'Press', href: '/#' },
    { label: 'Careers', href: '/#' },
  ],
};

// Simple payment icon SVGs as inline components
const PaymentIcons = () => (
  <div className="flex items-center gap-3 flex-wrap">
    {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(name => (
      <div
        key={name}
        className="bg-white/10 border border-white/10 rounded px-2 py-1 text-[9px] uppercase tracking-widest font-sans text-ivory/50"
      >
        {name}
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer className="bg-velvet border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-serif text-xl tracking-widest2 text-ivory font-light block mb-4">
            VELMORA
          </Link>
          <p className="text-xs font-sans text-ivory/40 leading-relaxed mb-6 max-w-[200px]">
            Demi-fine gold jewelry crafted for the modern woman.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-ivory/40 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-ivory/40 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="text-ivory/40 hover:text-gold transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-[10px] uppercase tracking-widest font-sans text-ivory/50 mb-5">
              {heading}
            </h3>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs font-sans text-ivory/60 hover:text-ivory transition-colors duration-200"
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
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[10px] font-sans text-ivory/30 uppercase tracking-widest">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>
        <PaymentIcons />
      </div>
    </div>
  </footer>
);

export default Footer;
