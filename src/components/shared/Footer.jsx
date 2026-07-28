import { Link } from "react-router-dom"
import { Ship, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { navLinks } from "@/data/content"

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white">
                <Ship className="w-5 h-5" />
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                SSourcing<span className="text-primary-light"> China</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
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
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Supplier Sourcing</li>
              <li>Factory Verification & Audit</li>
              <li>Quality Inspection (QC)</li>
              <li>Production Follow-Up</li>
              <li>Shipping & Logistics</li>
              <li>Order Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <span>inquiry@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <span>+86 755 0000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <span>linkedin.com/ssourcingchina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            China Sourcing Agent for Global Buyers
          </p>
        </div>
      </div>
    </footer>
  )
}
