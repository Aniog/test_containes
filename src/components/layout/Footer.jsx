import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t pt-20 pb-12 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Premium demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured for a lifetime.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-foreground hover:text-accent transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link to="#" className="text-foreground hover:text-accent transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
              <Link to="#" className="text-foreground hover:text-accent transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-8">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Care Guide</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Sizing Guide</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Ethical Sourcing</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Stockists</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-muted-foreground uppercase tracking-widest-xl">
            © {currentYear} Velmora Fine Jewelry. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {/* Simple payment icon placeholders */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((p) => (
              <span key={p} className="text-[10px] uppercase tracking-tighter text-muted-foreground border px-2 py-0.5">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
