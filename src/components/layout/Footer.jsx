import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif tracking-widest-plus uppercase mb-6">VELMORA</h3>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/collection" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=necklaces" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=earrings" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=huggies" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Huggies & Cuffs</Link></li>
              <li><Link to="/collection?category=sets" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Payment Icons Placeholder */}
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;