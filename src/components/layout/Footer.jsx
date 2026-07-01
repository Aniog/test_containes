import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-base text-surface">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-product font-semibold">
              VELMORA
            </Link>
            <p className="text-sm text-stone-400 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans mb-4 text-stone-400">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-300 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-300 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-300 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-300 hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans mb-4 text-stone-400">Help</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-sans mb-4 text-stone-400">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-stone-300 hover:text-gold transition-colors">Our Story</Link></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="text-sm text-stone-300 hover:text-gold transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 border border-stone-700 rounded text-[10px] text-stone-400 font-sans">VISA</div>
            <div className="px-2 py-1 border border-stone-700 rounded text-[10px] text-stone-400 font-sans">MC</div>
            <div className="px-2 py-1 border border-stone-700 rounded text-[10px] text-stone-400 font-sans">AMEX</div>
            <div className="px-2 py-1 border border-stone-700 rounded text-[10px] text-stone-400 font-sans">PAYPAL</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
