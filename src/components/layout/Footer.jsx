import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay',
]

export default function Footer() {
  return (
    <footer className="bg-midnight-950 text-ivory-100">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory-100">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory-300/70 font-sans leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Every piece tells a story of quiet luxury and enduring beauty.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-ivory-400 hover:text-ivory-200 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory-400 font-sans mb-4">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Sets', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-ivory-300/70 hover:text-ivory-100 transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory-400 font-sans mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Track Order', 'Size Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ivory-300/70 hover:text-ivory-100 transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-ivory-400 font-sans mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Sustainability', 'Careers', 'Press', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ivory-300/70 hover:text-ivory-100 transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div className="hairline border-midnight-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-ivory-400/60 font-sans uppercase tracking-wider px-3 py-1.5 border border-midnight-800 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-ivory-400/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}