import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-white/70">
              Demi-fine jewelry crafted to be treasured. Designed in California.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link to="/shop?category=earrings" className="hover:text-[#c9a96e]">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[#c9a96e]">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[#c9a96e]">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[#c9a96e]">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide">Help</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Materials & Care</span></li>
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wide">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-[#c9a96e]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#c9a96e]">Journal</Link></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Press</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <Instagram className="h-4 w-4 hover:text-[#c9a96e] cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-[#c9a96e] cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-[#c9a96e] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
