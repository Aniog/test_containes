import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const PAYMENTS = ['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL', 'APPLE PAY']

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.25em] font-semibold mb-4">
              VELMORA
            </h3>
            <p className="text-sm text-ivory/70 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made for everyday luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/70 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/shop" className="hover:text-ivory transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-ivory transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-ivory transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-ivory transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-ivory transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-gold mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><a href="#" className="hover:text-ivory transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-gold mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/about" className="hover:text-ivory transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-ivory transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/15 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.1em] text-ivory/50 border border-ivory/20 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
