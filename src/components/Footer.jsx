import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1C1A17] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-[#3A3630]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#7A7368]">Fine Jewelry</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#7A7368]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#C5A26F]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#C5A26F]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#C5A26F]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#C5A26F]">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#7A7368]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A26F]">Shipping</a>
              <a href="#" className="block hover:text-[#C5A26F]">Returns</a>
              <a href="#" className="block hover:text-[#C5A26F]">Care Guide</a>
              <a href="#" className="block hover:text-[#C5A26F]">Size Guide</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#7A7368]">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#C5A26F]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#C5A26F]">Journal</Link>
              <a href="#" className="block hover:text-[#C5A26F]">Sustainability</a>
              <a href="#" className="block hover:text-[#C5A26F]">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#7A7368]">Follow Us</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#C5A26F]">Instagram</a>
              <a href="#" className="block hover:text-[#C5A26F]">Pinterest</a>
              <a href="#" className="block hover:text-[#C5A26F]">TikTok</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#7A7368]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex gap-3">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
