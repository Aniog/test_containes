import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions'],
    Company: ['Our Story', 'Journal', 'Contact', 'Privacy Policy'],
  };

  return (
    <footer className="bg-velmora-soft-black text-velmora-cream py-16 mt-auto">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl mb-6">VELMORA</h3>
            <p className="text-sm text-velmora-taupe mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18K gold plating for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm uppercase tracking-wider mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <Link
                      to="/shop"
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-velmora-charcoal/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-velmora-taupe">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-velmora-taupe">Payment methods:</span>
            <div className="flex space-x-2 text-xs text-velmora-taupe">
              <span className="border border-velmora-charcoal/30 px-2 py-1 rounded">VISA</span>
              <span className="border border-velmora-charcoal/30 px-2 py-1 rounded">MC</span>
              <span className="border border-velmora-charcoal/30 px-2 py-1 rounded">AMEX</span>
              <span className="border border-velmora-charcoal/30 px-2 py-1 rounded">PP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
