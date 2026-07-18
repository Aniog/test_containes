import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pin } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact Us']
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers']

export default function Footer() {
  return (
    <footer className="bg-velvet-900 text-cream-50/70">
      <div className="section-pad py-16 md:py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl md:text-2xl font-serif italic tracking-wide text-cream-50">
              VELMORA
            </Link>
            <p className="text-xs text-cream-50/50 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry for the everyday extraordinary. Designed in London, crafted to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Instagram className="w-4 h-4 text-cream-50/50 hover:text-cream-50 transition-colors cursor-pointer" />
              <Facebook className="w-4 h-4 text-cream-50/50 hover:text-cream-50 transition-colors cursor-pointer" />
              <Pin className="w-4 h-4 text-cream-50/50 hover:text-cream-50 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream-50 mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-xs text-cream-50/50 hover:text-cream-50 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream-50 mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-xs text-cream-50/50 hover:text-cream-50 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-cream-50 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-xs text-cream-50/50 hover:text-cream-50 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="hairline-divider my-10 !bg-cream-50/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-50/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-cream-50/40">
            <span>Visa</span>
            <span className="text-cream-50/20">·</span>
            <span>Mastercard</span>
            <span className="text-cream-50/20">·</span>
            <span>Amex</span>
            <span className="text-cream-50/20">·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
