import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl uppercase font-semibold text-white"
            >
              Velmora
            </Link>
            <p className="font-sans text-sm text-velmora-stone mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Designed in small batches with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-stone mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-velmora-cream hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-stone mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-velmora-cream hover:text-velmora-gold transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-stone mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-velmora-cream hover:text-velmora-gold transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-velmora-stone text-xs font-sans">Visa</span>
            <span className="text-velmora-stone text-xs font-sans">Mastercard</span>
            <span className="text-velmora-stone text-xs font-sans">Amex</span>
            <span className="text-velmora-stone text-xs font-sans">PayPal</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-velmora-stone hover:text-velmora-gold transition-colors">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-stone hover:text-velmora-gold transition-colors">
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-velmora-stone hover:text-velmora-gold transition-colors">
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          <p className="font-sans text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}