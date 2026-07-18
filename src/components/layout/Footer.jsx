import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream/80 py-16">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-white block mb-4">
              Velmora
            </Link>
            <p className="text-sm leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention, made to last, and priced for real life.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-white uppercase tracking-wide text-sm mb-4">Shop</h3>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-white uppercase tracking-wide text-sm mb-4">Help</h3>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/help" className="text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-white uppercase tracking-wide text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-sm hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="border-t border-velmora-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <CreditCard size={24} />
            <span className="text-sm">Secure Payment</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
