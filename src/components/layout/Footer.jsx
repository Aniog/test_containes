import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const shopLinks = [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=Earrings' },
    { label: 'Necklaces', path: '/shop?category=Necklaces' },
    { label: 'Huggies', path: '/shop?category=Huggies' },
  ]

  const helpLinks = [
    { label: 'Shipping', path: '/about' },
    { label: 'Returns', path: '/about' },
    { label: 'Care Guide', path: '/journal' },
    { label: 'Contact', path: '/about' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/about' },
  ]

  return (
    <footer className="bg-velmora-taupe text-velmora-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 mb-16">
          {/* Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Fine demi-gold jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Shop</div>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Help</div>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-4 text-white/60">Company</div>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link text-white/80 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {/* Payment Icons (text representation) */}
            <div className="flex items-center gap-3 tracking-[0.1em]">
              VISA · MC · AMEX · APPLE PAY
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">IG</a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">PT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
