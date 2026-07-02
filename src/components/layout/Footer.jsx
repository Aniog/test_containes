import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-velmora-dark)] text-white">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="serif-heading text-3xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday luxury, thoughtfully designed.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 font-medium">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-white/70 hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline-divider bg-white/20 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span
                  key={card}
                  className="px-2 py-1 bg-white/10 rounded text-xs text-white/70"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
