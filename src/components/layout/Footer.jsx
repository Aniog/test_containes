import { Link } from 'react-router-dom'

export default function Footer() {
  const shopLinks = [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop' },
    { label: 'New Arrivals', href: '/shop' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]

  const companyLinks = [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ]

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider text-white no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm font-sans text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans">Shop</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm font-sans text-white/70 hover:text-gold transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans">Help</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm font-sans text-white/70 hover:text-gold transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 font-sans">Company</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm font-sans text-white/70 hover:text-gold transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40 font-sans">Visa</span>
            <span className="text-xs text-white/40 font-sans">Mastercard</span>
            <span className="text-xs text-white/40 font-sans">Amex</span>
            <span className="text-xs text-white/40 font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
