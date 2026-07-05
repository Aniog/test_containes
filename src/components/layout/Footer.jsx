import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/70 hover:text-brand-goldLight transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-goldLight transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-goldLight transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest text-white mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/shop?category=earrings" className="hover:text-brand-goldLight transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-brand-goldLight transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-brand-goldLight transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-brand-goldLight transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-brand-goldLight transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest text-white mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-widest text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-brand-goldLight transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-brand-goldLight transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-goldLight transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}