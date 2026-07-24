import { Link } from 'react-router-dom'

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/collection' },
    { name: 'Earrings', path: '/collection?category=earrings' },
    { name: 'Necklaces', path: '/collection?category=necklaces' },
    { name: 'Huggies', path: '/collection?category=huggies' },
    { name: 'Gift Sets', path: '/collection?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Sustainability', path: '#' },
    { name: 'Journal', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
  ],
}

const socialLinks = [
  { name: 'Instagram', href: '#', icon: 'IG' },
  { name: 'Pinterest', href: '#', icon: 'PI' },
  { name: 'TikTok', href: '#', icon: 'TK' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-200">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-cream-100">
              VELMORA
            </Link>
            <p className="mt-4 text-cream-300 body-sm max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              accessible luxury that lasts.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-cream-400/20 flex items-center justify-center text-cream-300 caption hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="caption text-cream-100 mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream-300 body-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-400/10">
        <div className="max-w-[1440px] mx-auto section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-400 text-xs tracking-wide">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <div
                key={method}
                className="px-2 py-1 border border-cream-400/15 text-cream-400 text-[10px] tracking-wider uppercase"
              >
                {method}
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-cream-400 text-xs hover:text-cream-200 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-cream-400 text-xs hover:text-cream-200 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
