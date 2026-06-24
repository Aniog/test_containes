import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-[0.25em] text-[hsl(var(--background))]">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-[hsl(var(--foreground-muted))] leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="serif-heading text-sm tracking-[0.15em] mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-[hsl(var(--foreground-muted))]">
              <li><Link to="/shop" className="hover:text-[hsl(var(--background))] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-[hsl(var(--background))] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-[hsl(var(--background))] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-[hsl(var(--background))] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-[hsl(var(--background))] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="serif-heading text-sm tracking-[0.15em] mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-[hsl(var(--foreground-muted))]">
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="serif-heading text-sm tracking-[0.15em] mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[hsl(var(--foreground-muted))]">
              <li><Link to="/about" className="hover:text-[hsl(var(--background))] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[hsl(var(--background))] transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--background))] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[hsl(var(--foreground-muted))] opacity-30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[hsl(var(--foreground-muted))]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[hsl(var(--foreground-muted))]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
