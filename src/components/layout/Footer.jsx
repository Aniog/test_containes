import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="serif-heading text-3xl tracking-wider text-primary-foreground">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=hoop-earrings" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Hoop Earrings</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Help</h4>
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
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-primary-foreground/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="px-2 py-1 bg-primary-foreground/10 rounded text-[10px] text-primary-foreground/60 font-medium">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
