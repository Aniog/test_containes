import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=Earrings' },
  { label: 'Necklaces', to: '/shop?category=Necklaces' },
  { label: 'Huggies', to: '/shop?category=Huggies' },
  { label: 'Gift Sets', to: '/shop?category=Sets' },
]

const helpLinks = [
  { label: 'Shipping & Returns', to: '/shipping' },
  { label: 'Size Guide', to: '/size-guide' },
  { label: 'Care Guide', to: '/care' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
]

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Stockists', to: '/stockists' },
]

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      className="w-8 h-8 flex items-center justify-center rounded-full border border-white/15 text-white/40 hover:text-velmora-gold hover:border-velmora-gold/40 transition-all duration-300"
      aria-label={label}
    >
      <span className="text-[10px] font-sans font-medium tracking-wider">{children}</span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-super text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/40 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated pieces designed to be treasured, every day.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <SocialIcon label="Instagram">IG</SocialIcon>
              <SocialIcon label="Facebook">FB</SocialIcon>
              <SocialIcon label="Pinterest">PT</SocialIcon>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white/60 mb-4 uppercase">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs text-white/40 hover:text-velmora-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white/60 mb-4 uppercase">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs text-white/40 hover:text-velmora-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-white/60 mb-4 uppercase">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs text-white/40 hover:text-velmora-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/30 text-xs tracking-wider">
            <span>Visa</span>
            <span className="text-white/10">·</span>
            <span>Mastercard</span>
            <span className="text-white/10">·</span>
            <span>Amex</span>
            <span className="text-white/10">·</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}