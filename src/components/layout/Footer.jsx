import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pin } from 'lucide-react'

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Sets', 'Gift Cards']
const helpLinks = ['Shipping & Returns', 'Contact Us', 'FAQ', 'Size Guide', 'Care Guide']
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press']

export default function Footer() {
  const linkClass = 'text-sm text-deep-taupe hover:text-espresso transition-colors duration-200 leading-loose'

  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.12em] font-semibold text-gold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-[240px]">
              Demi-fine jewelry crafted to be treasured. Premium gold pieces for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <Instagram className="w-4 h-4 text-taupe hover:text-gold cursor-pointer" />
              <Facebook className="w-4 h-4 text-taupe hover:text-gold cursor-pointer" />
              <Pin className="w-4 h-4 text-taupe hover:text-gold cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4 text-gold-light">Shop</h4>
            <ul className="space-y-1">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to={`/shop`} className={linkClass}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4 text-gold-light">Help</h4>
            <ul className="space-y-1">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className={linkClass}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4 text-gold-light">Company</h4>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className={linkClass}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-deep-taupe">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <span className="text-taupe text-[10px] tracking-[0.1em] uppercase">Visa</span>
            <span className="text-taupe text-[10px] tracking-[0.1em] uppercase">Mastercard</span>
            <span className="text-taupe text-[10px] tracking-[0.1em] uppercase">Amex</span>
            <span className="text-taupe text-[10px] tracking-[0.1em] uppercase">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
