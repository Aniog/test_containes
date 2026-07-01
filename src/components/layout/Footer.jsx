import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
  { label: 'New Arrivals', href: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Journal', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-widest-xl text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 font-sans leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/50 hover:text-velmora-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/50 hover:text-velmora-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-white/40 mb-5">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-white/40 mb-5">
              Help
            </h3>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-sans font-semibold text-white/40 mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((brand) => (
              <span
                key={brand}
                className="text-[10px] font-sans font-semibold text-white/30 border border-white/10 px-2 py-1 rounded-sm"
              >
                {brand}
              </span>
            ))}
          </div>

          <p className="text-xs text-white/30 font-sans flex items-center gap-1">
            Made with <Heart size={10} className="text-velmora-gold" /> for jewelry lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
