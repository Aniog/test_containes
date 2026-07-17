import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-widest block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Timeless pieces for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Careers', 'Press', 'Journal'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Visa · Mastercard · Amex · PayPal</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
