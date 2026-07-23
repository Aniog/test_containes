import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white/40 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Care Instructions</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Press</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 cursor-pointer hover:text-white/70">Instagram</span>
            <span className="text-xs text-white/40 cursor-pointer hover:text-white/70">Pinterest</span>
            <span className="text-xs text-white/40 cursor-pointer hover:text-white/70">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
