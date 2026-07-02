import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-wide font-medium block mb-6">
              VELMORA
            </Link>
            <p className="text-sm font-light leading-relaxed opacity-80 max-w-xs">
              Crafted to be treasured. Fine and demi-fine jewelry designed for the modern heirloom.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 font-light text-sm opacity-80">
              <li><Link to="/shop?category=earrings" className="hover:opacity-100 transition-opacity">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:opacity-100 transition-opacity">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:opacity-100 transition-opacity">Huggies</Link></li>
              <li><Link to="/shop" className="hover:opacity-100 transition-opacity">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Help</h4>
            <ul className="flex flex-col gap-3 font-light text-sm opacity-80">
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:opacity-100 transition-opacity">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:opacity-100 transition-opacity">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Company</h4>
            <ul className="flex flex-col gap-3 font-light text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link to="/journal" className="hover:opacity-100 transition-opacity">Journal</Link></li>
              <li><Link to="/stores" className="hover:opacity-100 transition-opacity">Stockists</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light opacity-60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 opacity-80">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:opacity-100 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:opacity-100 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:opacity-100 transition-opacity">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;