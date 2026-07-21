import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase block mb-6">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting demi-fine jewelry designed to be collected, layered, and treasured every day.
            </p>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=new" className="text-muted-foreground hover:text-foreground text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=earrings" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Sustainability</Link></li>
              <li><Link to="/wholesale" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Wholesale</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Pinterest</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}