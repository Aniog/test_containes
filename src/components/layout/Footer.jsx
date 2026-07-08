import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-[0.2em] uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-ivory/60 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              {/* Pinterest icon */}
              <a href="#" aria-label="Pinterest" className="text-ivory/60 hover:text-gold transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="font-manrope text-xs text-ivory/70 hover:text-gold transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-manrope text-xs text-ivory/70 hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-ivory/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="font-manrope text-xs text-ivory/70 hover:text-gold transition-colors duration-300">
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
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-manrope text-[9px] tracking-wide text-ivory/40 border border-ivory/20 px-2 py-1 rounded-sm"
              >
                {p}
              </span>
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
