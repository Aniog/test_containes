import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl font-semibold tracking-[0.2em] uppercase mb-6">Velmora</h2>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine jewelry that brings quiet luxury to your everyday moments.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium tracking-widest uppercase text-xs mb-6 text-background/50">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="text-background hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-background hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-background hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-background hover:text-primary transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium tracking-widest uppercase text-xs mb-6 text-background/50">Help</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/#" className="text-background hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/#" className="text-background hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#" className="text-background hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="/#" className="text-background hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium tracking-widest uppercase text-xs mb-6 text-background/50">Join Us</h3>
            <p className="text-background/70 text-sm mb-4">Sign up for 10% off your first order and exclusive access to new collections.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-background/20 text-background placeholder:text-background/30 rounded-none focus-visible:ring-primary"
              />
              <Button type="submit" variant="outline" className="rounded-none border-background text-background hover:bg-background hover:text-foreground">
                JOIN
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/#" className="hover:text-background transition-colors">Terms of Service</Link>
            <Link to="/#" className="hover:text-background transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}