import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight">SSourcing China</p>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
            China-based sourcing support for overseas buyers who need reliable suppliers, practical verification, quality control, and shipment coordination.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">Pages</p>
          <div className="mt-4 grid gap-3">
            <Link className="text-slate-300 transition hover:text-white" to="/services">
              Services
            </Link>
            <Link className="text-slate-300 transition hover:text-white" to="/how-it-works">
              How It Works
            </Link>
            <Link className="text-slate-300 transition hover:text-white" to="/case-studies">
              Case Studies
            </Link>
            <Link className="text-slate-300 transition hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">Contact</p>
          <div className="mt-4 grid gap-3 text-slate-300">
            <p>Support for global buyers sourcing from China</p>
            <p>Email: inquiry@ssourcingchina.com</p>
            <p>Focus: supplier verification, QC, production follow-up, shipping coordination</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-400">
        © 2026 SSourcing China. All rights reserved.
      </div>
    </footer>
  )
}

export default SiteFooter
