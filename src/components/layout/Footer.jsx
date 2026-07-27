import { Link } from 'react-router-dom'
import { Globe2, Mail, Phone, MapPin } from 'lucide-react'
import { SERVICES } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <Globe2 className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-white">
                SSourcing <span className="text-primary-300">China</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-slate-400 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/how-it-works" className="text-slate-400 transition-colors hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-400 transition-colors hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-400 transition-colors hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 transition-colors hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                <span className="text-slate-400">Room 1205, Huarun Building, Nanshan District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary-300" />
                <a href="mailto:inquiry@ssourcingchina.com" className="text-slate-400 transition-colors hover:text-white">inquiry@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary-300" />
                <span className="text-slate-400">+86 755 8602 4488</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Shenzhen · Guangzhou · Yiwu</p>
        </div>
      </div>
    </footer>
  )
}
