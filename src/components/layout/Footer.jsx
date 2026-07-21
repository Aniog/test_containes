import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1C1917] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#A8A29E] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-[#A8A29E] hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A8A29E] hover:text-[#C9A96E] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#A8A29E] hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-[#A8A29E] hover:text-[#C9A96E] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#292524] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#78716C]">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-[#78716C] hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[#78716C] hover:text-[#C9A96E] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
