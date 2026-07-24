import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide-lg text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention and made to last.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-4 text-cream">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-taupe hover:text-gold transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-4 text-cream">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-4 text-cream">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Press</Link></li>
              <li><Link to="/" className="text-sm text-taupe hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="hairline border-taupe/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs text-taupe">© 2025 VELMORA. All rights reserved.</span>
            <span className="text-taupe/30">|</span>
            <span className="text-xs text-taupe">Privacy</span>
            <span className="text-taupe/30">|</span>
            <span className="text-xs text-taupe">Terms</span>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-taupe">Visa</span>
              <span className="text-taupe/30">|</span>
              <span className="text-xs text-taupe">MC</span>
              <span className="text-taupe/30">|</span>
              <span className="text-xs text-taupe">Amex</span>
              <span className="text-taupe/30">|</span>
              <span className="text-xs text-taupe">PayPal</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}