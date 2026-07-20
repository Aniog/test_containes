import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-muted text-sm mt-4 leading-relaxed max-w-sm">
              Demi-fine jewelry crafted to be treasured. Modern heirlooms for the everyday.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Necklaces" className="text-muted hover:text-white transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-muted hover:text-white transition-colors text-sm">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-muted hover:text-white transition-colors text-sm">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-muted hover:text-white transition-colors text-sm">Sets</Link></li>
              <li><Link to="/shop" className="text-muted hover:text-white transition-colors text-sm">All Jewelry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Help</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">Jewelry Care</Link></li>
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h4>
            <ul className="space-y-4 mb-8">
              <li><Link to="/about" className="text-muted hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="#" className="text-muted hover:text-white transition-colors text-sm">Journal</Link></li>
            </ul>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}