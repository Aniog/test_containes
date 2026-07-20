import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { name: 'All Jewelry', path: '/collection' },
      { name: 'Earrings', path: '/collection?category=earrings' },
      { name: 'Necklaces', path: '/collection?category=necklaces' },
      { name: 'Huggies', path: '/collection?category=huggies' },
      { name: 'Sets', path: '/collection?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Shipping & Returns', path: '/' },
      { name: 'Care Guide', path: '/' },
      { name: 'FAQ', path: '/' },
      { name: 'Track Order', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/' },
      { name: 'Our Story', path: '/' },
      { name: 'Journal', path: '/' },
      { name: 'Contact', path: '/' },
    ],
  },
]

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna'
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-cream inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 max-w-xs leading-relaxed">
              Crafting demi-fine jewelry for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center border border-cream/20 rounded-full text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-cream/50 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons */}
        <div className="hairline mt-12 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-cream/40 uppercase tracking-wider">We Accept</span>
            <div className="flex flex-wrap gap-3">
              {paymentIcons.map(payment => (
                <span
                  key={payment}
                  className="px-3 py-1.5 text-xs border border-cream/10 rounded text-cream/40"
                >
                  {payment}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-8 pt-6 border-t border-cream/10">
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            18K Gold Plated &bull; Hypoallergenic &bull; Ethically Made
          </p>
        </div>
      </div>
    </footer>
  )
}