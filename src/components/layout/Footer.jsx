import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-dark)] text-[var(--velmora-gold-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="velmora-heading text-2xl tracking-widest text-white mb-4">VELMORA</h3>
            <p className="text-sm text-[var(--velmora-gold-light)]/70 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            {/* Payment icons */}
            <div className="flex items-center gap-3 opacity-60">
              <span className="text-xs">Visa</span>
              <span className="text-xs">Mastercard</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
              <span className="text-xs">Apple Pay</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
