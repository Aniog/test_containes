import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
            <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
              Timeless demi-fine jewelry for the modern woman. Ethically crafted, thoughtfully designed.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={18} /></Link>
              <Link to="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook size={18} /></Link>
              <Link to="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={18} /></Link>
              <Link to="#" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={18} /></Link>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif uppercase tracking-widest text-xs">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=Earrings" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Huggies</Link>
              <Link to="/shop" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">New Arrivals</Link>
            </div>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif uppercase tracking-widest text-xs">Help</h4>
            <div className="flex flex-col gap-3">
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Shipping & Returns</Link>
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Care Guide</Link>
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">FAQ</Link>
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif uppercase tracking-widest text-xs">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Our Story</Link>
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Sustainability</Link>
              <Link to="/journal" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Journal</Link>
              <Link to="#" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-border">
          <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 grayscale opacity-50">
            {/* Payment icons placeholder */}
            <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
            <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
            <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
            <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
