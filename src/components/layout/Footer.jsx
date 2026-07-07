import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
    { name: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Care Guide', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '#' },
    { name: 'Stockists', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-velmora-dark text-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-wider uppercase inline-block mb-5">
              Velmora
            </Link>
            <p className="text-sm text-velmora-warm/80 leading-relaxed max-w-sm mb-6">
              Demi-fine jewelry designed to be treasured. Crafted with intention, worn with confidence, and made for the moments that matter.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-velmora-warm/80 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-warm/80 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-warm/80 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-velmora-warm/80 hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-velmora-warm/80 hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-velmora-warm/80 hover:text-velmora-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-5">Newsletter</h4>
            <p className="text-sm text-velmora-warm/80 mb-4">Join for early access and 10% off.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2.5 bg-transparent border border-velmora-stone text-velmora-cream placeholder:text-velmora-muted text-sm focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-velmora-gold text-velmora-dark text-xs tracking-widest uppercase font-sans hover:bg-velmora-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-velmora-stone/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-warm/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-warm/60">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
