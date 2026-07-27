import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '@/data'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">SS</span>
            <div>
              <p className="font-bold">SSourcing China</p>
              <p className="text-sm text-slate-300">China sourcing support for overseas buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            We help buyers find suitable suppliers, verify factories, control quality, follow production, and coordinate shipping with clear communication.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Pages</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}><Link className="hover:text-white" to={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Inquiry</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Send product specifications, target quantity, destination country, and current sourcing stage for a practical quote.
          </p>
          <Link to="/contact" className="mt-4 inline-flex text-sm font-semibold text-white underline underline-offset-4">Get a Free Sourcing Quote</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © 2026 SSourcing China. Professional sourcing support for global buyers.
      </div>
    </footer>
  )
}
