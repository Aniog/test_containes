import { Link } from "react-router-dom"
import { Mail, MapPin, Phone, Linkedin, Globe2 } from "lucide-react"

const linkGroups = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/services#supplier-search", label: "Supplier Search" },
      { to: "/services#factory-verification", label: "Factory Audits" },
      { to: "/services#quality-inspection", label: "Quality Inspection" },
      { to: "/services#shipping-logistics", label: "Shipping & Logistics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/products", label: "Products We Source" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/contact", label: "Get a Free Quote" },
      { to: "/contact#office", label: "Office Address" },
      { to: "/contact#privacy", label: "Privacy" },
      { to: "/contact#terms", label: "Terms" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-800 text-slate-300">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-md bg-white text-brand-800 flex items-center justify-center font-bold text-sm">
                SS
              </span>
              <span className="text-white text-lg font-bold tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-sm">
              An independent China sourcing agent for overseas buyers. We find
              factories, verify them, inspect quality, and coordinate shipping —
              in plain English.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-200 shrink-0" />
                <span className="text-slate-300">
                  Office: Futian District, Shenzhen, China
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-brand-200 shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="text-slate-300 hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-brand-200 shrink-0" />
                <span className="text-slate-300">+86 755 0000 0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 mt-0.5 text-brand-200 shrink-0" />
                <span className="text-slate-300">English · 中文</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-white text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              Follow
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-400 leading-relaxed">
              Response within 1 business day. Quotes in USD, EUR, GBP, or AUD on
              request.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>
            SSourcing China is an independent sourcing agent. We do not take
            title to goods and we do not issue product certifications.
          </p>
        </div>
      </div>
    </footer>
  )
}
