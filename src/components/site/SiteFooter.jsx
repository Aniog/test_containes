import { Link } from 'react-router-dom'

import { companyDetails, navLinks } from '@/content/siteContent'

const SiteFooter = () => {
  return (
    <footer className="border-t border-brand-line bg-brand-ink py-14 text-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <p className="text-2xl font-semibold tracking-tight">SSourcing China</p>
          <p className="mt-4 text-base leading-7 text-slate-200">
            A practical sourcing partner in China for supplier search, factory verification, quality inspection, production follow-up, and shipping coordination.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Pages</p>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-slate-200 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <p>{companyDetails.location}</p>
            <p>{companyDetails.email}</p>
            <p>{companyDetails.phone}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
