import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
  const helpLinks = ['Shipping & Returns', 'Size Guide', 'Care Guide', 'Contact Us', 'Track Order'];
  const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'];

  return (
    <footer className="bg-espresso text-cream-dark pt-16 pb-8">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-widest font-semibold text-cream"
              style={{ letterSpacing: '0.28em' }}
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe-light leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Premium materials, accessible prices, timeless design.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-taupe-light hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe-light hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe-light hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-taupe-light hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream font-semibold mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-taupe-light hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-taupe-light hover:text-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-taupe/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-taupe">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="flex gap-3 text-taupe-light text-sm">
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
