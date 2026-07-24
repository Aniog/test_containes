import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream tracking-wide">VELMORA</Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors duration-300">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-cream/40 mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Shipping & Returns</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Size Guide</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Care Instructions</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-cream/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors duration-300">Our Story</Link></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Sustainability</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Press</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors duration-300">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
