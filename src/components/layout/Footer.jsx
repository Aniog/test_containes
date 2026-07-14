import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-cream-300 section-padding pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="heading-serif text-2xl text-gold-400 tracking-[0.15em] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-cream-400/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-400 mb-5 font-medium">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-cream-400/60 hover:text-gold-400 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-400 mb-5 font-medium">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-cream-400/60 hover:text-gold-400 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-cream-400 mb-5 font-medium">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-cream-400/60 hover:text-gold-400 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-cream-400/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(icon => (
              <div
                key={icon}
                className="w-10 h-6 rounded bg-cream-400/10 flex items-center justify-center"
              >
                <span className="text-[9px] text-cream-400/40 font-medium tracking-wider uppercase">
                  {icon.slice(0, 4)}
                </span>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {['Instagram', 'Pinterest', 'TikTok'].map(social => (
              <a
                key={social}
                href="#"
                className="text-xs text-cream-400/40 hover:text-gold-400 transition-colors tracking-wider uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
