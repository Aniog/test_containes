import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium text-cream no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Crafted for the modern woman. Demi-fine jewelry that bridges the gap between everyday and extraordinary.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-cream/70 hover:text-gold-light transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/70 hover:text-gold-light transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/70 hover:text-gold-light transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/70 hover:text-gold-light transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Our Story</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Press</span></li>
              <li><span className="text-sm text-cream/70 cursor-pointer hover:text-gold-light transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
