import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

const shopLinks = [
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Gift Sets', path: '/shop?category=sets' },
  { label: 'New Arrivals', path: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', path: '/' },
  { label: 'Size Guide', path: '/' },
  { label: 'Care Instructions', path: '/' },
  { label: 'FAQ', path: '/' },
  { label: 'Contact Us', path: '/' },
]

const companyLinks = [
  { label: 'Our Story', path: '/#story' },
  { label: 'Sustainability', path: '/' },
  { label: 'Press', path: '/' },
  { label: 'Affiliates', path: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-velvet text-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-widest2 text-champagne mb-4">VELMORA</p>
            <p className="font-sans text-xs text-stone leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-champagne transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-champagne transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-5">Shop</p>
            <ul className="space-y-3">
              {shopLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="font-sans text-xs text-stone hover:text-parchment transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-5">Help</p>
            <ul className="space-y-3">
              {helpLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="font-sans text-xs text-stone hover:text-parchment transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.path} className="font-sans text-xs text-stone hover:text-parchment transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-mink pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map(p => (
              <span key={p} className="font-sans text-[9px] tracking-wider border border-mink text-stone px-2 py-1 rounded">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
