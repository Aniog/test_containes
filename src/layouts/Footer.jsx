import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for the modern romantic.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/collection" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}