import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-2xl tracking-wider mb-4">VELMORA</h2>
            <p className="text-ivory/60 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-ivory/60 hover:text-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-ivory/80">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-ivory/60 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-ivory/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-ivory/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-ivory/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-ivory/60 hover:text-gold transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-ivory/80">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4 text-ivory/80">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-ivory/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-ivory/60 hover:text-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-ivory/60 hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ivory/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span key={card} className="px-2 py-1 bg-ivory/10 rounded text-[10px] text-ivory/60">
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
