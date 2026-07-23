import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8 border-t border-brand-DEFAULT/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-light/10 pb-12 mb-8">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern individual. Quiet luxury that elevates your everyday.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collections/best-sellers" className="hover:text-brand-gold transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-brand-gold transition-colors">Journal</Link></li>
              <li><Link to="/materials" className="hover:text-brand-gold transition-colors">Materials & Care</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link to="/faq" className="hover:text-brand-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/track-order" className="hover:text-brand-gold transition-colors">Track Order</Link></li>
              <li><Link to="/terms" className="hover:text-brand-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="sr-only">Accepted Payments</span>
            {/* Simple representation of payment icons */}
            <div className="h-6 w-10 bg-brand-light/10 rounded"></div>
            <div className="h-6 w-10 bg-brand-light/10 rounded"></div>
            <div className="h-6 w-10 bg-brand-light/10 rounded"></div>
            <div className="h-6 w-10 bg-brand-light/10 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}