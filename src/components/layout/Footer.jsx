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
    { label: 'Journal', href: '/#' },
  ],
};

const Footer = () => (
  <footer className="bg-espresso text-parchment">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl tracking-widest2 text-gold block mb-4">
            VELMORA
          </Link>
          <p className="font-manrope text-xs text-parchment/50 leading-relaxed mb-6 max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-parchment/40 hover:text-gold transition-colors duration-300">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-parchment/40 hover:text-gold transition-colors duration-300">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-parchment/40 hover:text-gold transition-colors duration-300">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-manrope text-[10px] tracking-widest uppercase text-gold/80 mb-5">{title}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-parchment/50 hover:text-parchment transition-colors duration-300"
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
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-manrope text-[10px] text-parchment/30 tracking-wider">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {/* Payment icons as text badges */}
          {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
            <span
              key={p}
              className="font-manrope text-[9px] tracking-wider text-parchment/30 border border-white/10 px-2 py-1"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
