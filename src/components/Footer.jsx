import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'Bestsellers'],
  Help: ['Shipping & Returns', 'FAQ', 'Care Guide', 'Contact Us', 'Track Order'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Demi-fine jewelry designed to be treasured. Ethically crafted,
              beautifully priced, made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-white/70 hover:text-velmora-gold" aria-label="Instagram">
                <Instagram size={20} className="pointer-events-none" />
              </a>
              <a href="#" className="text-white/70 hover:text-velmora-gold" aria-label="Facebook">
                <Facebook size={20} className="pointer-events-none" />
              </a>
              <a href="#" className="text-white/70 hover:text-velmora-gold" aria-label="Twitter">
                <Twitter size={20} className="pointer-events-none" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <span className="rounded border border-white/20 px-2 py-1">Visa</span>
            <span className="rounded border border-white/20 px-2 py-1">Mastercard</span>
            <span className="rounded border border-white/20 px-2 py-1">Amex</span>
            <span className="rounded border border-white/20 px-2 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
