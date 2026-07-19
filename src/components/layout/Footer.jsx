import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-background/60 text-sm hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-background/60 text-sm hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-background/60 text-sm hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-background/60 text-sm hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-background/60 text-sm hover:text-primary transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-background/60 text-sm hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-background/60 text-sm hover:text-primary transition-colors">Journal</Link></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <span className="text-background/40 text-xs">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="bg-background/10 px-2 py-1 text-[10px] text-background/60">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-background/40 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
