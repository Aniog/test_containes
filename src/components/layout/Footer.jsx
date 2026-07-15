import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="text-dark-muted text-sm mt-4 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-dark-muted">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/80 hover:text-accent-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/80 hover:text-accent-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/80 hover:text-accent-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/80 hover:text-accent-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-dark-muted">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/80">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/80">Size Guide</span></li>
              <li><span className="text-sm text-white/80">Care Instructions</span></li>
              <li><span className="text-sm text-white/80">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-5 text-dark-muted">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/80 hover:text-accent-light transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-white/80">Sustainability</span></li>
              <li><span className="text-sm text-white/80">Press</span></li>
              <li><span className="text-sm text-white/80">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-muted">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-dark-muted border border-white/20 px-2 py-0.5 rounded-sm">Visa</span>
            <span className="text-xs text-dark-muted border border-white/20 px-2 py-0.5 rounded-sm">Mastercard</span>
            <span className="text-xs text-dark-muted border border-white/20 px-2 py-0.5 rounded-sm">Amex</span>
            <span className="text-xs text-dark-muted border border-white/20 px-2 py-0.5 rounded-sm">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-xs text-dark-muted hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-dark-muted hover:text-white transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-dark-muted hover:text-white transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
