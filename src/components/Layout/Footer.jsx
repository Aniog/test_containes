import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Shield } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Best Sellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Size Guide', path: '/sizing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Newsletter Section */}
        <div className="newsletter-block bg-velmora-charcoal text-white py-16 px-6 -mx-6 md:-mx-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Join the Velmora Family
            </h3>
            <p className="font-sans text-sm uppercase tracking-wider text-velmora-gold-light mb-8">
              Get 10% off your first order
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-transparent border border-velmora-gold-light text-white placeholder:text-velmora-muted focus:outline-none focus:border-velmora-gold"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn-primary bg-velmora-gold hover:bg-velmora-gold-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-3xl font-light tracking-wider text-white mb-6 block">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-muted mb-6 leading-relaxed">
              Crafting timeless jewelry pieces that celebrate life's precious moments. 
              Each piece is designed with love and made to be treasured.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-velmora-muted hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-velmora-muted hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-velmora-muted hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider text-velmora-gold-light mb-6">
              Shop
            </h4>
            <nav className="space-y-3">
              {shopLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-sans text-sm text-velmora-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider text-velmora-gold-light mb-6">
              Help
            </h4>
            <nav className="space-y-3">
              {helpLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-sans text-sm text-velmora-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-wider text-velmora-gold-light mb-6">
              Company
            </h4>
            <nav className="space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block font-sans text-sm text-velmora-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-velmora-gold/20">
          <div className="flex items-center space-x-2 text-velmora-muted">
            <CreditCard size={20} />
            <span className="font-sans text-xs uppercase tracking-wider">Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2 text-velmora-muted">
            <Shield size={20} />
            <span className="font-sans text-xs uppercase tracking-wider">30-Day Returns</span>
          </div>
          <div className="flex items-center space-x-2 text-velmora-muted">
            <span className="font-sans text-xs uppercase tracking-wider">18K Gold Plated</span>
          </div>
          <div className="flex items-center space-x-2 text-velmora-muted">
            <span className="font-sans text-xs uppercase tracking-wider">Hypoallergenic</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-velmora-gold/20">
          <p className="font-sans text-xs text-velmora-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
