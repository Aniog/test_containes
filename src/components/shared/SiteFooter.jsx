import { Link } from 'react-router-dom'
import { navItems } from '../../siteContent.js'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-800 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link to="/" className="text-xl font-semibold tracking-tight text-white">
            SSourcing China
          </Link>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            China-based sourcing support for overseas buyers who need reliable supplier screening,
            factory verification, quality inspection, production follow-up, and shipping coordination.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              Sitemap
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link className="transition hover:text-white" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              Best for buyers who need
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              <li>Clear supplier verification before placing orders</li>
              <li>Extra visibility during sampling and production</li>
              <li>Practical support before goods move to shipment</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
