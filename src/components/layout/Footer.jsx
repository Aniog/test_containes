import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { NAV_LINKS, SITE } from "@/data/site"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <span>SSourcing</span>
              <span className="text-slate-400 font-medium">China</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-600 ml-0.5" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/services" className="text-slate-400 hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Production Follow-Up</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-slate-500 shrink-0" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Your trusted China sourcing partner since {SITE.founded}.
          </p>
        </div>
      </div>
    </footer>
  )
}
