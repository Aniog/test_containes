import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
}

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE']

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] uppercase text-champagne block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-xs text-ivory/50 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-champagne transition-colors duration-200">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/40 hover:text-champagne transition-colors duration-200">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/40 hover:text-champagne transition-colors duration-200">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-champagne mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-xs text-ivory/50 hover:text-ivory transition-colors duration-200"
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
      <div className="border-t border-champagne/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="border border-ivory/10 rounded px-2 py-1 font-sans text-[9px] text-ivory/30 tracking-wider"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
