import { Link } from 'react-router-dom'
import { Instagram, Twitter, Youtube, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for those who appreciate quiet luxury. Each piece is designed to be treasured, worn, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'Bestsellers'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 font-medium mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Size Guide', 'Track Order'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50 font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/about"
                      className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons placeholder */}
            <div className="flex items-center gap-2 text-cream/30">
              <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-1 rounded">Visa</span>
              <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-1 rounded">MC</span>
              <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-1 rounded">Amex</span>
              <span className="text-[10px] uppercase tracking-wider border border-cream/20 px-2 py-1 rounded">Klarna</span>
            </div>
          </div>
          <p className="text-xs text-cream/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3" /> for the love of jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}