import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-background/20 pb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest uppercase mb-6 block">Velmora</Link>
            <p className="text-background/70 text-sm max-w-xs leading-relaxed">
              Quiet luxury demi-fine jewelry designed for the modern woman. Crafted to be treasured, worn every day.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link to="/collections/new" className="hover:text-background transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-background transition-colors">Huggies</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-background transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-background transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-background transition-colors">Sustainability</Link></li>
              <li><Link to="/materials" className="hover:text-background transition-colors">Materials & Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/track-order" className="hover:text-background transition-colors">Track Order</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
