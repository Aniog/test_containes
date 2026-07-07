import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-accent-light transition-colors no-underline font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-accent-light transition-colors no-underline font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-accent-light transition-colors no-underline font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-accent-light transition-colors no-underline font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><span className="text-sm text-white/70 font-sans">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 font-sans">Size Guide</span></li>
              <li><span className="text-sm text-white/70 font-sans">Care Instructions</span></li>
              <li><span className="text-sm text-white/70 font-sans">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-accent-light transition-colors no-underline font-sans">Our Story</Link></li>
              <li><span className="text-sm text-white/70 font-sans">Sustainability</span></li>
              <li><span className="text-sm text-white/70 font-sans">Press</span></li>
              <li><span className="text-sm text-white/70 font-sans">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-sans">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 font-sans">Visa</span>
            <span className="text-xs text-white/40 font-sans">Mastercard</span>
            <span className="text-xs text-white/40 font-sans">Amex</span>
            <span className="text-xs text-white/40 font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
