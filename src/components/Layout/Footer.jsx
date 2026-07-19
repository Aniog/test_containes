import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-base text-velmora-cream">
      {/* Newsletter Section */}
      <div className="border-b border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl font-light mb-3">Join the Inner Circle</h3>
            <p className="text-velmora-stone text-sm mb-6">Be the first to know about new collections, exclusive offers, and styling inspiration.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-velmora-charcoal border border-velmora-stone/30 px-4 py-3 text-sm text-velmora-cream placeholder:text-velmora-stone focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button className="bg-velmora-gold text-velmora-base px-6 py-3 text-xs tracking-ultra-wide uppercase font-medium hover:bg-velmora-gold-light transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super-wide font-light text-velmora-cream">
              VELMORA
            </Link>
            <p className="text-velmora-stone text-sm mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-velmora-stone hover:text-velmora-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-velmora-stone text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Bottom Bar */}
        <div className="border-t border-velmora-charcoal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-velmora-stone text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-velmora-stone text-xs">We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span key={method} className="bg-velmora-charcoal px-2 py-1 text-[10px] text-velmora-stone-light rounded">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
