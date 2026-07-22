import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pin } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Contact Us', 'FAQs', 'Shipping & Returns', 'Jewelry Care', 'Size Guide'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'],
};

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] font-semibold text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be treasured, every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <Pin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-white/60 mb-5 font-medium">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-white/40 hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
