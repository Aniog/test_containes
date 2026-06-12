import { Link } from 'react-router-dom'
import { navLinks } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">SSC</span>
            <div>
              <p className="font-bold">SSourcing China</p>
              <p className="text-sm text-slate-300">China sourcing agent for global buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Helping overseas buyers find suitable China suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical reporting.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Pages</h2>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Start a project</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Share product details, target quantity, quality standards, and shipping needs. We will review and reply with practical next steps.
          </p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © 2026 SSourcing China. Practical sourcing support for international B2B buyers.
      </div>
    </footer>
  )
}
