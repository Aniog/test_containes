import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Quiet luxury crafted for the everyday. Demi-fine jewelry designed to be treasured, layered, and lived in.
            </p>
            <div className="flex gap-4">
              <a href="#/" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#/" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#/" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Help & Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/#" className="hover:text-foreground transition-colors">Customer Care</Link></li>
              <li><Link to="/#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/#" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/#" className="hover:text-foreground">Terms of Service</Link>
            <Link to="/#" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
