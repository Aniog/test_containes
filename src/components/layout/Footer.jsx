import { Link } from "react-router-dom"
import { Anchor, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { NAV_LINKS } from "@/data/site"

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B6CA8] text-white">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-slate-400">Supplier Sourcing</li>
              <li className="text-slate-400">Factory Verification</li>
              <li className="text-slate-400">Quality Inspection</li>
              <li className="text-slate-400">Production Follow-up</li>
              <li className="text-slate-400">Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1B6CA8]" />
                <span>inquiry@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1B6CA8]" />
                <span>+86 755 0000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1B6CA8]" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-[#1B6CA8]" />
                <span>linkedin.com/ssourcingchina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-slate-500">
            China Sourcing Agent | Supplier Verification, QC & Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
