import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-3xl tracking-wider block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Shop</h4>
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
            <h4 className="text-sm tracking-widest uppercase mb-4">Help</h4>
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
            <h4 className="text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center text-[10px] text-primary-foreground/40">VISA</div>
            <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center text-[10px] text-primary-foreground/40">MC</div>
            <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center text-[10px] text-primary-foreground/40">AMEX</div>
            <div className="w-10 h-6 bg-primary-foreground/10 rounded flex items-center justify-center text-[10px] text-primary-foreground/40">PP</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
