import { Link } from 'react-router-dom'
import { navigationItems } from '@/content/siteContent'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-2xl font-semibold tracking-tight text-white">
            SSourcing China
          </p>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            China-based sourcing support for overseas buyers who need dependable supplier search, factory verification, quality inspection, production follow-up, and shipping coordination.
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Pages
            </p>
            <div className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Focus
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Supplier verification</p>
              <p>Factory checks</p>
              <p>Quality inspection</p>
              <p>Production follow-up</p>
              <p>Shipping coordination</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
