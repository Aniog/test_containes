import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-warm-black border-t border-divider">
      <div className="max-w-container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-warm-cream">
              VELMORA
            </Link>
            <p className="text-sm text-warm-gray mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, made for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-cream mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-cream mb-4">Help</h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'FAQ', 'Size Guide', 'Contact Us', 'Track Order'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-warm-gray hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-warm-cream mb-4">Company</h4>
            <ul className="space-y-2">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-warm-gray hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
              <span key={p} className="text-[10px] text-warm-gray-light border border-divider rounded px-2 py-0.5">
                {p}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-gray hover:text-gold transition-colors duration-300" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
