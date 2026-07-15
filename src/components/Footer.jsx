import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-foreground">
              VELMORA
            </Link>
            <p className="text-secondary tracking-wide max-w-xs text-sm leading-relaxed">
              Quiet luxury and curated elegance for the modern woman. 
              Demi-fine jewelry crafted to be treasured for a lifetime.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-muted-foreground hover:text-velmora-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-velmora-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-velmora-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-velmora-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-secondary hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-secondary hover:text-velmora-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6 opacity-60">
            {/* Simple payment icons placeholders */}
            <span className="text-[10px] uppercase font-semibold tracking-tighter">Visa</span>
            <span className="text-[10px] uppercase font-semibold tracking-tighter">Mastercard</span>
            <span className="text-[10px] uppercase font-semibold tracking-tighter">Amex</span>
            <span className="text-[10px] uppercase font-semibold tracking-tighter">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
