import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="serif-heading text-3xl tracking-wider block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Demi-fine jewelry crafted with intention. Designed to be treasured, worn, and passed down.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-background/70 hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-background/70 hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-background/70 hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-background/70 hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-background/70 hover:text-primary transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-background/70 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-background/70 hover:text-primary transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/50">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="bg-background/10 px-2 py-1 text-xs rounded">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
