import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-dark-muted text-sm leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, priced to be accessible.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-dark-muted text-sm hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold mb-4 text-white">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <span className="text-dark-muted text-sm hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Journal'].map(item => (
                <li key={item}>
                  <span className="text-dark-muted text-sm hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-muted text-xs">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text badges */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span key={method} className="text-[10px] uppercase tracking-wider text-dark-muted border border-white/20 px-2 py-0.5 rounded-sm">
                {method}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <span key={social} className="text-dark-muted text-xs hover:text-accent transition-colors cursor-pointer">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
