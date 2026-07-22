import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/#' },
    { label: 'Size Guide', to: '/#' },
    { label: 'Care Instructions', to: '/#' },
    { label: 'FAQ', to: '/#' },
    { label: 'Contact Us', to: '/#' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/#' },
    { label: 'Press', to: '/#' },
    { label: 'Careers', to: '/#' },
    { label: 'Journal', to: '/#' },
  ],
};

const Footer = () => (
  <footer className="bg-espresso text-ivory/80">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl font-light tracking-widest2 text-ivory">
            VELMORA
          </Link>
          <p className="font-inter text-xs text-ivory/50 mt-4 leading-relaxed max-w-[200px]">
            Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, 18K gold plated.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-inter text-xs uppercase tracking-widest2 text-ivory/40 mb-5">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-xs text-ivory/60 hover:text-gold transition-colors"
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
          {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
            <span
              key={p}
              className="font-inter text-[9px] uppercase tracking-wide text-ivory/30 border border-ivory/15 px-2 py-1"
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
