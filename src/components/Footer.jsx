import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed font-sans">
              Demi-fine jewelry crafted with intention. Designed for the modern woman who values quality, elegance, and self-expression.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-5 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-5 text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Care Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium mb-5 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Journal</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors font-sans">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(name => (
              <span key={name} className="text-[10px] text-white/40 border border-white/20 rounded px-2 py-1 font-sans">
                {name}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
