import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-medium">
            VELMORA
          </Link>
          <p className="font-serif italic text-muted text-sm leading-relaxed pr-8">
            Timeless adornments crafted for the modern individual. Ethical, sustainable, and designed to legacy.
          </p>
          <div className="flex gap-4 text-muted">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-6">
          <h4 className="font-serif uppercase tracking-[0.1em] text-sm">Shop</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest font-semibold text-muted">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-accent transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-6">
          <h4 className="font-serif uppercase tracking-[0.1em] text-sm">Client Care</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest font-semibold text-muted">
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Material & Care</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-serif uppercase tracking-[0.1em] text-sm">The Journal</h4>
          <p className="text-[11px] text-muted leading-relaxed">
            Subscribe for collection launches, style journals, and 10% off your first treasure.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-b border-muted py-2 text-[10px] tracking-widest focus:outline-none focus:border-accent transition-colors"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-accent transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-widest font-medium text-muted">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 opacity-40 grayscale grayscale-100 mix-blend-multiply">
          {/* Mock payment icons */}
          <div className="w-8 h-5 bg-muted rounded-xs" />
          <div className="w-8 h-5 bg-muted rounded-xs" />
          <div className="w-8 h-5 bg-muted rounded-xs" />
          <div className="w-8 h-5 bg-muted rounded-xs" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
