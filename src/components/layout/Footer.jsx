import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-bg-alt)] border-t border-[var(--velmora-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-[0.2em] mb-4 block">
              VELMORA
            </Link>
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">
              Demi-fine gold jewelry for the modern woman. Crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-gold)] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--velmora-border-light)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-gold)] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--velmora-text-muted)]">We accept:</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-white border border-[var(--velmora-border)] rounded flex items-center justify-center text-[8px] font-medium text-[var(--velmora-text-secondary)]">VISA</div>
              <div className="w-10 h-6 bg-white border border-[var(--velmora-border)] rounded flex items-center justify-center text-[8px] font-medium text-[var(--velmora-text-secondary)]">MC</div>
              <div className="w-10 h-6 bg-white border border-[var(--velmora-border)] rounded flex items-center justify-center text-[8px] font-medium text-[var(--velmora-text-secondary)]">AMEX</div>
              <div className="w-10 h-6 bg-white border border-[var(--velmora-border)] rounded flex items-center justify-center text-[8px] font-medium text-[var(--velmora-text-secondary)]">PP</div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--velmora-text-muted)]">
            &copy; {new Date().getFullYear()} Velmora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
