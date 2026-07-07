import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQs', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Journal', 'Careers'],
}

export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Demi-fine jewelry for everyday rituals and unforgettable moments.
              Crafted to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-white/80 hover:text-gold transition-colors"
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
            <span className="text-xs text-white/50">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((brand) => (
                <span
                  key={brand}
                  className="rounded bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
