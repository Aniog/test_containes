import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-white tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Crafted for the modern woman. Demi-fine jewelry that celebrates quiet luxury and timeless elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60">Size Guide</span></li>
              <li><span className="text-sm text-white/60">Care Instructions</span></li>
              <li><span className="text-sm text-white/60">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60">Our Story</span></li>
              <li><span className="text-sm text-white/60">Sustainability</span></li>
              <li><span className="text-sm text-white/60">Press</span></li>
              <li><span className="text-sm text-white/60">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-white/40 hover:text-white/70 cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
