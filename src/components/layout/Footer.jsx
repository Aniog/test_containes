import { Link } from 'react-router-dom'
import { Ship, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-slate-900">
              <Ship className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-base font-semibold text-white">SSourcing China</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            A China-based sourcing agent for global buyers. Supplier verification,
            quality inspection and shipping coordination from one team on the ground.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Sitemap
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Supplier search</li>
            <li>Factory verification</li>
            <li>Sample management</li>
            <li>Price negotiation</li>
            <li>Production follow-up</li>
            <li>Quality inspection</li>
            <li>Shipping & logistics</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <span>Yiwu, Zhejiang, China</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                hello@ssourcingchina.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <span>+86 (0) 579 0000 0000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <p>China sourcing agent · Supplier verification · QC · Shipping</p>
        </div>
      </div>
    </footer>
  )
}
