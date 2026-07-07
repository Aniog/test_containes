import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Demi-fine gold jewelry for the modern woman. Crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-[var(--color-gold)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[var(--color-gold)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[var(--color-gold)] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[var(--color-gold)] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[var(--color-gold)] transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--color-gold)]" />
              <span className="text-sm">Join for 10% off your first order</span>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:border-[var(--color-gold)]"
              />
              <button className="bg-[var(--color-gold)] text-white px-4 py-2 text-sm tracking-wider uppercase hover:bg-[var(--color-gold-dark)] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
