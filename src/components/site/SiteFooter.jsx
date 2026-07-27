import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navItems } from '../../content'

function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-bold text-brand-navy">
              SS
            </span>
            <div>
              <p className="text-lg font-semibold">SSourcing China</p>
              <p className="text-sm text-white/70">China sourcing support for global buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            We help overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping details in China.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Pages</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-amber" /> China-based sourcing team</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-amber" /> sourcing@ssourcingchina.com</p>
            <p className="flex gap-3"><Ship className="mt-0.5 h-4 w-4 text-brand-amber" /> Supplier, QC, production, shipping coordination</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 SSourcing China. Professional sourcing support for overseas buyers.
      </div>
    </footer>
  )
}

export default SiteFooter
