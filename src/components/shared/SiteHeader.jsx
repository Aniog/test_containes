import { NavLink, Link } from 'react-router-dom'
import { navigationItems } from '@/content/siteContent'
import { cn } from '@/lib/utils'

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              SSourcing China
            </span>
            <span className="hidden text-sm text-slate-500 md:block">
              China sourcing support for global buyers
            </span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex shrink-0 whitespace-nowrap rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 md:px-5 md:py-3"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
