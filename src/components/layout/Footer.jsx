import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.22em] text-text">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Demi-fine jewelry designed to be worn, loved, and passed down.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-text-secondary hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="text-text-secondary hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
