import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-[#e0dbd2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#b8b0a4] max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Everyday elegance, responsibly made.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#9a9288] hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#9a9288] hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-[#9a9288] hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-[#b8b0a4] hover:text-velmora-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#b8b0a4] hover:text-velmora-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#b8b0a4] hover:text-velmora-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8c8680]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-3 text-xs text-[#8c8680]">
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
