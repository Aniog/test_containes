import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
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
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const Footer = () => (
  <footer className="bg-espresso text-ivory">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl font-light tracking-[0.25em] uppercase text-ivory block mb-4">
            Velmora
          </Link>
          <p className="font-inter text-xs text-ivory/60 leading-relaxed mb-6 max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-300">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors duration-300 font-inter text-xs">
              P
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-inter text-xs uppercase tracking-widest text-ivory/40 mb-5">{title}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors duration-300"
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
        <p className="font-inter text-xs text-ivory/40">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
            <span
              key={p}
              className="font-inter text-[9px] uppercase tracking-wider text-ivory/40 border border-ivory/20 px-2 py-1"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          <a href="#" className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Privacy</a>
          <a href="#" className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
