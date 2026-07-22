import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-warm-950 text-warm-300">
      <div className="container-wide section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-ultra text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be worn, loved, and treasured — every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-warm-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-warm-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-warm-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-warm-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-divider !bg-warm-800 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-warm-500">Visa</span>
            <span className="text-xs text-warm-500">Mastercard</span>
            <span className="text-xs text-warm-500">Amex</span>
            <span className="text-xs text-warm-500">PayPal</span>
            <span className="text-xs text-warm-500">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}