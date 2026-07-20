import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-hairline">
      <div className="max-w-content mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-[0.15em] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Demi-fine gold jewelry, crafted to be treasured. Designed in New York, worn worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><Link to="/shop?category=earrings" className="hover:text-charcoal transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-charcoal transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-charcoal transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-charcoal transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="hover:text-charcoal transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Help</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="#" className="hover:text-charcoal transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="#" className="hover:text-charcoal transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted uppercase tracking-wider">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(name => (
                <div key={name} className="w-10 h-6 bg-hairline/60 rounded-sm flex items-center justify-center">
                  <span className="text-[8px] font-medium text-muted uppercase">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
