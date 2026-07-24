import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-base border-t border-velmora-dividerDark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl uppercase tracking-[0.3em] text-velmora-textOnDark font-medium">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-velmora-textMutedOnDark mt-4 leading-relaxed">
              Demi-fine jewelry crafted for everyday elegance. Accessible luxury, honest pricing.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textOnDark mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textOnDark mb-4">
              Help
            </h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textOnDark mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="font-sans text-sm text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velmora-dividerDark flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-velmora-textMutedOnDark uppercase tracking-[0.05em]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(card => (
                <span key={card} className="bg-velmora-dividerDark/50 text-velmora-textMutedOnDark font-sans text-xs px-2 py-1 rounded-sm">
                  {card}
                </span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-velmora-textMutedOnDark hover:text-velmora-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-velmora-textMutedOnDark">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
