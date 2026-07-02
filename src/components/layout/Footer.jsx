import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide-xl">
              VELMORA
            </Link>
            <p className="text-sm text-brand-warm-gray mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors text-xs uppercase tracking-wider" aria-label="Instagram">IG</a>
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors text-xs uppercase tracking-wider" aria-label="Pinterest">PIN</a>
              <a href="#" className="text-brand-warm-gray hover:text-brand-gold transition-colors text-xs uppercase tracking-wider" aria-label="TikTok">TT</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wide-xl uppercase mb-4 text-brand-cream">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wide-xl uppercase mb-4 text-brand-cream">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-wide-xl uppercase mb-4 text-brand-cream">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-brand-warm-gray hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-graphite mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-gray">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray">Visa</span>
            <span className="text-xs text-brand-warm-gray">Mastercard</span>
            <span className="text-xs text-brand-warm-gray">Amex</span>
            <span className="text-xs text-brand-warm-gray">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
