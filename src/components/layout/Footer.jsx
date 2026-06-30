import { Link } from 'react-router-dom'
import { Instagram, Facebook, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-cream">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super-wide text-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-cream/50 text-sm leading-relaxed font-sans max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Gold-plated pieces designed to be treasured, every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Website">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-gold-light mb-4 font-sans">Shop</h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'All Products'].map((l) => (
                <li key={l}>
                  <Link to="/shop" className="text-cream/50 hover:text-cream text-sm transition-colors font-sans">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-gold-light mb-4 font-sans">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ', 'Contact'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase text-gold-light mb-4 font-sans">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors font-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-cream/30 text-xs font-sans">
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