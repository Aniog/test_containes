import { Link } from 'react-router-dom'
import { Compass, Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { NAV_LINKS, SERVICES, PRODUCT_CATEGORIES } from '@/data/content'

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-800">
                <Compass className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                SSourcing <span className="text-blue-400">China</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, follow production, and coordinate shipping —
              with clear reporting at every step.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" /> inquiries@ssourcingchina.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" /> +86 755 8632 4471
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                Room 1806, Block B, Nanshan i-Park, Shenzhen, Guangdong, China
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {PRODUCT_CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link to="/products" className="transition-colors hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Supplier verification · Quality control · Production follow-up · Shipping coordination
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
