import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-stone py-20 px-6 md:px-12 border-t border-velmora-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium block mb-6">VELMORA</Link>
          <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed">
            Crafted for the modern woman who treasures quality, elegance, and quiet luxury in every detail.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">All Products</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Earrings</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Necklaces</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Our Story</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Materials & Care</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Sustainability</Link></li>
            <li><Link to="#" className="text-sm text-muted-foreground hover:text-velmora-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Connect</h4>
          <div className="flex items-center gap-4 mb-8">
            <Link to="#" className="hover:text-velmora-gold transition-colors"><Instagram size={20} /></Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors"><Twitter size={20} /></Link>
            <Link to="#" className="hover:text-velmora-gold transition-colors"><Mail size={20} /></Link>
          </div>
          <div className="flex flex-wrap gap-4 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-velmora-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <Link to="#" className="text-xs text-muted-foreground hover:text-velmora-gold transition-colors uppercase tracking-widest">Terms</Link>
          <Link to="#" className="text-xs text-muted-foreground hover:text-velmora-gold transition-colors uppercase tracking-widest">Returns</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;