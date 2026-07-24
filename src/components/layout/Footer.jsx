import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-widest text-background">
              VELMORA
            </Link>
            <p className="text-sm text-background/60 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-background/60 hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-background/60 hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-background/60 hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-background/60 hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-background/60 hover:text-primary transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 text-background/80">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-background/60 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-background/60 hover:text-primary transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span key={method} className="px-2 py-1 bg-background/10 rounded text-[10px] text-background/60">
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
