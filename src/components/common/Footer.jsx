import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] font-medium">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless, demi-fine jewelry designed for the modern woman. 
              Elevate your everyday with our curated pieces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 stroke-[1px]" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 stroke-[1px]" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5 stroke-[1px]" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <li><Link to="/shop" className="hover:text-black transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-black transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-black transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-black transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-black transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <li><a href="#" className="hover:text-black transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Wholesale</a></li>
              <li><Link to="/journal" className="hover:text-black transition-colors">Journal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 opacity-30 grayscale items-center">
            {/* Payment Icons Placeholder */}
            <span className="text-[8px] border border-black px-1">VISA</span>
            <span className="text-[8px] border border-black px-1">MASTERCARD</span>
            <span className="text-[8px] border border-black px-1">AMEX</span>
            <span className="text-[8px] border border-black px-1">APPLE PAY</span>
            <span className="text-[8px] border border-black px-1">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
