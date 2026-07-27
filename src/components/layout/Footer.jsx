import { Link } from 'react-router-dom'
import { Anchor, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { company, navLinks, services } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-200">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Anchor className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white">
                {company.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-action" />
                <span>{company.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-action" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-action" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-action" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            China Sourcing Agent for Global Buyers
          </p>
        </div>
      </div>
    </footer>
  )
}
