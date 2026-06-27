import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Shop Pay']

  return (
    <footer className="bg-velmora-900 text-velmora-300">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl font-bold tracking-[0.12em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-500 mt-3 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for everyday elegance. Pieces designed to be treasured, not replaced.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velmora-400 hover:text-gold-400 transition-colors text-xs tracking-[0.1em] uppercase" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="text-velmora-400 hover:text-gold-400 transition-colors text-xs tracking-[0.1em] uppercase" aria-label="Pinterest">
                PT
              </a>
              <a href="#" className="text-velmora-400 hover:text-gold-400 transition-colors text-xs tracking-[0.1em] uppercase" aria-label="Twitter">
                X
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs tracking-[0.12em] uppercase font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-400 hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-400 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-400 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-400 hover:text-white transition-colors">Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-400 hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-xs tracking-[0.12em] uppercase font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs tracking-[0.12em] uppercase font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/" className="text-sm text-velmora-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment icons + copyright */}
        <div className="mt-12 pt-8 border-t border-velmora-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {paymentIcons.map((icon) => (
                <span key={icon} className="text-xs text-velmora-500 bg-velmora-800 px-2.5 py-1 rounded">
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-xs text-velmora-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}