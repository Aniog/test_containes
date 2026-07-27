import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navItems } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-bold text-brand-navy">
              SS
            </span>
            <div>
              <p className="text-lg font-bold">SSourcing China</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">China sourcing agent</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-200">
            Practical China sourcing support for overseas buyers: supplier search, verification, QC inspection, production follow-up, and shipping coordination.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-amber" /> China-based sourcing coordination</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-amber" /> inquiries@ssourcingchina.com</p>
            <p className="flex items-center gap-3"><Ship className="h-4 w-4 text-brand-amber" /> Supplier to shipment handover support</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Pages</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-slate-200 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Buyer focus</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
            <li>Amazon and e-commerce sellers</li>
            <li>Wholesale importers and distributors</li>
            <li>Brands developing private-label products</li>
            <li>Industrial buyers with technical requirements</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-300 sm:px-6 lg:px-8">
        © 2026 SSourcing China. Professional sourcing support for global buyers.
      </div>
    </footer>
  )
}
