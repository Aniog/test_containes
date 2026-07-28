import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageSquare, Linkedin, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

const SERVICES = [
  { to: "/services", label: "Supplier Sourcing" },
  { to: "/services", label: "Factory Verification" },
  { to: "/services", label: "Sample Management" },
  { to: "/services", label: "Quality Inspection" },
  { to: "/services", label: "Production Follow-up" },
  { to: "/services", label: "Shipping & Logistics" },
];

const COMPANY = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog & Insights" },
  { to: "/contact", label: "Contact" },
];

const RESOURCES = [
  { to: "/blog", label: "Sourcing Guides" },
  { to: "/blog", label: "QC Checklists" },
  { to: "/blog", label: "Incoterms Explained" },
  { to: "/contact#inquiry-form", label: "Request a Quote" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary-700 text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 12l9 4 9-4" />
                  <path d="M3 17l9 4 9-4" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">
                  SSourcing
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  China
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              A China-based sourcing agent helping overseas buyers find reliable
              suppliers, verify factories, inspect quality, and ship with
              confidence. Operating from Shenzhen and Yiwu since 2014.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  Room 1801, Tower B, Shenzhen International Innovation Center
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:hello@ssourcing.cn"
                  className="hover:text-white"
                >
                  hello@ssourcing.cn
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>WhatsApp & WeChat available</span>
              </li>
            </ul>
          </div>

          <FooterCol title="Services" links={SERVICES} className="lg:col-span-3" />
          <FooterCol title="Company" links={COMPANY} className="lg:col-span-2" />
          <FooterCol
            title="Resources"
            links={RESOURCES}
            className="lg:col-span-3"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" /> English · 中文 · Español
            </span>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links, className }) {
  return (
    <div className={className}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
