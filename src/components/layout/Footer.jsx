import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="text-3xl font-serif tracking-widest uppercase inline-block">
            Velmora
          </Link>
          <p className="text-sm text-background/70 leading-relaxed max-w-xs">
            Quiet luxury for the modern woman. Demi-fine jewelry crafted to be treasured every day.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Shop</h4>
          <ul className="space-y-4 text-sm text-background/70">
            <li><Link to="/collections/new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            <li><Link to="/collections/best-sellers" className="hover:text-primary transition-colors">Best Sellers</Link></li>
            <li><Link to="/collections/earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/collections/necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/collections/gift-sets" className="hover:text-primary transition-colors">Gift Sets</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Help</h4>
          <ul className="space-y-4 text-sm text-background/70">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/jewelry-care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Join the Club</h4>
          <p className="text-sm text-background/70 mb-4">
            Subscribe for 10% off your first order and exclusive access to new launches.
          </p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-b border-white/20 px-0 py-2 w-full focus:outline-none focus:border-primary text-sm transition-colors rounded-none placeholder:text-background/40"
            />
            <button type="submit" className="border-b border-white/20 py-2 pl-4 text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}