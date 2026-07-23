import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-ivory tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-ivory mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-ivory/60 hover:text-ivory transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-ivory mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-ivory/60">Shipping & Returns</span></li>
              <li><span className="text-sm text-ivory/60">Size Guide</span></li>
              <li><span className="text-sm text-ivory/60">Care Instructions</span></li>
              <li><span className="text-sm text-ivory/60">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-ivory mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-ivory/60">Sustainability</span></li>
              <li><span className="text-sm text-ivory/60">Press</span></li>
              <li><span className="text-sm text-ivory/60">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ivory/40">Visa</span>
            <span className="text-xs text-ivory/40">Mastercard</span>
            <span className="text-xs text-ivory/40">Amex</span>
            <span className="text-xs text-ivory/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
