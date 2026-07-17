import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Sets', 'Gift Cards'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stores', 'Careers'];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-cream/70">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-2xl tracking-[0.25em] text-brand-gold">VELMORA</span>
            <p className="mt-4 text-sm leading-relaxed text-brand-cream/50 max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. 18K gold-plated, hypoallergenic, designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-cream/50 hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-brand-cream/50 hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-brand-cream/50 hover:text-brand-gold transition-colors" aria-label="Youtube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-cream/90 mb-4">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-cream/90 mb-4">Help</h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((l) => (
                <li key={l}>
                  <Link to="#" className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-brand-cream/90 mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <Link to="#" className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-cream/30">
          <span>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}