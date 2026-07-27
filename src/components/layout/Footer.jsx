import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navItems } from '@/data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-navy">SS</span>
            <div>
              <p className="font-semibold text-white">SSourcing China</p>
              <p className="text-sm text-slate-300">China sourcing support for overseas buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300">
            Supplier search, factory verification, quality inspection, production follow-up, and shipping coordination from China.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Pages</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-brand-amber" /> China-based sourcing team</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 text-brand-amber" /> Request a sourcing quote</p>
            <p className="flex gap-3"><Ship className="h-5 w-5 text-brand-amber" /> Factory to shipment coordination</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 SSourcing China. Practical sourcing support for global buyers.
      </div>
    </footer>
  )
}
