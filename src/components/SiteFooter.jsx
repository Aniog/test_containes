import { Link } from 'react-router-dom'
import { navItems } from '../data/siteContent.js'

export default function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-extrabold">SSourcing China</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-blue-100">
            A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Pages</p>
          <div className="mt-4 grid gap-2">
            {navItems.slice(1).map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-blue-100 transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Buyer support</p>
          <p className="mt-4 text-sm leading-6 text-blue-100">Supplier sourcing, factory verification, QC inspection, production follow-up, and shipping coordination for international buyers.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-blue-50">Get a Free Sourcing Quote</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-blue-100">© 2026 SSourcing China. Practical China sourcing support for global buyers.</div>
    </footer>
  )
}
