import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'All Jewelry'],
  Help: ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Wholesale'],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest">
              VELMORA
            </Link>
            <p className="text-cream/50 text-xs mt-3 leading-relaxed max-w-[200px]">
              Demi-fine jewelry designed to be lived in and treasured. Crafted with care, plated in 18K gold.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-cream/50 text-xs hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-cream/30 text-xs">
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