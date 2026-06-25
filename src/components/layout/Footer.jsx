import { Mail, MapPin, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems } from '../../data/siteContent'

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white text-slate-700">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3 text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">SS</span>
          <div>
            <p className="font-semibold tracking-tight">SSourcing China</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">China sourcing agent</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
          Helping overseas buyers find reliable suppliers, verify factories,
          inspect quality, follow production, and coordinate shipping details in China.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">Pages</h3>
        <div className="mt-4 grid gap-2">
          {navItems.map((item) => (
            <Link className="text-sm text-slate-600 transition hover:text-blue-700" key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">Contact</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-blue-700" /> China-based sourcing support</p>
          <p className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-blue-700" /> Inquiry response through contact form</p>
          <p className="flex items-start gap-3"><Ship className="mt-0.5 h-4 w-4 text-blue-700" /> Supplier, QC, and shipping coordination</p>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-200 px-6 py-5 text-center text-xs text-slate-500">
      © 2026 SSourcing China. Professional sourcing support for global buyers.
    </div>
  </footer>
)

export default Footer
