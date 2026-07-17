import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-muted-foreground/70 hover:text-background transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground/50">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground/50">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="px-2 py-1 bg-white/10 rounded text-[10px] tracking-wider">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground/50 hover:text-background transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground/50 hover:text-background transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground/50 hover:text-background transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground/50 hover:text-background transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
