import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-noir text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold text-cream tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide-xl text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide-xl text-cream/40 mb-4">Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide-xl text-cream/40 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-cream/40">
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4 text-cream/50">
            <span className="text-xs hover:text-gold cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs hover:text-gold cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs hover:text-gold cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
