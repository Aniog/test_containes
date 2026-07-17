import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Affiliates'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.12em] font-semibold text-cream">
              VELMORA
            </Link>
            <p className="font-sans text-sm leading-relaxed mt-4 max-w-xs text-cream/50">
              Demi-fine jewelry for the modern woman. Crafted in 18K gold plate, designed to be treasured every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-sm text-cream/50 hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-sm text-cream/50 hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-sm text-cream/50 hover:text-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 font-sans text-xs text-cream/40">
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
