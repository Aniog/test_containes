import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Huggies', to: '/shop?category=Huggies' },
    { label: 'New Arrivals', to: '/shop?sort=newest' },
    { label: 'Best Sellers', to: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { label: 'FAQ', to: '/faq' },
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'Care Instructions', to: '/care' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
    { label: 'Stockists', to: '/stockists' },
  ];

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Trust Badges */}
      <div className="border-b border-cream-100/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Free Worldwide Shipping', desc: 'On orders over $50' },
              { icon: RefreshCw, title: '30-Day Returns', desc: 'Hassle-free returns' },
              { icon: Shield, title: '18K Gold Plated', desc: 'Premium quality' },
              { icon: Shield, title: 'Hypoallergenic', desc: 'Safe for sensitive skin' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <badge.icon size={24} className="text-gold-light flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-cream-50">{badge.title}</p>
                  <p className="text-xs text-cream-200">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-cream-50">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream-200 leading-relaxed">
              Quiet luxury, thoughtfully crafted. Demi-fine jewelry designed to be treasured and worn every day.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-cream-200 hover:text-gold-light transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-cream-50 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-cream-50 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-cream-50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-100/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cream-300">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-cream-300">
              <CreditCard size={16} />
              <span className="text-xs">Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
