import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
  { label: 'New Arrivals', to: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '/help' },
  { label: 'Size Guide', to: '/help' },
  { label: 'Care Instructions', to: '/help' },
  { label: 'FAQ', to: '/help' },
  { label: 'Contact Us', to: '/contact' },
];

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '/about' },
  { label: 'Press', to: '/about' },
  { label: 'Careers', to: '/about' },
];

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-ivory font-light">
              VELMORA
            </Link>
            <p className="font-sans text-ivory/50 text-xs leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman.
              Hypoallergenic, 18K gold plated, made to be worn every day.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-300">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-5">Shop</p>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs font-sans text-ivory/60 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-5">Help</p>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs font-sans text-ivory/60 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] uppercase tracking-widest font-sans text-gold mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs font-sans text-ivory/60 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-ivory/40 uppercase tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="border border-ivory/20 px-2 py-1 rounded-sm"
              >
                <span className="text-[8px] font-sans text-ivory/40 uppercase tracking-wide">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
