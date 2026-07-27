import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navItems } from '@/data/siteData.js'

export default function Footer() {
  return (
    <footer className="bg-sourcing-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-sourcing-navy">SSC</span>
            <div>
              <p className="font-bold">SSourcing China</p>
              <p className="text-sm text-white/70">China sourcing agent for global buyers</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
            We help overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">Pages</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/75 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sourcing-sky" /> China-based sourcing support</p>
            <a className="flex gap-3 hover:text-white" href="mailto:inquiries@ssourcingchina.com"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-sourcing-sky" /> inquiries@ssourcingchina.com</a>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-sourcing-sky" /> Reply within one business day</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60 sm:px-6 lg:px-8">
        © 2026 SSourcing China. Practical sourcing, supplier verification, QC and shipping coordination.
      </div>
    </footer>
  )
}
