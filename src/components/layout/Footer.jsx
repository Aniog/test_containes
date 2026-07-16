import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { SITE_NAME } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] mb-6 block">
              {SITE_NAME}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Timeless designs intended to be treasured forever.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-primary transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Connect</h4>
            <div className="flex space-x-6 mb-8">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>hello@velmora.com</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground space-y-4 md:space-y-0">
          <div>© {currentYear} {SITE_NAME} FINE JEWELRY. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
