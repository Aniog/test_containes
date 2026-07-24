import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-velmora-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop?category=earrings" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Earrings</Link>
              <Link to="/shop?category=necklaces" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Necklaces</Link>
              <Link to="/shop?category=huggies" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Huggies</Link>
              <Link to="/shop" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold mb-4">Help</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shipping" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Shipping & Returns</Link>
              <Link to="/care" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Jewelry Care</Link>
              <Link to="/faq" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">FAQ</Link>
              <Link to="/contact" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Our Story</Link>
              <Link to="/journal" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Journal</Link>
              <Link to="/sustainability" className="text-sm text-stone-400 hover:text-velmora-light transition-colors font-sans">Sustainability</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Payment icons */}
          <div className="flex items-center gap-3 text-stone-500">
            <span className="text-xs font-sans tracking-wide uppercase">Visa</span>
            <span className="text-xs font-sans tracking-wide uppercase">Mastercard</span>
            <span className="text-xs font-sans tracking-wide uppercase">Amex</span>
            <span className="text-xs font-sans tracking-wide uppercase">PayPal</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-stone-400 hover:text-velmora-gold transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>

          <p className="text-xs text-stone-500 font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
