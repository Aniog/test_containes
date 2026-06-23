import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navItems } from '../data/siteContent.js'

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950">SS</span>
            <div>
              <p className="text-lg font-bold">SSourcing China</p>
              <p className="text-sm text-slate-300">Practical China sourcing support for global buyers.</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">We help overseas buyers source suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear English communication.</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Pages</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            <li className="flex gap-3"><MapPin className="h-5 w-5 text-blue-300" /> China-based sourcing coordination</li>
            <li className="flex gap-3"><Mail className="h-5 w-5 text-blue-300" /> Send your sourcing brief online</li>
            <li className="flex gap-3"><Ship className="h-5 w-5 text-blue-300" /> Supplier, QC, production, shipping support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} SSourcing China. Professional sourcing support for qualified business inquiries.</div>
    </footer>
  )
}
