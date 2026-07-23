import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-background no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-background/80">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-background/60 hover:text-accent transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-background/60 hover:text-accent transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-background/60 hover:text-accent transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-background/60 hover:text-accent transition-colors no-underline">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-background/80">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-medium mb-4 text-background/80">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Our Story</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Press</span></li>
              <li><span className="text-sm text-background/60 cursor-pointer hover:text-accent transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/40">Visa</span>
            <span className="text-xs text-background/40">Mastercard</span>
            <span className="text-xs text-background/40">Amex</span>
            <span className="text-xs text-background/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/40 cursor-pointer hover:text-accent transition-colors">Instagram</span>
            <span className="text-xs text-background/40 cursor-pointer hover:text-accent transition-colors">Pinterest</span>
            <span className="text-xs text-background/40 cursor-pointer hover:text-accent transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
