import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream block mb-4">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Care Instructions</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Press</span></li>
              <li><span className="text-sm cursor-pointer hover:text-gold transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-cream/50 hover:text-gold cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
