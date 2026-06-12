import { Link } from 'react-router-dom'
import { Globe2, Mail, MapPin, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-brand-navy">
                <Globe2 className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-white">SSourcing China</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              A China-based sourcing agent helping global B2B buyers verify suppliers,
              control quality and ship on time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="text-slate-300 hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-slate-300">Supplier Search &amp; Verification</li>
              <li className="text-slate-300">Factory Audit</li>
              <li className="text-slate-300">Quality Inspection</li>
              <li className="text-slate-300">Production Follow-up</li>
              <li className="text-slate-300">Shipping &amp; Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <a href="mailto:hello@ssourcing-china.com" className="text-slate-300 hover:text-white">
                  hello@ssourcing-china.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-4 w-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300">linkedin.com/company/ssourcing-china</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Independent sourcing agent. Not affiliated with any factory or trading company.
          </p>
        </div>
      </div>
    </footer>
  )
}
