import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Gift Sets' },
    { to: '/shop', label: 'All Jewelry' },
  ]

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/faq', label: 'FAQ' },
    { to: '/size-guide', label: 'Size Guide' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/track', label: 'Track Order' },
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/press', label: 'Press' },
    { to: '/careers', label: 'Careers' },
  ]

  return (
    <footer className="bg-brand-charcoal text-brand-ivory/80">
      {/* Newsletter accent section */}
      <div className="bg-brand-gold/10 border-t border-brand-gold/20">
        <div className="section-padding py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-brand-ivory tracking-[-0.01em]">
              Join for 10% off your first order
            </h3>
            <p className="font-sans text-sm text-brand-ivory/60 mt-1">
              Be the first to know about new arrivals, exclusive offers, and styling tips.
            </p>
          </div>
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-5 py-3.5 bg-brand-charcoal border border-brand-ivory/20 text-brand-ivory placeholder:text-brand-ivory/40 font-sans text-sm focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-brand-gold text-brand-charcoal font-sans text-xs font-medium tracking-[0.15em] uppercase hover:bg-brand-gold-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.08em] text-brand-ivory">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-brand-ivory/50 mt-4 leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman — 
              premium quality, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-ivory/50 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-ivory/50 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-ivory/50 hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brand-ivory/40 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brand-ivory/40 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-brand-ivory/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-brand-ivory/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-ivory/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-ivory/30">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="font-sans text-[0.6rem] text-brand-ivory/30 border border-brand-ivory/15 px-2 py-1 tracking-wider uppercase"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
