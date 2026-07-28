import { Link } from 'react-router-dom'
import { Mail, MapPin, Ship } from 'lucide-react'
import { navigation } from '@/data/siteData'

const Footer = () => (
  <footer className="bg-brand-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-navy">SS</span>
          <div>
            <p className="text-lg font-bold">SSourcing China</p>
            <p className="text-sm text-white/70">China Sourcing Agent for Global Buyers</p>
          </div>
        </div>
        <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
          Practical sourcing, supplier verification, quality inspection, production follow-up, and shipping coordination for overseas B2B buyers.
        </p>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Pages</p>
        <div className="mt-4 grid gap-2">
          {navigation.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm text-white/75 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Contact focus</p>
        <div className="mt-4 space-y-3 text-sm text-white/75">
          <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-brand-gold" />China-based sourcing support</p>
          <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-gold" />Inquiry response for qualified projects</p>
          <p className="flex gap-3"><Ship className="mt-0.5 h-4 w-4 text-brand-gold" />Supplier, QC, and shipping coordination</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
      © 2026 SSourcing China. Frontend preview for sourcing inquiry generation.
    </div>
  </footer>
)

export default Footer
