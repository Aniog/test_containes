import { Link } from 'react-router-dom'
import { navItems } from '@/content/siteContent'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            SSourcing China
          </Link>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            China-based sourcing support for overseas buyers who need practical help with supplier search,
            verification, quality inspection, production follow-up, and shipping coordination.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pages
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="block transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact intent
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Tell us your product, quantity, market, and sourcing stage to receive a practical next-step quote.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-center text-sm text-slate-400 lg:px-8">
        © 2026 SSourcing China. Practical sourcing support for global buyers.
      </div>
    </footer>
  )
}

export default SiteFooter
