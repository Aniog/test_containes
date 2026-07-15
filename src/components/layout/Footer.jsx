import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-warm-gray leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/shop?category=earrings" className="text-sm text-brand-warm-gray hover:text-white transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-sm text-brand-warm-gray hover:text-white transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=huggies" className="text-sm text-brand-warm-gray hover:text-white transition-colors">
                  Huggies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-brand-warm-gray hover:text-white transition-colors">
                  All Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Size Guide
                </span>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Care Instructions
                </span>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-brand-warm-gray hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Sustainability
                </span>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Press
                </span>
              </li>
              <li>
                <span className="text-sm text-brand-warm-gray hover:text-white transition-colors cursor-pointer">
                  Careers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-brand-warm-gray font-sans uppercase tracking-wider">Visa</span>
            <span className="text-xs text-brand-warm-gray font-sans uppercase tracking-wider">Mastercard</span>
            <span className="text-xs text-brand-warm-gray font-sans uppercase tracking-wider">Amex</span>
            <span className="text-xs text-brand-warm-gray font-sans uppercase tracking-wider">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer">Pinterest</span>
            <span className="text-xs text-brand-warm-gray hover:text-white transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
