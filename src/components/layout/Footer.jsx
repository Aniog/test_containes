import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">VELMORA</Link>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-brand-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60">Size Guide</span></li>
              <li><span className="text-sm text-white/60">Care Instructions</span></li>
              <li><span className="text-sm text-white/60">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/60">Our Story</span></li>
              <li><span className="text-sm text-white/60">Sustainability</span></li>
              <li><span className="text-sm text-white/60">Press</span></li>
              <li><span className="text-sm text-white/60">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Visa</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Mastercard</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Amex</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 hover:text-brand-gold cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-white/50 hover:text-brand-gold cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-white/50 hover:text-brand-gold cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
