import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="logo text-xl text-[#2C2825] mb-4">VELMORA</div>
            <p className="text-sm text-[#6B6560] max-w-[200px]">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-4">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B89B6E]">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B89B6E]">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B89B6E]">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B89B6E]">Huggies</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-4">COLLECTIONS</div>
            <div className="space-y-2 text-sm">
              <Link to="/collections" className="block hover:text-[#B89B6E]">Signature</Link>
              <Link to="/collections" className="block hover:text-[#B89B6E]">Bridal</Link>
              <Link to="/collections" className="block hover:text-[#B89B6E]">Everyday</Link>
              <Link to="/collections" className="block hover:text-[#B89B6E]">Gifting</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-4">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B89B6E]">Shipping</a>
              <a href="#" className="block hover:text-[#B89B6E]">Returns</a>
              <a href="#" className="block hover:text-[#B89B6E]">Care Guide</a>
              <a href="#" className="block hover:text-[#B89B6E]">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] text-[#6B6560] mb-4">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B89B6E]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B89B6E]">Journal</Link>
              <a href="#" className="block hover:text-[#B89B6E]">Sustainability</a>
              <a href="#" className="block hover:text-[#B89B6E]">Press</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B89B6E]">Privacy</a>
            <a href="#" className="hover:text-[#B89B6E]">Terms</a>
            <a href="#" className="hover:text-[#B89B6E]">Accessibility</a>
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