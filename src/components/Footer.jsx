import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t-[0.5px] border-border/20">
      <div className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-x-8 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif tracking-[0.2em] text-2xl font-normal uppercase text-background">
                Velmora
              </span>
            </Link>
            <p className="text-secondary/70 font-light text-sm max-w-xs leading-relaxed mb-6">
              Quiet luxury. Everyday elegance. Crafted to be treasured for a lifetime.
            </p>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 md:col-start-6 text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-background/90">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary/60">
              <li><Link to="/shop" className="hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-background transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-background/90">Help</h4>
            <ul className="space-y-4 text-sm text-secondary/60">
              <li><Link to="/" className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Jewelry Care</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6 text-background/90">Company</h4>
            <ul className="space-y-4 text-sm text-secondary/60">
              <li><Link to="/" className="hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-background transition-colors">Stockists</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t-[0.5px] border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/50 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-secondary/50">
             <Link to="/" className="text-xs hover:text-background transition-colors">Terms</Link>
             <Link to="/" className="text-xs hover:text-background transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}