import React from 'react';
import { Mail, Instagram, Facebook, Twitter, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl tracking-widest font-medium">VELMORA</Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Crafting modern heirlooms for the intentional woman. Quiet luxury, curated for your most treasured moments.
            </p>
            <div className="flex space-x-5 text-muted-foreground">
              <Instagram size={20} className="hover:text-accent transition-colors cursor-pointer" />
              <Facebook size={20} className="hover:text-accent transition-colors cursor-pointer" />
              <Twitter size={20} className="hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-6 font-semibold">Shop</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-6 font-semibold">Help</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <li className="hover:text-accent transition-colors cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Jewelry Care</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Sizing Guide</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm uppercase tracking-widest font-semibold">Newsletter</h4>
            <p className="text-sm text-muted-foreground font-light">Join the Velmora world and receive 10% off your first order.</p>
            <form className="flex group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-border py-2 text-[10px] tracking-widest focus:outline-none focus:border-accent flex-1 transition-colors"
              />
              <button className="border-b border-border px-4 transition-colors group-focus-within:border-accent">
                <Mail size={16} className="text-muted-foreground" />
              </button>
            </form>
          </div>
        </div>

        {/* trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-10 border-t border-border/50 text-muted-foreground/60">
           <div className="flex items-center space-x-2">
             <Truck size={16} />
             <span className="text-[10px] uppercase tracking-widest">Free Shipping Over $75</span>
           </div>
           <div className="flex items-center space-x-2">
             <RotateCcw size={16} />
             <span className="text-[10px] uppercase tracking-widest">30-Day Easy Returns</span>
           </div>
           <div className="flex items-center space-x-2">
             <ShieldCheck size={16} />
             <span className="text-[10px] uppercase tracking-widest">18K Gold Plated</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 space-y-4 md:space-y-0 text-[10px] text-muted-foreground uppercase tracking-widest">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
