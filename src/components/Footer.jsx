import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#2C2825] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60">Fine jewelry, thoughtfully made.</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976E] transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-[#B8976E] transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-[#B8976E] transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-[#B8976E] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B8976E] transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B8976E] transition-colors">Journal</Link>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Sustainability</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Careers</a>
            </div>
          </div>

          {/* Social & Payments */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Follow Us</div>
            <div className="flex gap-4 text-sm mb-6">
              <a href="#" className="hover:text-[#B8976E] transition-colors">IG</a>
              <a href="#" className="hover:text-[#B8976E] transition-colors">TT</a>
              <a href="#" className="hover:text-[#B8976E] transition-colors">PI</a>
            </div>
            <div className="text-xs text-white/50 tracking-wider">VISA · MC · AMEX · APPLE PAY</div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-white/50 tracking-wider">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer