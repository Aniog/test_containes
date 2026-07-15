import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter } from "lucide-react"

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.3em] mb-4">VELMORA</h3>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed in
              studio, made to be worn every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-champagne mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link to="/shop" className="hover:text-champagne transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-champagne transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-champagne transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-champagne transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-champagne mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><a href="#" className="hover:text-champagne transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-champagne mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li><Link to="/about" className="hover:text-champagne transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-champagne transition-colors">Journal</Link></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-champagne transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-champagne transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-champagne transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] uppercase tracking-wider text-cream/60 border border-cream/20 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}
