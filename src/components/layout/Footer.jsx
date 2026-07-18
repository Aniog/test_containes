import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-sm text-muted-foreground mb-6 pr-4">
              Premium demi-fine jewelry crafted to be treasured. Designed for everyday elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/collections/all" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/all" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/collections/all" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/all" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections/all" className="hover:text-foreground transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-3 text-muted-foreground">
            {/* Payment icons placeholder */}
            <span className="text-xs border border-border px-2 py-1 rounded">VISA</span>
            <span className="text-xs border border-border px-2 py-1 rounded">MC</span>
            <span className="text-xs border border-border px-2 py-1 rounded">AMEX</span>
            <span className="text-xs border border-border px-2 py-1 rounded">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
