import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl tracking-[0.2em] font-serif font-semibold mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-secondary/70 leading-relaxed">
              Crafting accessible luxury. Everyday demi-fine jewelry designed for life's treasured moments.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm text-secondary/70">
              <li><Link to="/collection" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=Earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=Necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=Huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="flex flex-col gap-3 text-sm text-secondary/70">
              <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-secondary/70">
              <li><Link to="#" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Journal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}