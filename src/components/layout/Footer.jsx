import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 border-0 bg-transparent text-primary-foreground">
            <Link to="/" className="text-2xl font-serif font-medium tracking-wide block mb-4 border-0 bg-transparent text-primary-foreground">
              VELMORA
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 border-0 bg-transparent">
              Elevating everyday moments with demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 border-0 bg-transparent text-primary-foreground">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary-foreground border-0 bg-transparent">Shop</h4>
            <ul className="space-y-3 border-0 bg-transparent">
              <li><Link to="/collections" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">All Jewelry</Link></li>
              <li><Link to="/collections?category=necklaces" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Necklaces</Link></li>
              <li><Link to="/collections?category=earrings" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Earrings</Link></li>
              <li><Link to="/collections?category=huggies" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary-foreground border-0 bg-transparent">Help</h4>
            <ul className="space-y-3 border-0 bg-transparent">
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Contact Us</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors border-0 bg-transparent">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary-foreground border-0 bg-transparent">Join our list</h4>
            <p className="text-sm text-primary-foreground/70 border-0 bg-transparent mb-4">
              Sign up for 10% off your first order and exclusive access to new drops.
            </p>
            <form className="flex border-0 bg-transparent">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-primary-foreground/20 text-primary-foreground px-4 py-2 w-full focus:outline-none focus:border-accent text-sm"
              />
              <button 
                type="button"
                className="bg-primary-foreground text-primary px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 border-0 bg-transparent">
          <p className="border-0 bg-transparent text-primary-foreground/50">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 border-0 bg-transparent text-primary-foreground/50 text-xs">
            <a href="#" className="hover:text-primary-foreground transition-colors border-0 bg-transparent text-primary-foreground/50">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors border-0 bg-transparent text-primary-foreground/50">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
