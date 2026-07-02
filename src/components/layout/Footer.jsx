import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-velmora-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-300 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-300 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-300 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-300 hover:text-gold-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-50 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-50 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-50 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velmora-300 hover:text-gold-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-12 pt-8 border-t border-velmora-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-400">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="px-2 py-1 bg-velmora-800 rounded text-[10px] text-velmora-300">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
