import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.15em]"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Demi-fine jewelry designed for everyday luxury. Crafted with
              intention, made to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-white/70 transition-colors hover:text-velmora-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 transition-colors hover:text-velmora-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 transition-colors hover:text-velmora-gold"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {title}
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="transition-colors hover:text-velmora-gold"
                    >
                      {link}
                    </Link>
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
          <div className="flex items-center gap-3">
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
              Visa
            </span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
              Mastercard
            </span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
              Amex
            </span>
            <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
