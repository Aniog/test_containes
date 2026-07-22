import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1814] text-[#a8a29e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-['Cormorant_Garamond'] text-2xl font-semibold tracking-[0.2em] text-white">
                VELMORA
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#a8a29e]">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white font-medium mb-6">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals', 'Bestsellers'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-[#c9a96e] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white font-medium mb-6">Help</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Track Order'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm hover:text-[#c9a96e] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm hover:text-[#c9a96e] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#292524] flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#78716c]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#a8a29e] hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#a8a29e] hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#a8a29e] hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
