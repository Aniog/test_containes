import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus text-cream block mb-4">
              VELMORA
            </Link>
            <p className="text-sm font-light leading-relaxed text-cream/60">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm font-light hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm font-light hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm font-light hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm font-light hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm font-light hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-0.5 text-cream/50">Visa</span>
            <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-0.5 text-cream/50">Mastercard</span>
            <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-0.5 text-cream/50">Amex</span>
            <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-0.5 text-cream/50">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-xs text-cream/50 hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-cream/50 hover:text-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-cream/50 hover:text-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
