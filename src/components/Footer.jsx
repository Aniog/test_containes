import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'],
}

export default function Footer() {
  return (
    <footer className="border-t border-muted-subtle/30 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-serif text-3xl font-medium uppercase tracking-[0.18em] text-foreground"
            >
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Demi-fine jewelry designed to be treasured. Crafted in 18k gold plate,
              made for everyday luxury.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted transition-colors hover:text-accent" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted transition-colors hover:text-accent" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted transition-colors hover:text-accent" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-serif text-sm uppercase tracking-widest-custom text-foreground">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-muted-subtle/30 pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="rounded border border-muted-subtle/40 px-2 py-1 text-[10px] uppercase tracking-wider text-muted">
              Visa
            </span>
            <span className="rounded border border-muted-subtle/40 px-2 py-1 text-[10px] uppercase tracking-wider text-muted">
              Mastercard
            </span>
            <span className="rounded border border-muted-subtle/40 px-2 py-1 text-[10px] uppercase tracking-wider text-muted">
              Amex
            </span>
            <span className="rounded border border-muted-subtle/40 px-2 py-1 text-[10px] uppercase tracking-wider text-muted">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
