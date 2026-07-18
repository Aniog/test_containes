import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C2825] text-[#D4C9B9] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 pb-12 border-b border-[#5C5651]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="serif text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8A8178] max-w-xs">
              Timeless demi-fine jewelry, crafted with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-sm tracking-[0.1em] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white text-sm tracking-[0.1em] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm tracking-[0.1em] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#8A8178]">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          
          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-4 tracking-[0.1em]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="hover:text-white transition-colors">IG</a>
            <a href="#pinterest" className="hover:text-white transition-colors">PT</a>
            <a href="#tiktok" className="hover:text-white transition-colors">TT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
