import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-gold-light font-light leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-gold-light mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/collection" className="text-sm text-cream/70 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection?category=earrings" className="text-sm text-cream/70 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collection?category=necklaces" className="text-sm text-cream/70 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collection?category=huggies" className="text-sm text-cream/70 hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-gold-light mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Care Instructions</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-gold-light mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Press</span></li>
              <li><span className="text-sm text-cream/70 hover:text-gold transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="text-cream/50 hover:text-gold transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-cream/40 font-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3 text-xs text-cream/40">
            <span className="border border-cream/20 px-2 py-0.5 rounded-sm">Visa</span>
            <span className="border border-cream/20 px-2 py-0.5 rounded-sm">MC</span>
            <span className="border border-cream/20 px-2 py-0.5 rounded-sm">Amex</span>
            <span className="border border-cream/20 px-2 py-0.5 rounded-sm">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
