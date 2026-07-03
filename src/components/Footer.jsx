import { Link } from 'react-router-dom'
import { Camera, Heart, Share2 } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact Us']
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press']

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-300">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-[0.2em] text-cream font-medium">
              VELMORA
            </Link>
            <p className="text-sm mt-4 leading-relaxed text-velvet-400 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Each piece is designed for the modern woman who values quiet elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velvet-400 hover:text-gold-500 transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold-500 transition-colors" aria-label="Facebook">
                <Heart className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold-500 transition-colors" aria-label="Pinterest">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Help</h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-cream mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-velvet-400 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-velvet-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-velvet-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}