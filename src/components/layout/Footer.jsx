import { Link } from "react-router-dom"
import { Anchor, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Container } from "@/components/ui/section"

const footerLinks = [
  {
    title: "Company",
    links: [
      { to: "/services", label: "Services" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Supplier Sourcing" },
      { to: "/services", label: "Factory Verification" },
      { to: "/services", label: "Quality Inspection" },
      { to: "/services", label: "Shipping Coordination" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/products", label: "Products We Source" },
      { to: "/contact", label: "Get a Free Quote" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-base font-bold tracking-tight">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, follow production,
              and coordinate shipping.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+86 755 0000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={`${col.title}-${i}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-primary-foreground/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-accent">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-accent">
              Terms
            </Link>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
