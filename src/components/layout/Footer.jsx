import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-base text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-text-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs tracking-wide-luxury uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs tracking-wide-luxury uppercase mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs tracking-wide-luxury uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-sans text-sm text-velmora-text-muted hover:text-velmora-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Bottom */}
        <div className="border-t border-velmora-text-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-velmora-text-muted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-velmora-text-muted">We accept:</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="bg-velmora-text-muted/20 px-2 py-1 rounded text-[10px] font-sans">
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

export default Footer
