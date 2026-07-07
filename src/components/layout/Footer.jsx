import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Affiliates', href: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian" style={{ color: '#FAF7F2' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: '#FAF7F2' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#FAF7F2' }}
            >
              Velmora
            </Link>
            <p className="font-manrope text-xs leading-relaxed mt-4 max-w-[200px]" style={{ color: '#B8A898' }}>
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="transition-colors duration-300" style={{ color: '#B8A898' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#B8A898' }}
                aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="transition-colors duration-300" style={{ color: '#B8A898' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#B8A898' }}
                aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="transition-colors duration-300" style={{ color: '#B8A898' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#B8A898' }}
                aria-label="Twitter">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-[10px] tracking-[0.2em] uppercase mb-5" style={{ color: '#C9A96E' }}>
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs transition-colors duration-200"
                      style={{ color: '#B8A898' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#FAF7F2' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#B8A898' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-[10px] tracking-wider" style={{ color: '#B8A898' }}>
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'].map(p => (
              <span
                key={p}
                className="font-manrope text-[8px] tracking-wider border border-velmora-charcoal px-2 py-1"
                style={{ color: '#B8A898' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
