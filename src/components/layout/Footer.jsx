import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest block mb-6">
              VELMORA
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 font-serif italic">
              Crafted to be treasured. Demi-fine jewelry for the modern romantic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <span className="sr-only">Pinterest</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/shop" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">All Jewelry</Link>
              </li>
              <li>
                <Link to="/shop?category=Earrings" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Earrings</Link>
              </li>
              <li>
                <Link to="/shop?category=Necklaces" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Necklaces</Link>
              </li>
              <li>
                <Link to="/shop?category=Huggies" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Huggies</Link>
              </li>
              <li>
                <Link to="/shop?category=Sets" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Gift Sets</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/care" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Jewelry Care</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Our Story</Link>
              </li>
              <li>
                <Link to="/journal" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Journal</Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Sustainability</Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Terms & Privacy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 opacity-50 grayscale mix-blend-luminosity">
             {/* Payment Icons Placeholder */}
             <div className="h-6 w-10 bg-white/20 rounded-sm"></div>
             <div className="h-6 w-10 bg-white/20 rounded-sm"></div>
             <div className="h-6 w-10 bg-white/20 rounded-sm"></div>
             <div className="h-6 w-10 bg-white/20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;