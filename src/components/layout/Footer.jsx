import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso text-taupe">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-cream font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, made to be worn.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream mb-4 font-medium">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Gift Sets</span></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream mb-4 font-medium">Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-gold transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">FAQ</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Contact Us</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Size Guide</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-cream mb-4 font-medium">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="hover:text-gold transition-colors cursor-pointer">About Velmora</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Journal</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Careers</span></li>
              <li><span className="hover:text-gold transition-colors cursor-pointer">Stockists</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-taupe/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-taupe/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-taupe transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-taupe transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}