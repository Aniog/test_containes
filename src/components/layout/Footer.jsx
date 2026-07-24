import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-border pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Social */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Direct-to-consumer demi-fine jewelry. Crafted for the modern woman who treasures elegance and quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop?category=Earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VELMORA Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 grayscale opacity-60">
            {/* Payment Icons Placeholder */}
            <span className="text-[10px] uppercase tracking-widest">Visa</span>
            <span className="text-[10px] uppercase tracking-widest">Mastercard</span>
            <span className="text-[10px] uppercase tracking-widest">Amex</span>
            <span className="text-[10px] uppercase tracking-widest">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
