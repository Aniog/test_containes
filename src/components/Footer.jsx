import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Shop: [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
    { name: 'Gift Sets', href: '/shop?category=gift-sets' },
  ],
  Help: [
    { name: 'Shipping & Delivery', href: '#' },
    { name: 'Returns & Exchanges', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="text-xs text-velmora-taupe mt-4 leading-relaxed max-w-[220px]">
              Demi-fine gold jewelry crafted for the woman who values quiet luxury and timeless design.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="#" className="text-velmora-taupe hover:text-velmora-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-velmora-gold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-velmora-taupe hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-taupe">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay'].map(payment => (
              <span
                key={payment}
                className="text-[10px] uppercase tracking-[0.1em] text-velmora-taupe bg-white/5 px-3 py-1.5 rounded"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}