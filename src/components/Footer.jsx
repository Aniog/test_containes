import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-linen pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] font-medium text-brand-ebony">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Crafting demi-fine jewelry that bridges the gap between luxury and accessibility. Designed for the modern woman who values timeless elegance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover-gold transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-ebony">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shop?category=Earrings" className="text-sm text-muted-foreground hover-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-muted-foreground hover-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-muted-foreground hover-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-muted-foreground hover-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-ebony">Help</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover-gold transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-sm text-muted-foreground hover-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-ebony">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover-gold transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-sm text-muted-foreground hover-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="text-sm text-muted-foreground hover-gold transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 opacity-60">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Visa</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Mastercard</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Amex</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">PayPal</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
