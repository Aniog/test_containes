import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-velmora-sand pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em]">VELMORA</h2>
            <p className="text-velmora-gray text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Modern heirlooms for the intentional woman.
              Gold-filled and gold-plated jewelry designed for daily luxury.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-velmora-charcoal cursor-pointer hover:text-velmora-gold transition-colors" />
              <Facebook className="w-5 h-5 text-velmora-charcoal cursor-pointer hover:text-velmora-gold transition-colors" />
              <Twitter className="w-5 h-5 text-velmora-charcoal cursor-pointer hover:text-velmora-gold transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-velmora-gray">
              <li><Link to="/shop" className="hover:text-velmora-charcoal transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-charcoal transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-charcoal transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-charcoal transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="hover:text-velmora-charcoal transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-velmora-gray">
              <li><Link to="/about" className="hover:text-velmora-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-charcoal transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-velmora-charcoal transition-colors">Sustainability</Link></li>
              <li><Link to="/retailers" className="hover:text-velmora-charcoal transition-colors">Stockists</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-widest text-xs mb-6">Join the Circle</h3>
            <p className="text-sm text-velmora-gray mb-4 italic">Sign up for 10% off your first order.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-transparent border-velmora-charcoal/20 focus-visible:ring-velmora-gold rounded-none h-10 text-sm"
              />
              <Button className="rounded-none bg-velmora-charcoal text-white hover:bg-velmora-charcoal/90 h-10 px-6 uppercase text-[10px] tracking-widest">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-velmora-charcoal/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-velmora-gray/60">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-velmora-charcoal">Privacy</Link>
            <Link to="/terms" className="hover:text-velmora-charcoal">Terms</Link>
            <Link to="/shipping" className="hover:text-velmora-charcoal">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
