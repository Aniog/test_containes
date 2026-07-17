import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry designed for the modern woman. 18K gold-plated, hypoallergenic, and made to last.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-5 text-white/80">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-white/50 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-5 text-white/80">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-white/50 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-5 text-white/80">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-white/50 hover:text-velmora-gold transition-colors font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 font-sans hidden md:inline">We accept:</span>
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
                <span
                  key={p}
                  className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 text-white/50"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
