import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c2825] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-[0.2em] block mb-4">
              Velmora
            </Link>
            <p className="text-sm text-[#9a9490] leading-relaxed mb-6">
              Demi-fine jewelry crafted to be treasured. Timeless pieces for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#9a9490] hover:text-[#d4a853] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9a9490] hover:text-[#d4a853] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9a9490] hover:text-[#d4a853] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="velmora-heading text-sm tracking-[0.15em] mb-6">Shop</h3>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[#9a9490] hover:text-[#d4a853] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="velmora-heading text-sm tracking-[0.15em] mb-6">Help</h3>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#9a9490] hover:text-[#d4a853] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="velmora-heading text-sm tracking-[0.15em] mb-6">Company</h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#9a9490] hover:text-[#d4a853] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-[#3d3835]">
          <div className="max-w-md mx-auto text-center">
            <Mail className="w-6 h-6 mx-auto mb-4 text-[#d4a853]" />
            <h3 className="velmora-heading text-lg tracking-[0.1em] mb-2">Join the Velmora World</h3>
            <p className="text-sm text-[#9a9490] mb-6">Subscribe for 10% off your first order and exclusive access to new collections.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[#3d3835] border border-[#4a4542] text-[#faf8f5] placeholder-[#6b6560] text-sm focus:outline-none focus:border-[#d4a853] transition-colors"
              />
              <button type="submit" className="velmora-btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3d3835] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6560]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6b6560]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(card => (
                <span key={card} className="px-2 py-1 bg-[#3d3835] rounded text-[10px] text-[#9a9490]">
                  {card}
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
