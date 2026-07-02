import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <Link to="/" className="serif-heading text-3xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Timeless pieces for
              everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#b8956a] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#b8956a] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#b8956a] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#b8956a] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=earrings"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=necklaces"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=huggies"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Huggies
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=sets"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Care Instructions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-[#b8956a] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">PayPal</span>
            <span className="text-xs text-white/40">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
