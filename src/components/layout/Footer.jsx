import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Crafted for the modern woman. Demi-fine jewelry designed to be treasured, layered, and lived in.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-accent-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-accent-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/50 hover:text-accent-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-accent-light transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-accent-light transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-accent-light transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-accent-light transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-accent-light transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Press</a></li>
              <li><a href="#" className="text-sm hover:text-accent-light transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/40">
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
