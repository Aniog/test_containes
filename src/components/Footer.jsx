import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-velmora-border pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] text-velmora-dark">VELMORA</Link>
          <p className="text-sm text-velmora-muted leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. Elevating your daily ritual with gold and light.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-velmora-dark hover:text-velmora-gold cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-velmora-dark hover:text-velmora-gold cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-velmora-dark hover:text-velmora-gold cursor-pointer transition-colors" />
            <Pinterest className="w-5 h-5 text-velmora-dark hover:text-velmora-gold cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-velmora-dark">Shop</h4>
          <ul className="flex flex-col gap-4 text-xs tracking-widest text-velmora-muted">
            <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-velmora-gold transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-velmora-dark">Customer Care</h4>
          <ul className="flex flex-col gap-4 text-xs tracking-widest text-velmora-muted">
            <li><Link to="/shipping" className="hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-velmora-gold transition-colors">Materials & Care</Link></li>
            <li><Link to="/faq" className="hover:text-velmora-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-velmora-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-velmora-dark">Company</h4>
          <ul className="flex flex-col gap-4 text-xs tracking-widest text-velmora-muted">
            <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
            <li><Link to="/careers" className="hover:text-velmora-gold transition-colors">Careers</Link></li>
            <li><Link to="/accessibility" className="hover:text-velmora-gold transition-colors">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-velmora-border">
        <p className="text-[10px] uppercase tracking-widest text-velmora-muted">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 grayscale opacity-60">
           {/* Visual simple payment icons */}
           <div className="w-8 h-5 bg-stone-200 rounded-sm" />
           <div className="w-8 h-5 bg-stone-200 rounded-sm" />
           <div className="w-8 h-5 bg-stone-200 rounded-sm" />
           <div className="w-8 h-5 bg-stone-200 rounded-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
