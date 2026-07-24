import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-ivory no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ivory/60 mt-4 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-ivory/40 mb-4">Shop</h4>
            <div className="flex flex-col gap-3">
              <Link to="/shop?category=earrings" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors no-underline">Earrings</Link>
              <Link to="/shop?category=necklaces" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors no-underline">Necklaces</Link>
              <Link to="/shop?category=huggies" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors no-underline">Huggies</Link>
              <Link to="/shop" className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors no-underline">All Jewelry</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-ivory/40 mb-4">Help</h4>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-sm text-ivory/70">Shipping & Returns</span>
              <span className="font-sans text-sm text-ivory/70">Size Guide</span>
              <span className="font-sans text-sm text-ivory/70">Care Instructions</span>
              <span className="font-sans text-sm text-ivory/70">FAQ</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-ivory/40 mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-sm text-ivory/70">Our Story</span>
              <span className="font-sans text-sm text-ivory/70">Journal</span>
              <span className="font-sans text-sm text-ivory/70">Contact</span>
              <span className="font-sans text-sm text-ivory/70">Careers</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-ivory/40">Visa</span>
            <span className="font-sans text-xs text-ivory/40">Mastercard</span>
            <span className="font-sans text-xs text-ivory/40">Amex</span>
            <span className="font-sans text-xs text-ivory/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-ivory/50 hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="font-sans text-xs text-ivory/50 hover:text-gold transition-colors cursor-pointer">Pinterest</span>
            <span className="font-sans text-xs text-ivory/50 hover:text-gold transition-colors cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
