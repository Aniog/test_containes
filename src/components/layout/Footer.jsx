import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold-light transition-colors no-underline font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Our Story</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Press</span></li>
              <li><span className="text-sm text-white/60 font-sans cursor-pointer hover:text-gold-light transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
