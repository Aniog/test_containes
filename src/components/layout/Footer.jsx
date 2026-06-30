import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-bg border-t border-velmora-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-2xl text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
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
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-widest-xl uppercase text-velmora-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-widest-xl uppercase text-velmora-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-widest-xl uppercase text-velmora-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-velmora-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted/60">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} className="text-[10px] text-velmora-muted/50 tracking-wider uppercase border border-velmora-border/20 px-2 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
