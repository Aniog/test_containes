import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase mb-6 inline-block">
              VELMORA
            </Link>
            <p className="text-background/70 text-sm mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern muse.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <a href="#" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                In
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <span className="sr-only">TikTok</span>
                Tk
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <span className="sr-only">Pinterest</span>
                Pt
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/shop" className="hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-background transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=bestsellers" className="hover:text-background transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-background transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-background transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-background transition-colors">Sustainability</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center text-xs text-background/60">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-background">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;