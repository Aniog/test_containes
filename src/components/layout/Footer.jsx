import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const columns = [
    {
      title: 'Shop',
      links: [
        { to: '/shop?category=earrings', label: 'Earrings' },
        { to: '/shop?category=necklaces', label: 'Necklaces' },
        { to: '/shop?category=huggies', label: 'Huggies' },
        { to: '/shop', label: 'All Jewelry' },
      ],
    },
    {
      title: 'Help',
      links: [
        { to: '/shipping', label: 'Shipping & Returns' },
        { to: '/care', label: 'Jewelry Care' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact Us' },
      ],
    },
    {
      title: 'Company',
      links: [
        { to: '/about', label: 'Our Story' },
        { to: '/journal', label: 'Journal' },
        { to: '/sustainability', label: 'Sustainability' },
        { to: '/privacy', label: 'Privacy Policy' },
      ],
    },
  ]

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-content mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-section font-medium text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-cream/60 font-sans text-sm font-light leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-section uppercase text-cream/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-cream/70 hover:text-cream font-sans text-sm font-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 font-sans text-xs font-light">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            {/* Payment icons placeholder */}
            <div className="flex items-center gap-3 text-cream/40">
              <span className="font-sans text-xs font-light border border-cream/20 rounded px-2 py-1">VISA</span>
              <span className="font-sans text-xs font-light border border-cream/20 rounded px-2 py-1">MC</span>
              <span className="font-sans text-xs font-light border border-cream/20 rounded px-2 py-1">AMEX</span>
              <span className="font-sans text-xs font-light border border-cream/20 rounded px-2 py-1">PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
