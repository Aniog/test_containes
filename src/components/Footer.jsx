import { Link } from 'react-router-dom'
import { Instagram, Youtube, Twitter, ChevronUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-midnight-950 text-cream/80">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo + social */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wider text-cream"
            >
              VELMORA
            </Link>
            <p className="text-xs text-cream/50 mt-3 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry, crafted to be treasured.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-cream transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/60 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/60 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream/60 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-widest uppercase text-cream/40 px-2.5 py-1 border border-cream/10 rounded"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-cream/30">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center hover:bg-cream/20 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4 text-cream/80" />
      </button>
    </footer>
  )
}