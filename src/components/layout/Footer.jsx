import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. Quiet luxury, crafted to be treasured.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/category/earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/category/necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/category/huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-accent transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Sizing Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Connect</h4>
          <p className="text-sm text-muted-foreground mb-6">Join our newsletter and receive 10% off your first order.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow bg-slate-50 border border-r-0 border-border px-4 py-2 text-sm focus:outline-none"
            />
            <button className="bg-primary text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-muted-foreground">
        <div>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-accent">PRIVACY POLICY</a>
          <a href="#" className="hover:text-accent">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
