import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A2520] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-serif text-2xl uppercase tracking-[0.15em] mb-4">
              Velmora
            </h3>
            <p className="text-sm text-[#8A8070] leading-relaxed">
              Demi-fine gold jewelry crafted for the modern woman. 
              Quiet luxury, accessible prices.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg uppercase tracking-wider mb-4">Shop</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                All Jewelry
              </Link>
              <Link to="/shop" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Earrings
              </Link>
              <Link to="/shop" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Necklaces
              </Link>
              <Link to="/shop" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Huggies
              </Link>
            </nav>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-lg uppercase tracking-wider mb-4">Help</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shipping" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Shipping & Returns
              </Link>
              <Link to="/care" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Jewelry Care
              </Link>
              <Link to="/faq" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg uppercase tracking-wider mb-4">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Our Story
              </Link>
              <Link to="/sustainability" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Sustainability
              </Link>
              <Link to="/journal" className="text-sm text-[#8A8070] hover:text-white transition-colors">
                Journal
              </Link>
            </nav>
          </div>
        </div>

        {/* Payment Icons & Social Links */}
        <div className="border-t border-[#3D3630] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <CreditCard size={24} className="text-[#8A8070]" />
            <span className="text-sm text-[#8A8070]">Secure Payment</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#8A8070] hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[#8A8070] hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#8A8070] hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-sm text-[#8A8070]">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}
