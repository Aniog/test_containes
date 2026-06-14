import * as React from "react"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook } from "lucide-react"
import { BrandMark } from "@/components/layout/BrandMark"

const groups = [
  {
    title: "Machines",
    links: [
      { label: "All Machines", to: "/products" },
      { label: "Double Folding", to: "/products/df-2400" },
      { label: "Sheet Metal Folding", to: "/products/sf-1500" },
      { label: "Metal Folders", to: "/products/mf-1800" },
      { label: "Compact Series", to: "/products/dfx-500" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/#about" },
      { label: "Capabilities", to: "/#capabilities" },
      { label: "Process", to: "/#process" },
      { label: "Testimonials", to: "/#testimonials" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical Specs", to: "/products" },
      { label: "Maintenance Guide", to: "/contact" },
      { label: "Warranty", to: "/contact" },
      { label: "Spare Parts", to: "/contact" },
      { label: "Operator Training", to: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <BrandMark />
            <p className="mt-5 text-sm text-text-muted leading-relaxed max-w-xs">
              Precision-engineered folding systems for fabricators who measure
              success in microns and uptime.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-copper-500" />
                2240 Foundry Road, Bay 14 — Pittsburgh, PA
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-copper-500" />
                +1 (800) 555-0199
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-copper-500" />
                sales@artitect-machinery.com
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-text-muted hover:text-copper-400 hover:border-copper-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-eyebrow uppercase text-text">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-muted hover:text-copper-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-eyebrow uppercase text-text">
              Hours
            </h4>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">
              <li>Sales — Mon–Fri</li>
              <li className="text-text">08:00 – 18:00 EST</li>
              <li className="mt-3">Service — 24/7</li>
              <li className="text-text">Emergency dispatch</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-dim">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>
            Engineered in Pennsylvania. Trusted on six continents.
          </p>
        </div>
      </div>
    </footer>
  )
}
