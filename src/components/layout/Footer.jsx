import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Care Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide font-semibold text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-brand-muted-light text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the everyday. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-wide uppercase text-brand-gold mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-muted-light hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hairline border-brand-charcoal-light mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-muted-light">Visa</span>
            <span className="text-xs text-brand-muted-light">Mastercard</span>
            <span className="text-xs text-brand-muted-light">Amex</span>
            <span className="text-xs text-brand-muted-light">PayPal</span>
            <span className="text-xs text-brand-muted-light">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
