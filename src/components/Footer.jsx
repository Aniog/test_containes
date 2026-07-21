import { Link } from 'react-router-dom'
import { Instagram, Facebook, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-cream">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured, designed to last.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'All Jewelry'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Guide', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-cream/60 hover:text-cream transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-cream mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-200">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-200">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-200">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-cream/30">
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">PayPal</span>
            <span className="text-xs">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}