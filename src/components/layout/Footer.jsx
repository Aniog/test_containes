import { Link } from 'react-router-dom'
import { Instagram, Youtube, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'Size Guide', path: '/size-guide' },
      { label: 'Care Instructions', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'Youtube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-velvet-surface border-t border-velvet-border">
      <div className="container-wide py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-bold tracking-widest text-velvet-text hover:text-velvet-gold transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-muted leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured, worn every day, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-velvet-dim hover:text-velvet-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs uppercase tracking-wider text-velvet-dim font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velvet-muted hover:text-velvet-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="mt-12 pt-8 border-t border-velvet-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-xs text-velvet-dim px-3 py-1.5 border border-velvet-border rounded font-sans"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="text-xs text-velvet-dim font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}