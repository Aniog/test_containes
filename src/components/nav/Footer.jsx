import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=necklaces' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/' },
    { label: 'Size Guide', to: '/' },
    { label: 'Care Instructions', to: '/' },
    { label: 'FAQ', to: '/' },
    { label: 'Contact Us', to: '/' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Affiliates', to: '/' },
    { label: 'Privacy Policy', to: '/' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-ivory"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/50 leading-relaxed mt-4 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, 18K gold plated.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-champagne transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-champagne transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/40 hover:text-champagne transition-colors">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-inter text-[10px] uppercase tracking-[0.15em] text-ivory/40 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-inter text-xs text-ivory/60 hover:text-ivory transition-colors"
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
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[11px] text-ivory/30">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="font-inter text-[9px] uppercase tracking-wide text-ivory/30 border border-ivory/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
