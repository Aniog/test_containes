import { Link } from 'react-router-dom';
import { Instagram, Facebook, Globe } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Bracelets', 'Gift Sets', 'All Jewelry'],
  Help: ['Shipping & Returns', 'FAQ', 'Care Guide', 'Size Guide', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Affiliates', 'Wholesale'],
};

export default function Footer() {
  return (
    <footer className="bg-velvet-900 text-velvet-300">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-velvet-50 tracking-[0.3em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be lived in, loved, and passed down.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velvet-400 hover:text-velvet-100 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-velvet-100 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-velvet-100 transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium text-velvet-100 tracking-widest uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velvet-400 hover:text-velvet-100 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-velvet-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-velvet-500">
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