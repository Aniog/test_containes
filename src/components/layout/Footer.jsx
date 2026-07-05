import { Link } from 'react-router-dom'
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react'

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Gift Sets', href: '/shop?category=set' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Care Guide', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Track Order', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]

const PAYMENT_ICONS = [
  { name: 'Visa', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visa.svg' },
  { name: 'Mastercard', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mastercard.svg' },
  { name: 'Amex', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/americanexpress.svg' },
  { name: 'PayPal', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg' },
  { name: 'Apple Pay', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applepay.svg' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'Youtube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-serif tracking-[0.15em] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured — and worn every day.
            </p>
          </div>

          {/* Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase mb-4 text-white/50">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment icons */}
          <div className="flex items-center gap-4">
            {PAYMENT_ICONS.map((payment) => (
              <img
                key={payment.name}
                src={payment.icon}
                alt={payment.name}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <span className="text-xs text-white/40">
              &copy; 2026 Velmora. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}