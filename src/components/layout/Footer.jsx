import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-16">
        
        {/* Newsletter Column */}
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-serif tracking-widest uppercase mb-6 inline-block">
            Velmora
          </Link>
          <p className="text-white/80 mb-6 max-w-sm">
            Join the Velmora society. Sign up for 10% off your first order, exclusive access to new launches, and editorial journaling.
          </p>
          <form className="flex max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-white/30 text-white placeholder:text-white/50 px-4 py-3 w-full focus:outline-none focus:border-white transition-colors"
            />
            <Button variant="outline" className="border-l-0 text-white border-white/30 hover:bg-white hover:text-primary h-auto rounded-none shrink-0 px-6 uppercase tracking-widest text-xs">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Shop</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=gifts" className="hover:text-white transition-colors">Gifting</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Support</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-white/60">
        <div className="flex gap-6 mb-4 md:mb-0 text-white">
          <a href="#" className="hover:opacity-70 transition-opacity"><Instagram className="w-5 h-5"/></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-5 h-5"/></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Twitter className="w-5 h-5"/></a>
          <a href="#" className="hover:opacity-70 transition-opacity"><Mail className="w-5 h-5"/></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="mt-4 md:mt-0 opacity-50 flex gap-2">
          {/* Real site would use payment icons */}
          <span className="uppercase text-xs tracking-widest">Visa</span> &middot;
          <span className="uppercase text-xs tracking-widest">MC</span> &middot;
          <span className="uppercase text-xs tracking-widest">Amex</span> &middot;
          <span className="uppercase text-xs tracking-widest">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
}
