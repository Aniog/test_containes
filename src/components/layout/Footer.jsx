import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] text-white">VELMORA</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-stone-500 hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
