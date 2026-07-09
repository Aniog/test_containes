import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest text-velmora-gold mb-4">SHOP</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest text-velmora-gold mb-4">HELP</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest text-velmora-gold mb-4">COMPANY</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-cream transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velmora-charcoal/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-velmora-muted">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <span key={card} className="bg-velmora-charcoal/50 text-velmora-muted text-[10px] px-2 py-1 rounded">
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
