import { Link } from 'react-router-dom'
import { navItems, services } from '../../data'
import CTAButton from './CTAButton'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-base font-black text-slate-900">SS</span>
            <span className="text-xl font-black">SSourcing China</span>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            China-based sourcing support for overseas buyers who need practical supplier search, factory verification, quality inspection, production follow-up, and shipment coordination.
          </p>
          <div className="mt-6">
            <CTAButton />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Pages</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {navItems.map((item) => (
              <li key={item.href}><Link className="hover:text-white" to={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Core services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {services.slice(0, 5).map((service) => <li key={service.title}>{service.title}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
        © 2026 SSourcing China. Practical sourcing support for global buyers.
      </div>
    </footer>
  )
}
