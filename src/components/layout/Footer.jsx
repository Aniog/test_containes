import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Container } from "@/components/ui/primitives"

const linkGroups = [
  {
    title: "Services",
    links: [
      { label: "Supplier Sourcing", to: "/services#sourcing" },
      { label: "Factory Verification", to: "/services#verification" },
      { label: "Quality Inspection", to: "/services#quality" },
      { label: "Production Follow-up", to: "/services#production" },
      { label: "Shipping Coordination", to: "/services#shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Products We Source", to: "/products" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M5 18V6h2.5l3.5 6 3.5-6H17v12h-2v-8.5L11.5 14h-1L7 9.5V18H5zm14-1a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"
                    fill="#E08A1E"
                  />
                </svg>
              </span>
              <span className="text-white font-bold text-base">
                SSourcing China
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-md">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, follow production and
              coordinate shipping.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-amber-500" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-amber-500" />
                <a href="tel:+8612345678901" className="hover:text-white">
                  +86 123 4567 8901
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
            </ul>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 flex md:justify-end">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            China sourcing agent for global buyers · English support
          </p>
        </div>
      </Container>
    </footer>
  )
}