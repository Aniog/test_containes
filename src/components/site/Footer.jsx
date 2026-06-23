import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navItems } from '../../data/siteContent'

const Footer = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-bold text-slate-950">SS</span>
          <div>
            <p className="text-lg font-bold text-white">SSourcing China</p>
            <p className="text-sm text-slate-300">China sourcing agent for global buyers</p>
          </div>
        </div>
        <p className="mt-5 max-w-md leading-7 text-slate-300">
          Supplier sourcing, factory verification, quality inspection, production follow-up, and shipping coordination for overseas buyers working with China suppliers.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Pages</h3>
        <div className="mt-4 grid gap-2">
          {navItems.map((item) => (
            <Link className="text-sm text-slate-300 transition hover:text-white" key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">Contact</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <p className="flex gap-3"><MapPin className="h-5 w-5 flex-none text-cyan-200" /> China-based sourcing support</p>
          <p className="flex gap-3"><Mail className="h-5 w-5 flex-none text-cyan-200" /> Send your sourcing brief online</p>
          <p className="flex gap-3"><Ship className="h-5 w-5 flex-none text-cyan-200" /> Supplier, QC, and logistics coordination</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} SSourcing China. Professional sourcing support for overseas buyers.
    </div>
  </footer>
)

export default Footer
