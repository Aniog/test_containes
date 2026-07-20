import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Demi-fine gold jewelry<br />crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/50 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/50 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/50 hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-white/80">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-white/50 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-white/50 hover:text-accent transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 text-white/40 text-xs">
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
