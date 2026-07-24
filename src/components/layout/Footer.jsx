import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'All Jewelry', href: '/shop' },
]

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
]

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Crafted with intention. Worn with confidence. Demi-fine jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-accent transition-colors text-sm tracking-wider">IG</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors text-sm tracking-wider">PIN</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors text-sm tracking-wider">TT</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
