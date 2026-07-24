import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif tracking-widest uppercase">VELMORA</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for the modern individual. Designed to be layered, lived in, and treasured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/collections/new" className="text-muted-foreground hover:text-background text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/earrings" className="text-muted-foreground hover:text-background text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-muted-foreground hover:text-background text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-muted-foreground hover:text-background text-sm transition-colors">Huggies</Link></li>
              <li><Link to="/collections/best-sellers" className="text-muted-foreground hover:text-background text-sm transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-muted-foreground hover:text-background text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-background text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-muted-foreground hover:text-background text-sm transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-background text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to receive 10% off your first order, access to exclusive releases, and more.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-muted-foreground/30 focus-visible:ring-primary rounded-none"
                required
              />
              <Button type="submit" variant="outline" className="rounded-none border-muted-foreground/30 hover:bg-background hover:text-foreground">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
