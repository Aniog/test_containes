import { Link } from 'react-router-dom'
import { Factory, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Factory className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight">
                  SSourcing
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-primary-foreground/60">
                  China
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-primary-foreground/70">Supplier Sourcing</li>
              <li className="text-sm text-primary-foreground/70">Factory Verification</li>
              <li className="text-sm text-primary-foreground/70">Quality Inspection</li>
              <li className="text-sm text-primary-foreground/70">Production Follow-up</li>
              <li className="text-sm text-primary-foreground/70">Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>WhatsApp: {SITE.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/60">
            China Sourcing Agent for Global Buyers
          </p>
        </div>
      </div>
    </footer>
  )
}
