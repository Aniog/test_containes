import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-deep text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide text-cream mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop/earrings" className="text-sm text-cream/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/necklaces" className="text-sm text-cream/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/huggies" className="text-sm text-cream/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide text-cream mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide text-cream mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-cream/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-cream/60 hover:text-gold transition-colors">Journal</Link></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-cream/60 hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40 hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-cream/40 hover:text-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-cream/40 hover:text-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
