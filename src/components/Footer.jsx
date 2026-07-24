import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[0.3em] font-bold mb-6 block">
              VELMORA
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs font-sans">
              Timeless demi-fine jewelry designed for the modern woman. Crafted with 18K gold and a touch of brilliance.
            </p>
            <div className="flex gap-4 mt-8">
              <Instagram className="w-5 h-5 text-muted hover:text-accent transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-muted hover:text-accent transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-muted hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Shop</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/shop" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">All Jewelry</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Best Sellers</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">New Arrivals</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Gift Sets</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Our Story</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Sustainability</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Journal</Link></li>
              <li><Link to="#" className="text-sm text-muted hover:text-accent tracking-widest uppercase text-[11px]">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-muted mb-6 tracking-wide">
              Join for 10% off your first order and exclusive access.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="rounded-none border-stone-200 focus:ring-accent text-xs tracking-widest"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-none uppercase tracking-widest text-[10px] px-6">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="text-[10px] text-muted-foreground uppercase tracking-widest border border-stone-200 px-2 py-1">
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
