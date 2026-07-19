import { Link } from 'react-router-dom'
import { Instagram, Facebook, Globe } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact']
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Stockists']

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-gold-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe-light font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-taupe-light hover:text-gold-light transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-taupe-light hover:text-gold-light transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-taupe-light hover:text-gold-light transition-colors"><Globe size={18} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-xs tracking-widest uppercase text-gold-light mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-taupe-light hover:text-cream transition-colors font-sans">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-xs tracking-widest uppercase text-gold-light mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-taupe-light hover:text-cream transition-colors font-sans">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-xs tracking-widest uppercase text-gold-light mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-taupe-light hover:text-cream transition-colors font-sans">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-taupe/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-taupe-light font-sans">
            <span>Visa</span>
            <span className="text-taupe">·</span>
            <span>Mastercard</span>
            <span className="text-taupe">·</span>
            <span>Amex</span>
            <span className="text-taupe">·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
