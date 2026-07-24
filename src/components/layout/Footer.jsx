import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold-light transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-gold-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-gold-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-gold-light transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm text-white/70 hover:text-gold-light transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(name => (
              <span key={name} className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 px-2 py-1">
                {name}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(name => (
              <span key={name} className="text-xs text-white/50 hover:text-gold-light transition-colors cursor-pointer">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
