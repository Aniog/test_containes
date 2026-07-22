import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { name: 'All Jewelry', path: '/collection' },
    { name: 'Earrings', path: '/collection?category=earrings' },
    { name: 'Necklaces', path: '/collection?category=necklaces' },
    { name: 'Huggies', path: '/collection?category=huggies' },
    { name: 'Gift Sets', path: '/collection' },
  ],
  Help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  Company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl text-cream tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine 18K gold jewelry designed for the modern woman — 
              premium quality, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-cream mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/50 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-cream/40">
              {/* Payment icons */}
              <span className="text-xs">Visa</span>
              <span className="text-xs">Mastercard</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
              <span className="text-xs">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
