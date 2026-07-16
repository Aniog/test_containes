import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elevating everyday moments with demi-fine jewelry that speaks of quiet luxury and timeless elegance.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/ethics" className="hover:text-accent transition-colors">Ethical Sourcing</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">© 2026 VELMORA FINE JEWELRY</p>
        <div className="flex space-x-6">
           {/* Add dummy payment icons if needed */}
           <span className="text-xs text-muted-foreground tracking-widest uppercase">VISA</span>
           <span className="text-xs text-muted-foreground tracking-widest uppercase">MASTERCARD</span>
           <span className="text-xs text-muted-foreground tracking-widest uppercase">AMEX</span>
           <span className="text-xs text-muted-foreground tracking-widest uppercase">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
