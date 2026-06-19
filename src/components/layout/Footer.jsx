import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <h2 className="font-serif text-2xl tracking-wider mb-4">VELMORA</h2>
            </Link>
            <p className="text-sm text-[#faf8f5]/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-[#c9a96e]">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-[#c9a96e]">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-[#c9a96e]">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#faf8f5]/70 hover:text-[#faf8f5] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#3d3d3d] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#faf8f5]/50 hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#faf8f5]/50 hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#faf8f5]/50 hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#faf8f5]/50 hover:text-[#c9a96e] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 text-[#faf8f5]/40 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#faf8f5]/40">
            &copy; {new Date().getFullYear()} Velmora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
