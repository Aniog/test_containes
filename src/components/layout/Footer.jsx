import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-black)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-[var(--velmora-gold)] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                  <span key={method} className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/60">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
