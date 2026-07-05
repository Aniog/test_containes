import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-nav mb-4 text-stone-400">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-nav mb-4 text-stone-400">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/shipping" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Jewelry Care</Link></li>
              <li><Link to="/faq" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-nav mb-4 text-stone-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-stone-300 hover:text-velmora-gold transition-colors link-underline">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-stone-700 rounded text-[10px] text-stone-300 font-medium">VISA</div>
            <div className="px-2 py-1 bg-stone-700 rounded text-[10px] text-stone-300 font-medium">MC</div>
            <div className="px-2 py-1 bg-stone-700 rounded text-[10px] text-stone-300 font-medium">AMEX</div>
            <div className="px-2 py-1 bg-stone-700 rounded text-[10px] text-stone-300 font-medium">PAYPAL</div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
