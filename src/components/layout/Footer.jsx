import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, ShipWheel, Linkedin, Globe } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div>
          <Link to="/" className="flex items-center gap-2.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
              <ShipWheel className="h-5 w-5" />
            </span>
            <span className="text-base font-extrabold tracking-tight">SSourcing China</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            A China-based sourcing agent helping overseas buyers find reliable
            suppliers, verify factories, inspect quality and coordinate shipping.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-white">Supplier Verification</Link></li>
            <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
            <li><Link to="/services" className="hover:text-white">Production Follow-up</Link></li>
            <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" />
              <span>Room 1208, Shennan Road,<br />Futian District, Shenzhen, China</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 flex-shrink-0 text-white/60" />
              <a href="mailto:hello@ssourcing-china.com" className="hover:text-white">
                hello@ssourcing-china.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 flex-shrink-0 text-white/60" />
              <a href="tel:+8675500000000" className="hover:text-white">
                +86 755 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <p>Sourcing services for B2B buyers worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
