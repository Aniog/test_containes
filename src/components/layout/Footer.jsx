import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-logo">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-nav uppercase mb-5 text-stone-300">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-nav uppercase mb-5 text-stone-300">
              Help
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Care Guide</span></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">FAQ</span></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Contact Us</span></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-nav uppercase mb-5 text-stone-300">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans">Our Story</Link></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Journal</span></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-stone-400 font-sans cursor-pointer hover:text-gold-light transition-colors">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-stone-500 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((name) => (
              <span
                key={name}
                className="text-[10px] font-sans font-medium text-stone-500 border border-stone-600 rounded px-2 py-1"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-500 hover:text-gold-light transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold-light transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold-light transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
