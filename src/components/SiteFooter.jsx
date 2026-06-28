import { Link } from 'react-router-dom'
import { navLinks } from '@/data/siteContent'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr,1fr,1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">SSourcing China</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            China-based sourcing support for overseas buyers who need practical help with supplier sourcing, verification, quality inspection, production follow-up, and shipping coordination.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Pages
          </p>
          <div className="mt-4 grid gap-3">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-slate-600 transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Start an inquiry
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Tell us what product you need, where you sell, and what support you want from the China side.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact SSourcing China
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 SSourcing China. Practical sourcing support for global buyers.</p>
          <p>China Sourcing Agent | Supplier Verification, QC & Shipping</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
