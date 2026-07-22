import { Link } from 'react-router-dom'

export default function Footer() {
  const columns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Jewelry', to: '/shop' },
        { label: 'Earrings', to: '/shop?category=earrings' },
        { label: 'Necklaces', to: '/shop?category=necklaces' },
        { label: 'Huggies', to: '/shop?category=huggies' },
        { label: 'Gift Sets', to: '/shop' },
      ],
    },
    {
      title: 'Help',
      links: [
        { label: 'Shipping & Returns', to: '/' },
        { label: 'Size Guide', to: '/' },
        { label: 'FAQ', to: '/' },
        { label: 'Contact Us', to: '/' },
        { label: 'Track Order', to: '/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story', to: '/' },
        { label: 'Journal', to: '/' },
        { label: 'Sustainability', to: '/' },
        { label: 'Press', to: '/' },
        { label: 'Careers', to: '/' },
      ],
    },
  ]

  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + description */}
          <div className="col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-ultra-wide uppercase text-cream font-medium"
            >
              Velmora
            </Link>
            <p className="mt-4 text-body-sm text-cream/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for
              the modern woman — accessible luxury that lasts.
            </p>
            {/* Payment icons */}
            <div className="flex gap-3 mt-6">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-7 bg-cream/10 rounded text-[9px] text-cream/40 flex items-center justify-center font-sans uppercase"
                >
                  {icon.slice(0, 4)}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-cream/40 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-body-sm text-cream/60 hover:text-gold-light transition-colors duration-200"
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
        <div className="h-px bg-cream/10 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-cream/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Social links */}
          <div className="flex gap-5">
            {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-body-sm text-cream/40 hover:text-gold-light transition-colors uppercase tracking-wide"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
