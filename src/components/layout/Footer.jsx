import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
  { label: 'Bestsellers', to: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/#' },
  { label: 'Size Guide', to: '/#' },
  { label: 'Care Instructions', to: '/#' },
  { label: 'FAQ', to: '/#' },
  { label: 'Contact Us', to: '/#' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Sustainability', to: '/#' },
  { label: 'Press', to: '/#' },
  { label: 'Careers', to: '/#' },
  { label: 'Affiliates', to: '/#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-widest-xl text-velmora-ivory block mb-4">
              VELMORA
            </Link>
            <p className="font-manrope text-xs text-velmora-ivory/50 leading-relaxed mb-6 max-w-48">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-ivory/40 hover:text-velmora-champagne transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-ivory/40 hover:text-velmora-champagne transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-ivory/40 hover:text-velmora-champagne transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-velmora-ivory/50 hover:text-velmora-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-velmora-ivory/50 hover:text-velmora-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-manrope text-xs text-velmora-ivory/50 hover:text-velmora-ivory transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velmora-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] uppercase tracking-wider text-velmora-ivory/30 border border-velmora-ivory/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="font-manrope text-xs text-velmora-ivory/30 hover:text-velmora-ivory/60 transition-colors">Privacy</a>
            <a href="#" className="font-manrope text-xs text-velmora-ivory/30 hover:text-velmora-ivory/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
