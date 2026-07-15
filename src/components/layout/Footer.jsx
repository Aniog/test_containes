import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'Contact Us', 'FAQ'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'];

export default function Footer() {
  return (
    <footer className="bg-deepbrown text-cream/80 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-cream">VELMORA</Link>
            <p className="text-sm mt-5 leading-relaxed text-cream/60 font-sans">
              Demi-fine jewelry designed to be lived in, loved, and passed down. 18K gold-plated pieces for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream font-sans font-medium mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors font-sans">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream font-sans font-medium mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors font-sans">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream font-sans font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream/60 hover:text-gold transition-colors font-sans">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-sans">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-cream/30 font-sans">
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
