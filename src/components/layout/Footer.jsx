import { Link } from 'react-router-dom'
import { Anchor, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              {COMPANY.tagline}. We help global buyers source from China with
              supplier verification, quality inspection, and shipping coordination.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>Supplier Sourcing</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Follow-Up</li>
              <li>Shipping & Logistics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-primary-foreground/60">
            © {year} {COMPANY.name}. All rights reserved. Sourcing and quality
            control services for international buyers.
          </p>
        </div>
      </div>
    </footer>
  )
}
