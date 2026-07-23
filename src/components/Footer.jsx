import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <h3 
              className="font-serif text-2xl text-cream-50"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </h3>
            <p 
              className="text-cream-300 text-sm leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Demi-fine jewelry designed for life's meaningful moments. 
              Crafted with care, worn with love.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-gold transition-colors" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-cream-50 uppercase tracking-wider text-sm mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/shop" 
                    className="text-cream-300 hover:text-gold transition-colors text-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h4 className="text-cream-50 uppercase tracking-wider text-sm mb-4">Help</h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-cream-300 hover:text-gold transition-colors text-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-cream-50 uppercase tracking-wider text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Materials', 'Sustainability', 'Press', 'Wholesale'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-cream-300 hover:text-gold transition-colors text-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-charcoal-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-cream-400 text-xs uppercase tracking-wider">Secure Payment:</span>
            <div className="flex gap-2">
              {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((payment) => (
                <div 
                  key={payment}
                  className="bg-cream-100/10 px-3 py-1 rounded text-cream-300 text-xs font-medium"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>

          <p className="text-cream-400 text-xs">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
