import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-hairline border-accent/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest text-foreground block mb-6">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">
              Fine jewelry designed for the modern woman. Quietly luxurious, thoughtfully crafted, and made to be treasured.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/#about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/#materials" className="hover:text-accent transition-colors">Materials & Care</Link></li>
              <li><Link to="/#journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/#sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/#shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/#contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/#terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-sans">
          <div className="flex space-x-6">
            <span>&copy; 2026 VELMORA FINE JEWELRY</span>
            <span className="hidden md:inline">|</span>
            <Link to="/#privacy" className="hover:text-muted-foreground transition-colors">Privacy Policy</Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <Instagram size={14} className="hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={14} className="hover:text-accent cursor-pointer transition-colors" />
              <Mail size={14} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
            <div className="flex space-x-3 grayscale opacity-40">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-4" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-4" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-4" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
