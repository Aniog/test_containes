import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#2C2823] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-sm text-[#6B665F]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Shop</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#C5A46E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#C5A46E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#C5A46E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#C5A46E] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Help</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#C5A46E] transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Follow</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-[#C5A46E] transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A443D] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B665F]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C5A46E] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#C5A46E] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#C5A46E] transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-3">
            <span>Visa</span>
            <span>MC</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer