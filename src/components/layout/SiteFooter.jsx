import { Link } from 'react-router-dom'
import { navigationLinks } from '../../siteContent.js'

const SiteFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-slate-600 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">SSourcing China</p>
            <p className="mt-2 max-w-xl leading-7 text-slate-600">
              China-based sourcing support for overseas buyers who need reliable suppliers, verification, inspection, production follow-up, and shipping coordination.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            Focused on practical sourcing support, clear communication, and qualified inquiry generation.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[360px] lg:justify-items-end">
          {navigationLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
