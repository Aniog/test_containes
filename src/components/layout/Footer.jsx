import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Globe2 } from "lucide-react"

const FOOTER_NAV = [
  {
    title: "Services",
    links: [
      { label: "Supplier Sourcing", to: "/services#supplier-sourcing" },
      { label: "Factory Audit", to: "/services#factory-audit" },
      { label: "Quality Control", to: "/services#quality-control" },
      { label: "Production Follow-up", to: "/services#production-follow-up" },
      { label: "Shipping & Logistics", to: "/services#shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Products We Source", to: "/products" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog & Resources", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "China Sourcing Guide", to: "/blog/china-sourcing-guide" },
      { label: "How to Verify a Factory", to: "/blog/verify-a-factory" },
      { label: "QC Checklist for Importers", to: "/blog/qc-checklist" },
      { label: "Incoterms Explained", to: "/blog/incoterms" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-wide py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-navy-900 font-bold text-sm">
                SS
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">SSourcing China</span>
                <span className="text-[11px] text-slate-400">Your China sourcing partner</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              China-based sourcing agent helping overseas buyers find reliable suppliers,
              verify factories, inspect quality, follow production, and coordinate shipping —
              all in plain English.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:hello@ssourcingchina.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                hello@ssourcingchina.com
              </a>
              <a
                href="tel:+8675588889999"
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +86 755 8888 9999
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Room 1808, Tower B, Technology Park,
                  <br />
                  Nanshan District, Shenzhen 518057, China
                </span>
              </div>
            </div>
          </div>

          {FOOTER_NAV.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
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
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Get in touch
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Tell us what you want to source. A senior sourcing manager replies within one
              business day.
            </p>
            <Link to="/contact" className="btn-primary mt-5 w-full">
              Request a Quote
            </Link>
            <div className="mt-5 flex items-center gap-3 text-slate-400">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-white/10 p-2 hover:border-white/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Globe2 className="h-3.5 w-3.5" /> English · 中文 · Español
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SSourcing China Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="hover:text-white">Privacy</Link>
            <Link to="/contact" className="hover:text-white">Terms</Link>
            <span>Business license: 91440300MA5XXXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
