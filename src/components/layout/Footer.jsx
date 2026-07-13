import { Link } from 'react-router-dom'
import { Ship, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-white">
                <Ship className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Supplier Search</li>
              <li>Factory Verification</li>
              <li>Quality Inspection</li>
              <li>Production Follow-Up</li>
              <li>Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>&copy; {year} SSourcing China. All rights reserved.</p>
          <p className="text-slate-500">
            Supplier Verification &middot; Quality Control &middot; Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
