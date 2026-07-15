import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-bg border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-3xl font-serif tracking-[0.15em] uppercase mb-6 inline-block">
            Velmora
          </Link>
          <p className="text-velmora-text/70 text-sm max-w-[250px]">
            Demi-fine jewelry crafted for the everyday aesthetic. Treasures meant to be worn, loved, and layered.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-velmora-text/60 hover:text-velmora-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-text/60 hover:text-velmora-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-text/60 hover:text-velmora-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif tracking-widest uppercase mb-6 text-lg">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=Sets" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Sets</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif tracking-widest uppercase mb-6 text-lg">Help</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif tracking-widest uppercase mb-6 text-lg">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Our Story</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Journal</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Sustainability</a></li>
            <li><a href="#" className="text-sm text-velmora-text/70 hover:text-velmora-accent transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-velmora-text/50">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <span className="text-xs text-velmora-text/50">Terms of Service</span>
          <span className="text-xs text-velmora-text/50">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}