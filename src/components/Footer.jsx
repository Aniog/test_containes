import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block font-serif text-3xl tracking-[0.2em] uppercase">
              Velmora
            </Link>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg tracking-wider uppercase">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/products" className="text-muted hover:text-background text-sm transition-colors">All Jewelry</Link>
              <Link to="/products?category=rings" className="text-muted hover:text-background text-sm transition-colors">Rings</Link>
              <Link to="/products?category=necklaces" className="text-muted hover:text-background text-sm transition-colors">Necklaces</Link>
              <Link to="/products?category=earrings" className="text-muted hover:text-background text-sm transition-colors">Earrings</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg tracking-wider uppercase">Help</h4>
            <div className="flex flex-col gap-3">
              <Link to="/faq" className="text-muted hover:text-background text-sm transition-colors">FAQ</Link>
              <Link to="/shipping" className="text-muted hover:text-background text-sm transition-colors">Shipping & Returns</Link>
              <Link to="/jewelry-care" className="text-muted hover:text-background text-sm transition-colors">Jewelry Care</Link>
              <Link to="/contact" className="text-muted hover:text-background text-sm transition-colors">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg tracking-wider uppercase">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-muted hover:text-background text-sm transition-colors">Our Story</Link>
              <Link to="/journal" className="text-muted hover:text-background text-sm transition-colors">Journal</Link>
              <Link to="/sustainability" className="text-muted hover:text-background text-sm transition-colors">Sustainability</Link>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-muted hover:text-background transition-colors">Instagram</a>
                <a href="#" className="text-muted hover:text-background transition-colors">Pinterest</a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-background transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}