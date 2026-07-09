import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-semibold tracking-widest block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Accessible luxury for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-accent transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Join for 10% off your first order, plus early access to new collections.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-primary-foreground/30 py-2 pr-10 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-primary-foreground/50"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}