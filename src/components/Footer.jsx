import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-semibold text-white">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-charcoal-300 leading-relaxed max-w-xs">
              Demi-fine jewelry designed for everyday luxury. Crafted with care, made to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-charcoal-300 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-charcoal-300 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-charcoal-300 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-charcoal-300 hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Care Guide</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-charcoal-400 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Our Story</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-charcoal-300 hover:text-white transition-colors cursor-pointer">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-charcoal-400 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-charcoal-400 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="text-charcoal-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-wider text-charcoal-500 uppercase">Visa</span>
            <span className="text-[10px] tracking-wider text-charcoal-500 uppercase">Mastercard</span>
            <span className="text-[10px] tracking-wider text-charcoal-500 uppercase">Amex</span>
            <span className="text-[10px] tracking-wider text-charcoal-500 uppercase">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
