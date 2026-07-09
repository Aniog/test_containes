import { Link } from 'react-router-dom'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Contact Us', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'Track Order', to: '#' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
}

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.15em] text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-cream-muted text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman —
              accessible luxury that lasts.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-cream-muted hover:text-gold text-xs uppercase tracking-wider transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-medium">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream-muted hover:text-cream transition-colors"
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {paymentIcons.map((icon) => (
              <span key={icon} className="text-[10px] uppercase tracking-wider text-cream-muted/60 border border-white/10 px-2 py-1">
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream-muted/60">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
