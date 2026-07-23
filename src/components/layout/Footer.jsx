import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-charcoal text-white/80 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-3xl text-white tracking-wider block">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed">
              Quiet luxury, thoughtfully crafted. Demi-fine jewelry designed to be treasured.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to="/help"
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Affiliate Program'].map((item) => (
                <li key={item}>
                  <Link
                    to="/company"
                    className="text-sm hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <CreditCard size={24} className="text-white/60" />
              <span className="text-sm text-white/60">Secure payment options</span>
            </div>

            <p className="text-sm text-white/60">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
