import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navItems } from '@/data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-navy">SS</span>
            <div>
              <p className="font-bold">SSourcing China</p>
              <p className="text-sm text-blue-100">China sourcing support for overseas buyers</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-blue-100">
            Practical sourcing, supplier verification, quality inspection, production follow-up, and shipping coordination from China.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-100">Pages</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-blue-100 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-100">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-blue-100">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-amber" /> China-based sourcing team</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-amber" /> inquiry@ssourcingchina.com</p>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-amber" /> Request contact details by inquiry</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-blue-100">
        © 2026 SSourcing China. Professional sourcing support for global buyers.
      </div>
    </footer>
  )
}
