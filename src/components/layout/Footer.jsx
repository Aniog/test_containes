import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Contact Us', 'FAQs', 'Shipping & Returns', 'Size Guide', 'Care Guide'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-sand-light">
      <div className="container-max section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warmwhite">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated, hypoallergenic, designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-stone hover:text-gold transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-warmwhite mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-stone hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-warmwhite mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-stone hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-warmwhite mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-stone hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-divider border-espresso-light/30 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-stone">
            <span className="tracking-widest uppercase text-[10px]">VISA</span>
            <span className="tracking-widest uppercase text-[10px]">MC</span>
            <span className="tracking-widest uppercase text-[10px]">AMEX</span>
            <span className="tracking-widest uppercase text-[10px]">PAYPAL</span>
            <span className="tracking-widest uppercase text-[10px]">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
