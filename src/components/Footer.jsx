import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.18em] font-medium"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/80">
              Demi-fine jewelry designed for everyday luxury. Hand-finished in
              18k gold plate, made to be treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream-200/80 transition-colors hover:text-gold-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream-200/80 transition-colors hover:text-gold-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-cream-200/80 transition-colors hover:text-gold-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="label-uppercase mb-5 text-[11px] text-cream-200/60">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream-200/80 transition-colors hover:text-gold-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-4">
            <h4 className="label-uppercase mb-5 text-[11px] text-cream-200/60">
              Stay in the loop
            </h4>
            <p className="mb-4 text-sm text-cream-200/80">
              Receive early access to new collections and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-cream-200/30 pb-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm text-cream-100 placeholder:text-cream-200/40 outline-none"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-200/10 pt-8 md:flex-row">
          <p className="text-xs text-cream-200/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream-200/50">
            <span className="px-2 py-1 border border-cream-200/20 rounded">Visa</span>
            <span className="px-2 py-1 border border-cream-200/20 rounded">Mastercard</span>
            <span className="px-2 py-1 border border-cream-200/20 rounded">Amex</span>
            <span className="px-2 py-1 border border-cream-200/20 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
