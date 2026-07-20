import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="serif-heading text-2xl font-light tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Timeless pieces for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 text-primary-foreground/40 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
