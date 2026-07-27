import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Globe2 } from "lucide-react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

const groups = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/services#sourcing", label: "Supplier Sourcing" },
      { to: "/services#verification", label: "Factory Verification" },
      { to: "/services#inspection", label: "Quality Inspection" },
      { to: "/services#shipping", label: "Shipping & Logistics" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/products", label: "Products We Source" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/blog#supplier-checklist", label: "Supplier Vetting Checklist" },
      { to: "/blog#inspection-guide", label: "Pre-Shipment Inspection Guide" },
      { to: "/blog#shipping-incoterms", label: "Incoterms Explained" },
      { to: "/blog#fba-amazon", label: "FBA & Amazon Prep" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-navy-600 font-bold">
                SS
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">SSourcing</span>
                <span className="text-[11px] font-medium text-slate-300 tracking-wide">
                  CHINA SOURCING PARTNER
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-200 max-w-sm">
              A China-based sourcing partner for overseas buyers. We find
              reliable suppliers, verify factories, inspect quality, and
              coordinate shipping — so you can source from China with
              confidence.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-300 flex-shrink-0" />
                <span>
                  Office: 8F, Tower B, International Trade Center,
                  Yuhang District, Hangzhou, China
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-300 flex-shrink-0" />
                <a
                  href="mailto:hello@ssourcing.cn"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-300 flex-shrink-0" />
                <a
                  href="tel:+8657188880000"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  +86 571 8888 0000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe2 className="h-4 w-4 text-slate-300 flex-shrink-0" />
                <span>English · 中文 · Español</span>
              </li>
            </ul>
          </div>

          {groups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
              Start a Project
            </h3>
            <p className="mt-4 text-sm text-slate-200 leading-relaxed">
              Tell us what you want to source. We reply within 24 hours with a
              clear next-step plan.
            </p>
            <div className="mt-4">
              <Button to="/contact" variant="primary" size="md">
                Get a Quote
              </Button>
            </div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white"
              aria-label="SSourcing on LinkedIn"
            >
              <Linkedin className="h-4 w-4" /> Follow on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>Sourcing · Auditing · QC · Shipping</span>
            <span>·</span>
            <span>Based in Hangzhou, China</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
