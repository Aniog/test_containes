import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
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
    { label: 'Sustainability', to: '/about' },
    { label: 'Press', to: '/press' },
    { label: 'Careers', to: '/careers' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <footer className="bg-espresso text-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-gold block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-xs text-parchment/50 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-parchment/40 hover:text-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/40 hover:text-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube" className="text-parchment/40 hover:text-gold transition-colors duration-200">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-parchment/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-parchment/70 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-parchment/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-parchment/70 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-parchment/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-parchment/70 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-parchment/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-parchment/30">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-sans text-[9px] font-semibold tracking-wider text-parchment/30 border border-parchment/15 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-parchment/30 hover:text-parchment/60 transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs text-parchment/30 hover:text-parchment/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
