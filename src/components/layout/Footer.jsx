import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Gift Sets', href: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'Care Instructions', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/#story' },
      { label: 'Sustainability', href: '#' },
      { label: 'Journal', href: '/#newsletter' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-200">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-medium tracking-widest text-cream-100 hover:text-gold-400 transition-colors duration-300 inline-block mb-4"
              style={{ letterSpacing: '0.3em' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-charcoal-300 max-w-xs leading-relaxed mb-6">
              Crafted to be treasured. Premium demi-fine jewelry designed for everyday elegance and unforgettable moments.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-charcoal-600 rounded-full flex items-center justify-center text-charcoal-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-cream-100 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
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
      <div className="border-t border-charcoal-700">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] font-medium text-charcoal-400 bg-charcoal-700 px-2 py-1 rounded"
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
