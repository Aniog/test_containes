import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const PAYMENTS = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY']

export default function Footer() {
  return (
    <footer className="bg-espresso text-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-3xl tracking-[0.25em] text-ivory">VELMORA</div>
            <p className="mt-4 text-sm text-mist/70 leading-relaxed max-w-xs">
              Demi-fine 18K gold plated jewelry, crafted to be treasured and made
              for everyday wear.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-mist/70 hover:text-gold transition-colors">
                <Instagram width={18} height={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-mist/70 hover:text-gold transition-colors">
                <Facebook width={18} height={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-mist/70 hover:text-gold transition-colors">
                <Twitter width={18} height={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-mist/70">
              <li><Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-mist/70">
              <li><a href="#" className="hover:text-gold transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Returns &amp; Exchanges</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Materials &amp; Care</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-ivory mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-mist/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-mist/50 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] uppercase tracking-wider text-mist/60 border border-white/15 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
