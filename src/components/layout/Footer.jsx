import { Link } from 'react-router-dom'
import { Instagram, Twitter, Pinterest } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velvet-900 text-velvet-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-white font-semibold">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-velvet-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated pieces designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-sans font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-velvet-400 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velvet-400 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velvet-400 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velvet-400 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-velvet-400 hover:text-white transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-sans font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase font-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-velvet-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velvet-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-velvet-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-velvet-400">
              <span className="text-xs font-sans uppercase tracking-wider">Visa</span>
              <span className="text-xs font-sans uppercase tracking-wider">MC</span>
              <span className="text-xs font-sans uppercase tracking-wider">Amex</span>
              <span className="text-xs font-sans uppercase tracking-wider">PayPal</span>
              <span className="text-xs font-sans uppercase tracking-wider">Afterpay</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Pinterest">
              <Pinterest className="w-4 h-4" />
            </a>
            <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          <p className="text-xs text-velvet-500 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}