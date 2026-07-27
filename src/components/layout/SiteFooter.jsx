import { Link } from 'react-router-dom'
import { navLinks } from '@/data/siteContent'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">SSourcing China</p>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            China-based sourcing support for overseas buyers who need supplier verification,
            quality control, production follow-up, and shipment coordination.
          </p>
          <p className="text-sm text-slate-400">
            Professional, clear, and practical support focused on sourcing execution.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Pages
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navLinks.map((item) => (
              <Link key={item.href} to={item.href} className="text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </p>
          <p className="text-sm text-slate-300">Share your product details and sourcing needs.</p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 SSourcing China. All rights reserved.</p>
          <p>China sourcing support for global buyers.</p>
        </div>
      </div>
    </footer>
  )
}
