import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-widest2 uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/60 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-ivory/50 hover:text-gold transition-colors duration-200">
                <Pinterest size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="font-inter text-xs text-ivory/70 hover:text-ivory transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-inter text-xs text-ivory/70 hover:text-ivory transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-inter text-xs text-ivory/70 hover:text-ivory transition-colors duration-200">
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-ivory/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="font-inter text-[9px] tracking-wide text-ivory/40 border border-ivory/20 px-2 py-1 rounded-sm"
              >
                {method}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Privacy</a>
            <a href="#" className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
