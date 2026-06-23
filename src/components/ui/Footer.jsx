import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Jewelry Care', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
]

const companyLinks = [
  { label: 'Our Story', to: '#' },
  { label: 'Journal', to: '#' },
  { label: 'Sustainability', to: '#' },
  { label: 'Careers', to: '#' },
]

const socialLinks = [
  { label: 'Instagram', icon: 'I', to: '#' },
  { label: 'Facebook', icon: 'F', to: '#' },
  { label: 'Pinterest', icon: 'P', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-cream-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.22em] text-cream-50"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-sans text-cream-400 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Designed for the
              modern woman who values quiet luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.to}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-cream-600 text-cream-400 text-xs font-sans hover:border-cream-300 hover:text-cream-100 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-sm tracking-widest text-cream-50 mb-4">
              SHOP
            </h3>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-sans text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-sm tracking-widest text-cream-50 mb-4">
              HELP
            </h3>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-sm font-sans text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-sm tracking-widest text-cream-50 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.to}
                    className="text-sm font-sans text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-cream-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs font-sans text-cream-500 tracking-wide">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
