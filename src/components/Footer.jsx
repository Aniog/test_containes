import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const PAYMENTS = ['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL', 'APPLE PAY']

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.25em] mb-4">VELMORA</div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/shop" className="hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Help</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/about" className="hover:text-cream transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-cream transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/15 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-cream/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.15em] text-cream/50 border border-cream/20 px-2 py-1"
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
