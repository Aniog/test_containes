import { Link } from 'react-router-dom'
import { navLinks } from '@/data/siteContent'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            SSourcing China
          </p>
          <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
            Practical sourcing support for overseas buyers working with China.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            We help buyers source more carefully with supplier verification,
            quality checks, production follow-up, and shipment coordination.
          </p>
          <Link
            to="/contact#inquiry-form"
            className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pages
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Focus
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Supplier sourcing</li>
              <li>Factory verification</li>
              <li>Quality inspection</li>
              <li>Production follow-up</li>
              <li>Shipping coordination</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        © 2026 SSourcing China. Built for international B2B sourcing inquiries.
      </div>
    </footer>
  )
}

export default SiteFooter
