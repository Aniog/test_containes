import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals', 'Best Sellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    Company: ['Our Story', 'Journal', 'Press', 'Sustainability', 'Careers'],
  };

  return (
    <footer className="bg-velmora-charcoal text-velmora-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link 
              to="/" 
              className="font-serif text-3xl tracking-widest text-white mb-6 block"
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18k gold plating and hypoallergenic materials for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif text-sm tracking-widest uppercase text-white mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & Trust Badges */}
        <div className="border-t border-velmora-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-velmora-taupe">
                <CreditCard size={20} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-velmora-taupe">
                <Shield size={20} />
                <span>30-Day Returns</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-velmora-taupe">
              <span>Accepted Payments:</span>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-velmora-dark rounded flex items-center justify-center text-xs">
                  VISA
                </div>
                <div className="w-10 h-6 bg-velmora-dark rounded flex items-center justify-center text-xs">
                  MC
                </div>
                <div className="w-10 h-6 bg-velmora-dark rounded flex items-center justify-center text-xs">
                  AMEX
                </div>
                <div className="w-10 h-6 bg-velmora-dark rounded flex items-center justify-center text-xs">
                  PayPal
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-velmora-taupe mt-8">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
