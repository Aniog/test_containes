import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-brand-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-warm-gray leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-wide-xl uppercase text-brand-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-warm-gray hover:text-brand-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-warm-gray hover:text-brand-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-warm-gray hover:text-brand-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-warm-gray hover:text-brand-cream transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-wide-xl uppercase text-brand-gold mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-brand-warm-gray">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-warm-gray">Size Guide</span></li>
              <li><span className="text-sm text-brand-warm-gray">Care Instructions</span></li>
              <li><span className="text-sm text-brand-warm-gray">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-wide-xl uppercase text-brand-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-brand-warm-gray">Our Story</span></li>
              <li><span className="text-sm text-brand-warm-gray">Journal</span></li>
              <li><span className="text-sm text-brand-warm-gray">Sustainability</span></li>
              <li><span className="text-sm text-brand-warm-gray">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-brand-muted/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-warm-gray">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray">Visa</span>
            <span className="text-xs text-brand-warm-gray">Mastercard</span>
            <span className="text-xs text-brand-warm-gray">Amex</span>
            <span className="text-xs text-brand-warm-gray">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-warm-gray hover:text-brand-cream cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs text-brand-warm-gray hover:text-brand-cream cursor-pointer transition-colors">Pinterest</span>
            <span className="text-xs text-brand-warm-gray hover:text-brand-cream cursor-pointer transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
