import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif font-semibold tracking-widest uppercase inline-block mb-6">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Demi-fine gold jewelry, crafted to be treasured. Designed for everyday luxury and timeless elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Huggies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sets & Gifts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Jewelry Care</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;