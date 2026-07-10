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
    <footer className="bg-velmora-obsidian text-velmora-text-light">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-widest-xl text-velmora-gold block mb-4">
              VELMORA
            </Link>
            <p className="font-manrope text-xs text-velmora-text-light/50 leading-relaxed mb-6 max-w-48">
              Demi-fine gold jewelry crafted for the modern woman. Timeless pieces, accessible luxury.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-velmora-text-light/40 hover:text-velmora-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-light/40 hover:text-velmora-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-text-light/40 hover:text-velmora-gold transition-colors duration-300">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-velmora-text-light/50 hover:text-velmora-text-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-manrope text-xs text-velmora-text-light/50 hover:text-velmora-text-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-manrope text-xs text-velmora-text-light/50 hover:text-velmora-text-light transition-colors duration-300"
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
      <div className="border-t border-velmora-gold/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-text-light/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(icon => (
              <div
                key={icon}
                className="bg-velmora-charcoal border border-velmora-gold/10 px-2 py-1 font-manrope text-[9px] tracking-wider text-velmora-text-light/30"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs text-velmora-text-light/30 hover:text-velmora-text-light/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-manrope text-xs text-velmora-text-light/30 hover:text-velmora-text-light/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
