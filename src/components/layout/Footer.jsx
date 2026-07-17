import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/shop?category=earrings" className="hover:text-brand-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-gold-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-gold-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-4 text-white/80">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-brand-gold-light transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-gold-light transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-white/40 tracking-wider">VISA</span>
            <span className="text-xs text-white/40 tracking-wider">MASTERCARD</span>
            <span className="text-xs text-white/40 tracking-wider">AMEX</span>
            <span className="text-xs text-white/40 tracking-wider">PAYPAL</span>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <a href="#" aria-label="Instagram" className="hover:text-brand-gold-light transition-colors text-xs tracking-wider">IG</a>
            <a href="#" aria-label="Pinterest" className="hover:text-brand-gold-light transition-colors text-xs tracking-wider">PIN</a>
            <a href="#" aria-label="TikTok" className="hover:text-brand-gold-light transition-colors text-xs tracking-wider">TT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
