import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide-xl text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl font-medium text-brand-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl font-medium text-brand-gold mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to="/" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide-xl font-medium text-brand-gold mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <Link to="/" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(p => (
              <span key={p} className="text-xs text-brand-muted-light border border-white/20 px-2 py-1 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-xs text-brand-muted-light hover:text-brand-gold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
