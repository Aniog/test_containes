import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'],
    Help: ['FAQs', 'Shipping Info', 'Returns', 'Size Guide', 'Contact Us'],
    Company: ['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers']
  };

  return (
    <footer className="bg-velmora-charcoal text-white">
      {/* Trust Badges */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase">Free Worldwide Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="w-6 h-6 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase">18K Gold Plated</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="w-6 h-6 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3
              className="font-serif text-2xl tracking-ultra-wide uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Velmora
            </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-ultra-wide uppercase mb-6 text-velmora-gold">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="font-sans text-xs text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-sans text-xs text-white/40 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
