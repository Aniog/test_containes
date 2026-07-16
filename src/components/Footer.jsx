import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'

const footerColumns = [
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
      { label: 'Size Guide', path: '/size-guide' },
      { label: 'Care Instructions', path: '/care' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/our-story' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Contact', path: '/contact' },
    ],
  },
]

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay', 'Klarna',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] font-bold text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-beige/70 font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for those who appreciate quiet luxury. Each piece is designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-warm-beige/60 hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-warm-beige/60 hover:text-[#C9A96E] transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-warm-beige/60 hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs uppercase tracking-[0.12em] font-medium text-[#C9A96E] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-warm-beige/70 hover:text-cream transition-colors font-sans"
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
        <div className="hairline border-[#3A3A3A] mt-12 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-warm-beige/50 uppercase tracking-[0.1em] font-sans">We accept</span>
            <div className="flex flex-wrap gap-3">
              {paymentIcons.map(icon => (
                <span
                  key={icon}
                  className="text-xs text-warm-beige/40 font-sans bg-white/5 px-3 py-1.5 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-[#3A3A3A]">
          <p className="text-xs text-warm-beige/40 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-warm-beige/40 hover:text-warm-beige/70 transition-colors font-sans">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-warm-beige/40 hover:text-warm-beige/70 transition-colors font-sans">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}