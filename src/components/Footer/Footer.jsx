import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-semibold block mb-4">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Quiet luxury for the modern romantic.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-foreground transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}