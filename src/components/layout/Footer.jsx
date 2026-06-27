import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-text text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide-sm">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-product text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-product text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-product text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Visa</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Mastercard</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">Amex</span>
            <span className="text-xs text-white/40 border border-white/20 px-2 py-0.5 rounded-sm">PayPal</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
