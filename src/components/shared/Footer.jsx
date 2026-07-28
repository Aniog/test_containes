import { Link } from 'react-router-dom'
import { navItems } from '@/lib/siteData'

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
            SS
          </span>
          <div>
            <p className="text-lg font-semibold text-white">SSourcing China</p>
            <p className="text-sm text-slate-300">China sourcing support for overseas buyers</p>
          </div>
        </div>
        <p className="mt-6 max-w-md text-sm leading-6 text-slate-300">
          We help buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipment from China.
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Pages</p>
        <div className="mt-4 grid gap-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm text-slate-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Start an inquiry</p>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Send product details, target quantity, destination, and any quality requirements. We will review the project and suggest a practical next step.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
      © 2026 SSourcing China. Professional sourcing support for international buyers.
    </div>
  </footer>
)

export default Footer
