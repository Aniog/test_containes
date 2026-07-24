import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-widest">
            VELMORA
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Quiet luxury for the modern woman. <br /> Crafted to be treasured.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-foreground">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-foreground">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-foreground">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-foreground cursor-pointer">Jewelry Care</li>
            <li className="hover:text-foreground cursor-pointer">Contact Us</li>
            <li className="hover:text-foreground cursor-pointer">FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-foreground">Journal</Link></li>
            <li className="hover:text-foreground cursor-pointer">Privacy Policy</li>
            <li className="hover:text-foreground cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
