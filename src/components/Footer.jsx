import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  Help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
  ],
  Company: [
    { name: 'Our Story', path: '#about' },
    { name: 'Journal', path: '#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Careers', path: '#' },
  ],
}

const socialLinks = [
  { name: 'Instagram', url: '#', icon: 'IG' },
  { name: 'Pinterest', url: '#', icon: 'PI' },
  { name: 'TikTok', url: '#', icon: 'TK' },
]

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-ivory-100">
      {/* Newsletter section */}
      <div className="border-b border-charcoal-700">
        <div className="max-w-[1400px] mx-auto section-padding py-14 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-ivory-50 mb-3">
              Join the Velmora Circle
            </h3>
            <p className="text-sm text-ivory-200/70 mb-8">
              Be the first to discover new collections, enjoy exclusive offers, and receive 10% off your first order.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-charcoal-700 border border-charcoal-600 text-ivory-50 placeholder:text-charcoal-400 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gold-500 text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto section-padding py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] uppercase text-ivory-50">
              Velmora
            </Link>
            <p className="text-sm text-ivory-200/60 mt-4 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman — premium quality, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 border border-charcoal-600 flex items-center justify-center text-xs font-medium text-ivory-200/70 hover:border-gold-500 hover:text-gold-400 transition-colors"
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
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-ivory-50 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory-200/60 hover:text-gold-400 transition-colors"
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
      <div className="border-t border-charcoal-700">
        <div className="max-w-[1400px] mx-auto section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-200/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-2.5 py-1 border border-charcoal-600 text-[10px] text-ivory-200/50 font-medium"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
