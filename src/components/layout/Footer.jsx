import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-dark text-velmora-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-velmora-dark-text">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4 text-velmora-dark-text">Shop</h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4 text-velmora-dark-text">Help</h3>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-muted hover:text-velmora-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-4 text-velmora-dark-text">Company</h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Terms & Privacy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-muted hover:text-velmora-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-velmora-border-thin/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment Icons */}
            <div className="flex items-center gap-4 text-velmora-muted">
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-velmora-muted">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
