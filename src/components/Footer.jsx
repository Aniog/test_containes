import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#2C2522] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">VELMORA</Link>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Shop</h4>
            <ul className="space-y-2 text-sm text-[#E5DFD3]">
              <li><Link to="/shop" className="hover:text-white">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-white">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Help</h4>
            <ul className="space-y-2 text-sm text-[#E5DFD3]">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Care Guide</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Company</h4>
            <ul className="space-y-2 text-sm text-[#E5DFD3]">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white">Journal</Link></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[#C5A46E]">Follow Us</h4>
            <div className="flex gap-4 text-sm text-[#E5DFD3]">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B635E]">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E5DFD3]">Privacy</a>
            <a href="#" className="hover:text-[#E5DFD3]">Terms</a>
            <span>18K Gold Plated · Hypoallergenic</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer