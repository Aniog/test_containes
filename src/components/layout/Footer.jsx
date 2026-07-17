import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Guide', 'FAQ'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top: Logo + Newsletter hint */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-white">
              VELMORA
            </Link>
            <p className="text-stone/60 text-sm mt-4 max-w-xs leading-relaxed">
              Demi-fine gold jewelry crafted for life's everyday moments and most cherished occasions.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-stone/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="text-stone/50 hover:text-gold transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-stone/50 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs uppercase tracking-widest font-medium text-warm-white mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-stone/60 hover:text-gold transition-colors"
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone/40">Visa</span>
            <span className="text-xs text-stone/40">Mastercard</span>
            <span className="text-xs text-stone/40">Amex</span>
            <span className="text-xs text-stone/40">PayPal</span>
            <span className="text-xs text-stone/40">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}