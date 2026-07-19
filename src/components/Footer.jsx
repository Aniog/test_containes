import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="font-serif text-3xl tracking-wide inline-block">VELMORA</Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed pr-4">
              Demi-fine jewelry crafted for the modern individual. Designed to be treasured, worn daily, and passed down.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/collections/all" className="hover:text-primary-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-primary-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-primary-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-primary-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections/best-sellers" className="hover:text-primary-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-primary-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Our World</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70 mb-8">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary-foreground transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
