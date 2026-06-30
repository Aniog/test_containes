import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-deep text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-xl tracking-widest text-velmora-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry for the modern woman. Crafted with 18K gold plating and designed to be treasured every day.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link>
              <Link to="/shop?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link>
              <Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-white transition-colors">Size Guide</a>
              <a href="#" className="hover:text-white transition-colors">Jewelry Care</a>
              <a href="#" className="hover:text-white transition-colors">FAQs</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Our Story</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="hover:text-white transition-colors">Journal</a>
              <a href="#" className="hover:text-white transition-colors">Stockists</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
