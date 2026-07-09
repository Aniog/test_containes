import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '/' },
  { label: 'Size Guide', href: '/' },
  { label: 'Care Instructions', href: '/' },
  { label: 'FAQ', href: '/' },
  { label: 'Contact Us', href: '/' },
];

const companyLinks = [
  { label: 'Our Story', href: '/#story' },
  { label: 'Sustainability', href: '/' },
  { label: 'Press', href: '/' },
  { label: 'Careers', href: '/' },
  { label: 'Affiliates', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-widest2 uppercase text-cream block mb-4">
              Velmora
            </Link>
            <p className="font-manrope text-sm text-cream/60 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-cream/50 hover:text-gold transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-sm text-cream/70 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-sm text-cream/70 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="font-manrope text-sm text-cream/70 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-manrope text-[10px] text-cream/30 border border-cream/10 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs text-cream/40 hover:text-cream/70 transition-colors duration-300">Privacy</a>
            <a href="#" className="font-manrope text-xs text-cream/40 hover:text-cream/70 transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
