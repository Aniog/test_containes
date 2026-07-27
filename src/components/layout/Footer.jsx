import { Link } from "react-router-dom"
import { Ship, Mail, Phone, MapPin } from "lucide-react"
import { NAV_LINKS, SITE } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-900">
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
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
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
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Supplier Sourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Factory Verification
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Quality Inspection
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Shipping Coordination
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <span className="text-slate-400">{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
                <span className="text-slate-400">{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>China Sourcing Agent for Global Buyers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
