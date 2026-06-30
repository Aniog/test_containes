import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      {/* Trust Badges */}
      <div className="border-b border-velmora-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Truck, title: 'Free Worldwide Shipping', desc: 'On orders over $75' },
              { icon: RefreshCw, title: '30-Day Returns', desc: 'No questions asked' },
              { icon: Shield, title: '18K Gold Plated', desc: 'Premium quality' },
              { icon: CreditCard, title: 'Secure Payment', desc: 'SSL encrypted' },
            ].map((badge, index) => (
              <div key={index} className="flex items-start space-x-3">
                <badge.icon className="w-5 h-5 text-velmora-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans text-sm font-medium">{badge.title}</p>
                  <p className="font-sans text-xs text-velmora-cream/60 mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl font-medium tracking-wider uppercase block">
              Velmora
            </Link>
            <p className="font-sans text-sm text-velmora-cream/70 leading-relaxed">
              Quiet luxury, thoughtfully crafted. Our demi-fine jewelry pieces are designed 
              to be treasured, blending timeless elegance with modern sensibility.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-velmora-cream/20 rounded-full flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Shop</h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/shop?category=${item.toLowerCase()}`}
                    className="font-sans text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Help</h3>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-sans text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale', 'Affiliate Program'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-sans text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-xs text-velmora-cream/50">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img src="/api/placeholder/40/25" alt="Visa" className="h-6 opacity-50" />
              <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6 opacity-50" />
              <img src="/api/placeholder/40/25" alt="PayPal" className="h-6 opacity-50" />
              <img src="/api/placeholder/40/25" alt="Apple Pay" className="h-6 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
