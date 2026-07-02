import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif tracking-widest font-semibold">VELMORA</h2>
            <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              Direct-to-consumer demi-fine jewelry. Crafted for the modern woman, designed to be treasured forever.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-6">
            <h3 className="uppercase tracking-widest text-sm font-sans font-semibold">Shop</h3>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground/80">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-6">
            <h3 className="uppercase tracking-widest text-sm font-sans font-semibold">Help</h3>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground/80">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/size-guide" className="hover:text-accent transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="uppercase tracking-widest text-sm font-sans font-semibold">Company</h3>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-muted-foreground/60">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="flex space-x-4 text-[10px] uppercase tracking-widest opacity-40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>AMEX</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
