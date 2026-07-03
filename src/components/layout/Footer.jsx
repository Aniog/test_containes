import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/70">
            <Instagram className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
