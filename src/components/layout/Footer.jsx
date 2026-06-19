import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-base border-t border-brand-text/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-[0.1em] font-light">
              VELMORA
            </Link>
            <p className="text-brand-neutral text-sm leading-relaxed max-w-xs">
              Handcrafted demi-fine jewelry designed for the modern woman. Sophistication in every detail.
            </p>
            <div className="flex space-x-6 text-brand-text">
              <Instagram size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-neutral">
              <li><Link to="/shop" className="hover:text-brand-text transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-brand-text transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-brand-text transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-brand-text transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-brand-neutral">
              <li><Link to="/shipping" className="hover:text-brand-text transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-brand-text transition-colors">FAQ</Link></li>
              <li><Link to="/care" className="hover:text-brand-text transition-colors">Materials & Care</Link></li>
              <li><Link to="/contact" className="hover:text-brand-text transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-neutral">
              <li><Link to="/about" className="hover:text-brand-text transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-brand-text transition-colors">Journal</Link></li>
              <li><Link to="/wholesale" className="hover:text-brand-text transition-colors">Wholesale</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-text transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-text/5 text-[10px] uppercase tracking-widest text-brand-neutral/60">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
