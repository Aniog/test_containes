import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase block mb-6">Velmora</Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed font-sans">
              Crafted to be treasured. Fine and demi-fine jewelry designed for the modern romantic.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80 font-sans">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80 font-sans">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Join Our List</h4>
            <p className="text-sm text-secondary-foreground/80 mb-4 font-sans">Subscribe to receive 10% off your first order and exclusive access to new arrivals.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-b border-border py-2 text-sm focus:outline-none focus:border-primary transition-colors font-sans"
                required
              />
              <button type="submit" className="text-sm uppercase tracking-widest hover:text-primary transition-colors font-serif px-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60 font-sans">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}