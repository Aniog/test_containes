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
    { label: 'Our Story', path: '#' },
    { label: 'Sustainability', path: '#' },
    { label: 'Press', path: '#' },
    { label: 'Contact', path: '#' },
  ]

  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wide-xl">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-sans uppercase tracking-wider text-white/40 hover:text-brand-gold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm font-sans text-white/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <a href={link.path} className="text-sm font-sans text-white/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <a href={link.path} className="text-sm font-sans text-white/70 hover:text-brand-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] font-sans uppercase tracking-wider text-white/30 border border-white/20 px-2 py-1 rounded-sm">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
