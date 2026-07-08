import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us', 'Size Guide'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Affiliate Program']
  };

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h3>
            <p className="text-sm text-ivory/70 mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with 18K gold plating for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-ivory/70 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-sm tracking-wider uppercase mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/ &/g, '-').replace(/\s+/g, '-')}`}
                      className="text-sm text-ivory/70 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-12 pt-8 border-t border-ivory/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <CreditCard size={24} className="text-ivory/50" />
            <span className="text-sm text-ivory/50">Secure Payment</span>
          </div>

          <p className="text-sm text-ivory/50">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-ivory/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-ivory/50 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
