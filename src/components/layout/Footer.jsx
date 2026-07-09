import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  Help: [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ],
  Company: [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Journal', path: '/journal' },
    { name: 'Press', path: '/press' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-sand">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-widest-2xl text-white mb-4">VELMORA</h2>
            <p className="text-sm leading-relaxed text-velmora-taupe max-w-xs mb-6">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-sans text-[11px] uppercase tracking-widest-xl text-white mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-velmora-stone/30" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-2.5 py-1 border border-velmora-stone/30 rounded text-[10px] text-velmora-taupe uppercase tracking-wider"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
