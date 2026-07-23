import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SHOP_LINKS = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const HELP_LINKS = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const COMPANY_LINKS = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'];

const PAYMENT_ICONS = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-cormorant text-2xl tracking-widest text-ivory mb-4">VELMORA</p>
            <p className="font-manrope text-xs text-ivory/60 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/50 hover:text-gold transition-colors">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-ivory/40 mb-5">Shop</h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map(link => (
                <li key={link}>
                  <Link to="/shop" className="font-manrope text-sm text-ivory/70 hover:text-gold transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-ivory/40 mb-5">Help</h4>
            <ul className="space-y-3">
              {HELP_LINKS.map(link => (
                <li key={link}>
                  <a href="#" className="font-manrope text-sm text-ivory/70 hover:text-gold transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-widest uppercase text-ivory/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(link => (
                <li key={link}>
                  <a href="#" className="font-manrope text-sm text-ivory/70 hover:text-gold transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-ivory/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {PAYMENT_ICONS.map(icon => (
              <div
                key={icon}
                className="px-2 py-1 border border-ivory/20 rounded-sm"
              >
                <span className="font-manrope text-[9px] text-ivory/50 tracking-wider">{icon}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Privacy</a>
            <a href="#" className="font-manrope text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
