import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/siteContent'
import Icon from '@/components/ui/Icon'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand font-extrabold">
                S
              </span>
              <span className="text-base font-bold text-white">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your on-the-ground sourcing team in China. We help global buyers find reliable
              suppliers, verify factories, control quality, and ship with confidence.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                aria-label="Email"
              >
                <Icon name="Mail" className="h-4 w-4" />
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                aria-label="Phone"
              >
                <Icon name="Phone" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Pages</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-slate-400 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-2.5">
                <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="Mail" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="Phone" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="Clock" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p className="text-slate-500">China Sourcing Agent for Global Buyers</p>
        </div>
      </div>
    </footer>
  )
}
