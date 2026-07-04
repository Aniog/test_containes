import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in small batches with intention and care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-white mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-white transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sets" className="text-sm text-white/60 hover:text-white transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-white mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Jewelry Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">Visa</span>
            <span className="text-xs text-white/40">Mastercard</span>
            <span className="text-xs text-white/40">Amex</span>
            <span className="text-xs text-white/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
