import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-plus text-white">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-white/50 mt-4 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/40 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <span className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map(item => (
                <li key={item}>
                  <span className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text placeholders */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(p => (
              <span
                key={p}
                className="font-sans text-[10px] uppercase tracking-wider text-white/30 border border-white/20 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map(s => (
              <span
                key={s}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
