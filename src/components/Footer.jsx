import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-white">
              Velmora
            </Link>
            <p className="text-xs text-white/40 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/50 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/50 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/50 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-white/50 hover:text-white transition-colors">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-white/50 hover:text-white transition-colors">All Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/30 hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-[11px] text-white/30 hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}