import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-widest-xl font-light text-background">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Email" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-muted-foreground hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-muted-foreground hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-muted-foreground hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="bg-white/10 px-2 py-1 rounded text-[10px] text-muted-foreground">
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
