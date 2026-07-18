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
  <footer className="bg-obsidian text-ivory">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl tracking-widest2 text-ivory block mb-4">
            VELMORA
          </Link>
          <p className="font-inter text-xs text-ivory/50 leading-relaxed max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-ivory/40 hover:text-gold transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-inter text-xs tracking-[0.12em] uppercase text-ivory/60 mb-5">
              {title}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-ivory/40 hover:text-gold transition-colors"
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
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-inter text-xs text-ivory/30">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
            <span
              key={p}
              className="font-inter text-[9px] tracking-wide text-ivory/30 border border-ivory/15 px-2 py-1"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          <a href="#" className="font-inter text-xs text-ivory/30 hover:text-gold transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="font-inter text-xs text-ivory/30 hover:text-gold transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
