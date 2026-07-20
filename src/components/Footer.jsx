import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:pr-8">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              Demi-fine jewelry crafted to be treasured. Warm gold, enduring style, designed for the modern heirloom.
            </p>
            <div className="flex gap-4 text-brand-muted">
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-brand-gold">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-brand-gold">Support</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-sm text-brand-muted mb-4">
              Join for 10% off your first order and exclusive access to new arrivals.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Email address" 
                className="rounded-none bg-transparent border-brand-charcoal text-white focus-visible:ring-1 focus-visible:ring-brand-gold placeholder:text-brand-charcoal h-10"
              />
              <Button type="submit" className="rounded-none bg-brand-gold hover:bg-[#B39045] text-white px-4 h-10 ml-2">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-charcoal flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;