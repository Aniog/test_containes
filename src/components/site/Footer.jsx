import { Link } from 'react-router-dom'
import { footerServices, navItems, primaryCtaLabel, siteName } from '@/data/siteContent'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-sm font-semibold text-white">
              SS
            </span>
            <div>
              <p className="text-base font-semibold text-white">{siteName}</p>
              <p className="text-sm text-slate-400">
                China-based sourcing support for overseas buyers.
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            We help buyers source products in China with clearer supplier screening,
            quality checks, production follow-up, and shipment coordination.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-teal-600 px-5 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {primaryCtaLabel}
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Pages
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Core services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white">Response expectation</p>
            <p className="mt-2 leading-7 text-slate-300">
              Share your sourcing brief and we will review the request and reply with
              the next steps and service scope.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {siteName}. All rights reserved.</p>
          <p>Professional sourcing support for global buyers working with China.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
