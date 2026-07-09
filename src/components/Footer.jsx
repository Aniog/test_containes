import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
]

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Care Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
]

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '#' },
  { label: 'Press', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-3xl tracking-widest mb-4"
            >
              VELMORA
            </Link>
            <p className="text-velmora-taupe text-sm max-w-xs leading-relaxed">
              Demi-fine jewelry designed to be treasured. Crafted in 18K gold plate,
              made for everyday moments and forever keepsakes.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-velmora-cream/80">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-velmora-cream/80">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-velmora-cream/80">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-velmora-hairline-dark flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="text-xs text-velmora-taupe uppercase tracking-widest">
              We accept
            </span>
            <div className="flex items-center gap-2">
              {['VISA', 'MC', 'AMEX', 'PayPal'].map((brand) => (
                <span
                  key={brand}
                  className="px-2 py-1 border border-velmora-hairline-dark text-[10px] font-semibold tracking-wide"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-velmora-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
