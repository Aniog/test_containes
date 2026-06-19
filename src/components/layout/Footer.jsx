import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

// Pinterest SVG icon (not in Lucide)
function PinterestIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.67.968-2.917 2.174-2.917 1.024 0 1.519.77 1.519 1.693 0 1.032-.656 2.575-.995 4.008-.284 1.198.6 2.175 1.781 2.175 2.139 0 3.782-2.254 3.782-5.511 0-2.882-2.072-4.897-5.028-4.897-3.425 0-5.437 2.568-5.437 5.225 0 1.034.398 2.143.896 2.747.099.12.114.225.084.346-.091.38-.293 1.198-.334 1.366-.052.22-.173.267-.401.162-1.496-.696-2.432-2.888-2.432-4.647 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.215 0-2.358-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.349-1.492 3.146C9.57 23.812 10.763 24 12 24c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z" />
    </svg>
  )
}

function TwitterIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '/shipping' },
      { label: 'Returns & Exchanges', path: '/returns' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: PinterestIcon, label: 'Pinterest', href: '#' },
  { icon: TwitterIcon, label: 'X (Twitter)', href: '#' },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay']

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-wider font-semibold">
              VELMORA
            </Link>
            <p className="text-brand-stone text-sm mt-4 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured — and worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-brand-stone hover:text-brand-gold transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs tracking-widest uppercase text-brand-stone mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-brand-stone bg-white/5 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-brand-stone">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}