import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { products } from '@/data/products'

export function Footer() {
  return (
    <footer className="bg-ink text-ink-fg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-steel text-white font-extrabold text-lg">
                A
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight">
                  ARTITECT
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-copper">
                  MACHINERY
                </span>
              </span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              Precision sheet metal folding machinery engineered for
              durability, accuracy, and ease of use.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-fg mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-ink-muted hover:text-copper transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-fg mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-ink-muted hover:text-copper transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-ink-muted hover:text-copper transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-muted hover:text-copper transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-muted hover:text-copper transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink-fg mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-copper shrink-0" />
                <span>+1 (800) 555-0142</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-copper shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-copper shrink-0" />
                <span>
                  1450 Industrial Parkway
                  <br />
                  Cleveland, OH 44114
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Engineered for precision. Built to last.
          </p>
        </div>
      </div>
    </footer>
  )
}
