import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Globe2 } from "lucide-react"
import { COMPANY } from "@/data/content"

const COLUMNS = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "Supplier Sourcing" },
      { to: "/services", label: "Factory Verification" },
      { to: "/services", label: "Quality Inspection" },
      { to: "/services", label: "Production Follow-up" },
      { to: "/services", label: "Shipping & Logistics" },
      { to: "/services", label: "OEM / ODM" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/products", label: "Products We Source" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "AQL sampling guide" },
      { to: "/blog", label: "Factory audit checklist" },
      { to: "/blog", label: "FCL vs LCL explained" },
      { to: "/blog", label: "Incoterms for importers" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10 text-sm font-bold">
              SS
            </span>
            <span className="text-base font-semibold">{COMPANY.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            An independent China sourcing agent for global buyers. We help you
            find, verify and manage Chinese factories, then ship on time.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/60" />
              {COMPANY.address}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white/60" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white/60" />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5" aria-hidden /> English · 中文
            </span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden /> LinkedIn
            </a>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
