import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-semibold uppercase mb-6 inline-block">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Earrings & Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Best Sellers</Link></li>
              <li><Link to="/collections" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">FAQ</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors tracking-wide uppercase text-xs">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Join The List</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Sign up for 10% off your first order, plus early access to new arrivals.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-border rounded-none focus-visible:ring-1 focus-visible:ring-primary"
              />
              <Button type="submit" variant="outline" className="rounded-none uppercase tracking-widest text-xs px-6 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}