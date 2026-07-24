import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'Care Instructions', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
  ],
  Company: [
    { label: 'Our Story', to: '#' },
    { label: 'Journal', to: '#' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-brand-muted-dark leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine gold jewelry for the modern woman.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {['Instagram', 'Pinterest', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-brand-muted-dark hover:text-brand-gold transition-colors text-xs tracking-wider uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-sm tracking-widest-xl uppercase mb-4 text-brand-cream">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-muted-dark hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-divider-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-dark">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(method => (
              <span
                key={method}
                className="text-xs text-brand-muted-dark tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
