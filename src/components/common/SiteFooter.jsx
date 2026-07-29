import { Link } from 'react-router-dom'
import { navItems } from '@/data/site-content.js'

const SiteFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            SSourcing China
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Practical sourcing support for overseas buyers working with China.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            We help buyers shortlist suppliers, verify factories, inspect quality, follow production, and coordinate shipping readiness.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Pages</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Built for qualified sourcing inquiries with clear process, operational trust, and buyer-focused communication.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
