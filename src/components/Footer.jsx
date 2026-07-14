import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-widest text-brand-ink">VELMORA</Link>
            <p className="text-sm text-brand-muted mt-3 max-w-xs">
              Demi-fine jewelry designed for the modern woman. Quiet luxury, warm gold, timeless silhouettes.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-ink">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-ink">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-ink">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-ink">All Pieces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-brand-muted hover:text-brand-ink">About Us</Link></li>
              <li><Link to="/journal" className="text-sm text-brand-muted hover:text-brand-ink">Journal</Link></li>
              <li><span className="text-sm text-brand-muted">Contact</span></li>
              <li><span className="text-sm text-brand-muted">Shipping & Returns</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-ink mb-4">Company</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-brand-muted">Sustainability</span></li>
              <li><span className="text-sm text-brand-muted">Careers</span></li>
              <li><span className="text-sm text-brand-muted">Press</span></li>
              <li><span className="text-sm text-brand-muted">Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-subtle">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-muted hover:text-brand-ink"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-brand-muted hover:text-brand-ink"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-brand-muted hover:text-brand-ink"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
