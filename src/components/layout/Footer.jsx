import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream-100/80">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/50">
              Demi-fine jewelry designed to be lived in, loved, and passed down.
              Crafted with 18K gold plating and an eye for the extraordinary.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-100/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-100/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-100/50 hover:text-white transition-colors" aria-label="Pinterest">
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm tracking-wider text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="text-sm text-cream-100/50 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-100/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-cream-100/40">
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