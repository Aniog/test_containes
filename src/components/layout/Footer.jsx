import { Link } from 'react-router-dom'
import { Anchor, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-white">SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find verified suppliers,
              inspect quality, follow production and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>+86 (0) 579 8000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {year} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Independent sourcing agent. We do not sell products directly.
          </p>
        </div>
      </div>
    </footer>
  )
}
