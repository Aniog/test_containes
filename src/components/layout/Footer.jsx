import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h3 className="font-serif text-3xl font-light mb-3">Join the Velmora World</h3>
          <p className="text-cream/70 text-sm mb-6 max-w-md mx-auto">
            Subscribe for 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm font-medium tracking-wide hover:bg-accent-hover transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer columns */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="text-cream/60 text-sm mt-3 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">SHOP</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-cream/60 text-sm hover:text-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">HELP</h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <span className="text-cream/60 text-sm hover:text-cream transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wide mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map(item => (
                <li key={item}>
                  <span className="text-cream/60 text-sm hover:text-cream transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(card => (
              <span key={card} className="text-cream/40 text-xs border border-white/20 px-2 py-1 rounded">
                {card}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <span key={social} className="text-cream/50 text-xs hover:text-cream transition-colors cursor-pointer">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
