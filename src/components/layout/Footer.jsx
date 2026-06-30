import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2C2420] text-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-section text-[#FAF7F2] no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#FAF7F2]/70 leading-relaxed">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#FAF7F2]/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop?category=earrings" className="text-sm text-[#FAF7F2]/80 hover:text-[#D4A843] transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#FAF7F2]/80 hover:text-[#D4A843] transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#FAF7F2]/80 hover:text-[#D4A843] transition-colors no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[#FAF7F2]/80 hover:text-[#D4A843] transition-colors no-underline">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#FAF7F2]/50 mb-4">
              Help
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#FAF7F2]/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Our Story</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Press</span></li>
              <li><span className="text-sm text-[#FAF7F2]/80 cursor-pointer hover:text-[#D4A843] transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FAF7F2]/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#FAF7F2]/50">Visa</span>
            <span className="text-xs text-[#FAF7F2]/50">Mastercard</span>
            <span className="text-xs text-[#FAF7F2]/50">Amex</span>
            <span className="text-xs text-[#FAF7F2]/50">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#FAF7F2]/60 cursor-pointer hover:text-[#D4A843] transition-colors">Instagram</span>
            <span className="text-xs text-[#FAF7F2]/60 cursor-pointer hover:text-[#D4A843] transition-colors">Pinterest</span>
            <span className="text-xs text-[#FAF7F2]/60 cursor-pointer hover:text-[#D4A843] transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
