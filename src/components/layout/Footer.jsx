import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-brand-cream no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-muted-light mb-4">
              Shop
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-cream/80 no-underline hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-cream/80 no-underline hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-cream/80 no-underline hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-cream/80 no-underline hover:text-brand-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-muted-light mb-4">
              Help
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-muted-light mb-4">
              Company
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Our Story</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Press</span></li>
              <li><span className="text-sm text-brand-cream/80 cursor-pointer hover:text-brand-gold transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-muted-light">Visa</span>
            <span className="text-xs text-brand-muted-light">Mastercard</span>
            <span className="text-xs text-brand-muted-light">Amex</span>
            <span className="text-xs text-brand-muted-light">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-cream/60 cursor-pointer hover:text-brand-gold transition-colors">Instagram</span>
            <span className="text-xs text-brand-cream/60 cursor-pointer hover:text-brand-gold transition-colors">Pinterest</span>
            <span className="text-xs text-brand-cream/60 cursor-pointer hover:text-brand-gold transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
