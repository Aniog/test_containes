import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm font-serif italic mb-6">
              Crafted to be Treasured. Premium demi-fine jewelry for everyday elegance.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-6">Join the list</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for 10% off your first order, plus exclusive access to new arrivals.
            </p>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Email address" className="bg-transparent border-border rounded-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0" />
              <Button type="submit" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Payment icons placeholder */}
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Visa</span>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Mastercard</span>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Amex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
