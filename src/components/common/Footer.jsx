import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs font-serif leading-relaxed">
            Crafting demi-fine jewelry that captures the essence of quiet luxury. Designed for the modern woman who appreciates timeless elegance.
          </p>
          <div className="flex space-x-5 text-stone-600">
            <Instagram size={20} className="cursor-pointer hover:text-accent" />
            <Facebook size={20} className="cursor-pointer hover:text-accent" />
            <Twitter size={20} className="cursor-pointer hover:text-accent" />
            <Mail size={20} className="cursor-pointer hover:text-accent" />
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-serif">
            <li><Link to="/shop?category=Earrings">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies">Huggies</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/shop?featured=true">Bestsellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-serif">
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/care">Materials & Care</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-serif">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/wholesale">Wholesale</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          {/* Payment icons placeholders */}
          <div className="flex items-center space-x-3 opacity-40 grayscale">
            <div className="w-8 h-5 border rounded bg-white"></div>
            <div className="w-8 h-5 border rounded bg-white"></div>
            <div className="w-8 h-5 border rounded bg-white"></div>
            <div className="w-8 h-5 border rounded bg-white"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
