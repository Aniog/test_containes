import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-velmora-cream/60">
              Demi-fine jewelry crafted to be treasured. Everyday luxury, thoughtfully designed.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="hover:text-velmora-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-velmora-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velmora-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-2 text-velmora-cream/40">
              <svg className="h-6 w-10" viewBox="0 0 48 32" fill="currentColor">
                <rect width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="24" y="20" textAnchor="middle" fontSize="10" fill="currentColor">VISA</text>
              </svg>
              <svg className="h-6 w-10" viewBox="0 0 48 32" fill="currentColor">
                <rect width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="24" y="20" textAnchor="middle" fontSize="7" fill="currentColor">MC</text>
              </svg>
              <svg className="h-6 w-10" viewBox="0 0 48 32" fill="currentColor">
                <rect width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="24" y="20" textAnchor="middle" fontSize="7" fill="currentColor">AMEX</text>
              </svg>
              <svg className="h-6 w-10" viewBox="0 0 48 32" fill="currentColor">
                <rect width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="24" y="20" textAnchor="middle" fontSize="7" fill="currentColor">PP</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
