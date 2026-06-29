import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  return (
    <footer className="bg-[#231F1B] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-heading text-3xl uppercase tracking-[0.22em] text-white"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry designed to be treasured. 18k gold plated,
              hypoallergenic, and made for everyday luxury.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-brand text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-brand text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-brand text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
