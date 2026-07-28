import { Link, NavLink } from 'react-router-dom'
import { navItems } from '@/data/siteContent'
import ButtonLink from '@/components/shared/ButtonLink'

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link to="/" className="shrink-0 text-lg font-semibold tracking-tight text-slate-950">
          SSourcing China
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden sm:block">
          <ButtonLink to="/contact">Get a Free Sourcing Quote</ButtonLink>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-3 lg:hidden">
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
