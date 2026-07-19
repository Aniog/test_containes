import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link to="/" className="brand-title text-2xl font-semibold tracking-[0.3em] mb-6 block">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              Hand-crafted demi-fine jewelry designed for the modern woman. Quiet luxury for your everyday moments.
            </p>
          </div>
          
          <div>
            <h4 className="brand-title text-xs mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm font-light hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm font-light hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm font-light hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm font-light hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm font-light hover:text-accent transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="brand-title text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-light hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-sm font-light hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="text-sm font-light hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="text-sm font-light hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="brand-title text-xs mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm font-light hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm font-light hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="text-sm font-light hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-sm font-light hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border gap-6">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="w-5 h-5 stroke-1" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="w-5 h-5 stroke-1" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5 stroke-1" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Pinterest className="w-5 h-5 stroke-1" /></a>
          </div>
          
          <div className="flex items-center space-x-4 grayscale opacity-50">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="h-6 w-auto" />
          </div>

          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
