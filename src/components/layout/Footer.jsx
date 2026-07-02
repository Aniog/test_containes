import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-serif text-3xl tracking-widest">VELMORA</Link>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Meticulously crafted pieces for the contemporary woman. Quiet luxury, ethically made.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-8">
            <h4 className="uppercase-spaced text-[10px] font-bold">Shop</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-light capitalize">
              <Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link>
              <Link to="/shop" className="hover:text-accent transition-colors">New Arrivals</Link>
              <Link to="#" className="hover:text-accent transition-colors">Bestsellers</Link>
            </div>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-8">
            <h4 className="uppercase-spaced text-[10px] font-bold">Help</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
              <Link to="#" className="hover:text-accent transition-colors">Shipping & Returns</Link>
              <Link to="#" className="hover:text-accent transition-colors">Track Your Order</Link>
              <Link to="#" className="hover:text-accent transition-colors">Care Guide</Link>
              <Link to="#" className="hover:text-accent transition-colors">Sizing Guide</Link>
              <Link to="#" className="hover:text-accent transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-8">
            <h4 className="uppercase-spaced text-[10px] font-bold">Company</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
              <Link to="#" className="hover:text-accent transition-colors">Our Story</Link>
              <Link to="#" className="hover:text-accent transition-colors">Sustainability</Link>
              <Link to="#" className="hover:text-accent transition-colors">Ethical Sourcing</Link>
              <Link to="#" className="hover:text-accent transition-colors">Wholesale</Link>
              <Link to="#" className="hover:text-accent transition-colors">Terms & Privacy</Link>
            </div>
          </div>
        </div>

        <div className="hairline mb-12 opacity-40" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase-spaced text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 grayscale opacity-40">
             {/* Payment Icons Simulation */}
             <div className="w-8 h-5 bg-muted rounded-sm" />
             <div className="w-8 h-5 bg-muted rounded-sm" />
             <div className="w-8 h-5 bg-muted rounded-sm" />
             <div className="w-8 h-5 bg-muted rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
