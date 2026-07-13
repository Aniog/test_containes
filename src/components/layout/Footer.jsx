import { Link } from 'react-router-dom'

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'Gift Sets', path: '/shop' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', path: '#' },
    { label: 'Size Guide', path: '#' },
    { label: 'Care Instructions', path: '#' },
    { label: 'FAQ', path: '#' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/#about' },
    { label: 'Sustainability', path: '#' },
    { label: 'Press', path: '#' },
    { label: 'Contact', path: '#' },
  ]

  return (
    <footer className="bg-velmora-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wider font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-widest text-white/50 hover:text-velmora-gold-light transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-velmora-gold-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium text-white mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-velmora-gold-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-velmora-gold-light transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] uppercase tracking-wider text-white/30 border border-white/20 px-2 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
