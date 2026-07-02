import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl uppercase tracking-super-wide">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream-dark/70 leading-relaxed max-w-xs">
              Demi-fine jewelry designed for everyday luxury. Crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 text-cream-dark/90">Shop</h4>
            <ul className="space-y-3 text-sm text-cream-dark/70">
              <li><Link to="/shop" className="hover:text-cream-dark transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-cream-dark transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-cream-dark transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-cream-dark transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 text-cream-dark/90">Help</h4>
            <ul className="space-y-3 text-sm text-cream-dark/70">
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 text-cream-dark/90">Company</h4>
            <ul className="space-y-3 text-sm text-cream-dark/70">
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-cream-dark transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-dark/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream-dark/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-cream-dark/50">We accept</span>
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((payment) => (
                <span
                  key={payment}
                  className="text-[10px] uppercase tracking-wider border border-cream-dark/30 px-2 py-1 text-cream-dark/70"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-cream-dark/70 hover:text-cream-dark transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-cream-dark/70 hover:text-cream-dark transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-cream-dark/70 hover:text-cream-dark transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
