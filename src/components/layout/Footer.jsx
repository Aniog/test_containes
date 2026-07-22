import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] mb-6 inline-block">
              VELMORA
            </Link>
            <p className="text-muted/70 text-sm max-w-sm mb-6 font-light leading-relaxed">
              Quiet luxury crafted for the modern individual. Demi-fine jewelry designed to be lived in, loved, and treasured.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Shop</h4>
            <Link to="/shop" className="text-muted/70 hover:text-background transition-colors text-sm">All Jewelry</Link>
            <Link to="/category/earrings" className="text-muted/70 hover:text-background transition-colors text-sm">Earrings</Link>
            <Link to="/category/necklaces" className="text-muted/70 hover:text-background transition-colors text-sm">Necklaces</Link>
            <Link to="/category/huggies" className="text-muted/70 hover:text-background transition-colors text-sm">Huggies & Cuffs</Link>
            <Link to="/collections" className="text-muted/70 hover:text-background transition-colors text-sm">Curated Collections</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Help</h4>
            <Link to="/faq" className="text-muted/70 hover:text-background transition-colors text-sm">FAQ</Link>
            <Link to="/shipping" className="text-muted/70 hover:text-background transition-colors text-sm">Shipping & Returns</Link>
            <Link to="/care" className="text-muted/70 hover:text-background transition-colors text-sm">Jewelry Care</Link>
            <Link to="/contact" className="text-muted/70 hover:text-background transition-colors text-sm">Contact Us</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Company</h4>
            <Link to="/about" className="text-muted/70 hover:text-background transition-colors text-sm">Our Story</Link>
            <Link to="/journal" className="text-muted/70 hover:text-background transition-colors text-sm">Journal</Link>
            <Link to="/sustainability" className="text-muted/70 hover:text-background transition-colors text-sm">Sustainability</Link>
            <Link to="/terms" className="text-muted/70 hover:text-background transition-colors text-sm">Terms of Service</Link>
            <Link to="/privacy" className="text-muted/70 hover:text-background transition-colors text-sm">Privacy Policy</Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-muted/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 items-center opacity-60 grayscale">
            {/* Payment icons placeholder */}
            <span className="px-2 py-1 border border-muted/20 rounded">Visa</span>
            <span className="px-2 py-1 border border-muted/20 rounded">Mastercard</span>
            <span className="px-2 py-1 border border-muted/20 rounded">Amex</span>
            <span className="px-2 py-1 border border-muted/20 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
