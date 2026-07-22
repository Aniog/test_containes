import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/help' },
    { label: 'Size Guide', to: '/help' },
    { label: 'Care Instructions', to: '/help' },
    { label: 'FAQ', to: '/help' },
    { label: 'Contact Us', to: '/help' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Press', to: '/about' },
    { label: 'Careers', to: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-parchment">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-[0.2em] uppercase text-parchment">
              Velmora
            </Link>
            <p className="font-manrope text-xs text-parchment/60 leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-parchment/50 hover:text-gold transition-colors duration-200">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/50 hover:text-gold transition-colors duration-200">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-manrope text-xs tracking-[0.15em] uppercase text-parchment/40 mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-manrope text-xs text-parchment/70 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-manrope text-xs text-parchment/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span key={p} className="font-manrope text-[10px] text-parchment/30 border border-parchment/15 px-2 py-0.5 rounded-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
