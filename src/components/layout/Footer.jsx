import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-['Cormorant_Garamond'] text-2xl tracking-[0.15em]">
              VELMORA
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-white/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-white/80">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider mb-4 text-white/80">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-[#c9a96e] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline bg-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="px-2 py-1 bg-white/10 rounded text-[10px] text-white/60">
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
