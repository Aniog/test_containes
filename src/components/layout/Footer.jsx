import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
    { label: 'Our Story', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const Footer = () => (
  <footer className="bg-espresso text-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl tracking-widest uppercase text-cream">
            Velmora
          </Link>
          <p className="font-inter text-xs text-cream/50 leading-relaxed mt-4 max-w-[200px]">
            Demi-fine gold jewelry crafted for the modern woman. Wear it every day.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div key={col}>
            <h4 className="font-inter text-[10px] tracking-widest uppercase text-cream/40 mb-4">
              {col}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-cream/70 hover:text-gold transition-colors"
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
        <p className="font-inter text-[10px] text-cream/30 tracking-wider">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((p) => (
            <span
              key={p}
              className="font-inter text-[9px] tracking-wider text-cream/30 border border-cream/10 px-2 py-1"
            >
              {p}
            </span>
          ))}
        </div>

        <p className="font-inter text-[10px] text-cream/30 tracking-wider">
          Privacy · Terms · Cookies
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
