import { Link } from "react-router-dom"
import { Ship, Mail, Phone, MapPin, Clock } from "lucide-react"
import { navLinks, contactInfo } from "@/data/site"

export default function Footer() {
  return (
    <footer className="border-t border-primary-800 bg-primary-900 text-primary-100">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Ship className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-white">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-200">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-200 transition-colors hover:text-white"
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
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-primary-200">Supplier Sourcing</li>
              <li className="text-sm text-primary-200">Factory Verification</li>
              <li className="text-sm text-primary-200">Quality Inspection</li>
              <li className="text-sm text-primary-200">Production Follow-Up</li>
              <li className="text-sm text-primary-200">Shipping Coordination</li>
              <li className="text-sm text-primary-200">Warehousing & Consolidation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-200">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-200">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-200">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-800 pt-6 sm:flex-row">
          <p className="text-xs text-primary-300">
            (c) {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-primary-300">
            Supplier Verification - Quality Control - Shipping Coordination
          </p>
        </div>
      </div>
    </footer>
  )
}
