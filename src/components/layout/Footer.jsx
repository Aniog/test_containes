import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide text-dark-text no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-dark-text/70 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-dark-text/50">Shop</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><Link to="/shop" className="text-sm text-dark-text/80 no-underline hover:text-accent-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-dark-text/80 no-underline hover:text-accent-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-dark-text/80 no-underline hover:text-accent-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-dark-text/80 no-underline hover:text-accent-light transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-dark-text/50">Help</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-dark-text/50">Company</h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Our Story</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Press</span></li>
              <li><span className="text-sm text-dark-text/80 cursor-pointer hover:text-accent-light transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-dark-text/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-text/50">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-dark-text/50 uppercase tracking-wide">Visa</span>
            <span className="text-xs text-dark-text/50 uppercase tracking-wide">Mastercard</span>
            <span className="text-xs text-dark-text/50 uppercase tracking-wide">Amex</span>
            <span className="text-xs text-dark-text/50 uppercase tracking-wide">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
