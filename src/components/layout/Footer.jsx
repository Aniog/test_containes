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
    { label: 'Sustainability', href: '/#' },
    { label: 'Press', href: '/#' },
    { label: 'Careers', href: '/#' },
    { label: 'Privacy Policy', href: '/#' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'];

const Footer = () => (
  <footer className="bg-velmora-ink text-velmora-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-velmora-gold/15">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="font-cormorant text-2xl font-medium tracking-[0.25em] uppercase text-velmora-cream block mb-4"
          >
            Velmora
          </Link>
          <p className="font-inter text-xs text-velmora-cream/50 leading-relaxed mb-6 max-w-[200px]">
            Demi-fine gold jewelry crafted for everyday luxury. Worn daily, treasured always.
          </p>
          {/* Social */}
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-velmora-cream/40 hover:text-velmora-gold transition-colors">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-inter text-[11px] tracking-[0.15em] uppercase text-velmora-gold mb-5">
              {heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-velmora-cream/50 hover:text-velmora-cream transition-colors"
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
        <p className="font-inter text-[11px] text-velmora-cream/30 tracking-wide">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-2">
          {paymentIcons.map((icon) => (
            <span
              key={icon}
              className="font-inter text-[9px] tracking-wide border border-velmora-cream/15 text-velmora-cream/40 px-2 py-1 rounded-sm"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
