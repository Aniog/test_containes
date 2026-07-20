import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-bold uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Quiet luxury crafted for the modern woman. Demi-fine gold jewelry meant to be treasured every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm font-semibold mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* Simple payment method placeholders */}
            <span className="opacity-50">VISA</span>
            <span className="opacity-50">MASTERCARD</span>
            <span className="opacity-50">AMEX</span>
            <span className="opacity-50">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
