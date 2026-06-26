import { Link } from 'react-router-dom'
import { Ship, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white">
                <Ship className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold text-white">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories,
              inspect quality, follow production and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Supplier sourcing</li>
              <li>Factory verification</li>
              <li>Quality inspection (QC)</li>
              <li>Production follow-up</li>
              <li>Shipping &amp; logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-red-500" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-500" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">hello@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>+86 138 0000 0000 (WhatsApp / WeChat)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Sourcing agent for global buyers — supplier verification, QC and shipping.</p>
        </div>
      </div>
    </footer>
  )
}
