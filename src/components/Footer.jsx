import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const PAY = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"]

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.25em]">VELMORA</div>
            <p className="mt-4 text-sm text-ivory/70 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/70 hover:text-gold transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory/50 mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory/50 mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><a href="#" className="hover:text-gold transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Materials & Care</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory/50 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-ivory/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {PAY.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.15em] text-ivory/60 border border-ivory/20 px-2 py-1"
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
