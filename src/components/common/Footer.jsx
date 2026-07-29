import { Link } from 'react-router-dom'
import { navigationLinks } from '../../data/siteContent.js'

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">
            SS
          </span>
          <div>
            <p className="font-bold text-white">SSourcing China</p>
            <p className="text-sm text-slate-300">China sourcing support for global buyers</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
          We help overseas buyers find suitable suppliers, verify factories, monitor production, inspect quality, and coordinate export shipping from China.
        </p>
      </div>

      <div>
        <p className="font-semibold text-white">Pages</p>
        <div className="mt-4 grid gap-2">
          {navigationLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm text-slate-300 hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-white">Request a quote</p>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Share your product requirements, estimated quantity, destination country, and sourcing concerns. We will review and respond with practical next steps.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">
      © 2026 SSourcing China. Practical sourcing, QC, and shipping coordination.
    </div>
  </footer>
)

export default Footer
