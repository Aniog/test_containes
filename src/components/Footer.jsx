import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest font-light"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Demi-fine jewelry designed to be treasured. Crafted for the modern woman who appreciates quiet luxury.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 transition-colors hover:text-white" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/70 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text for simplicity */}
            <span className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/40">VISA</span>
            <span className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/40">MC</span>
            <span className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/40">AMEX</span>
            <span className="rounded border border-white/10 px-2 py-1 text-[10px] text-white/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
