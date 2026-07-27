import { Link } from 'react-router-dom'
import { Compass, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Compass className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                SSourcing <span className="text-brand-300">China</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-400 transition-colors hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-400 transition-colors hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 transition-colors hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 transition-colors hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Sourcing</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/products" className="text-slate-400 transition-colors hover:text-white">Products We Source</Link></li>
              <li><Link to="/services" className="text-slate-400 transition-colors hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 transition-colors hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-400 transition-colors hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>inquiry@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>+86 755 8210 4477</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>Room 1206, Building A, Nanshan District, Shenzhen, Guangdong, China</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
