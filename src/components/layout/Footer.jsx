import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { navLinks } from "@/data/siteData"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-main py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-xl font-extrabold text-primary">
              SSourcing China
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              A professional China sourcing agent helping overseas buyers find
              reliable suppliers, verify factories, inspect quality, and
              coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-600">Supplier Sourcing</li>
              <li className="text-sm text-slate-600">Factory Verification</li>
              <li className="text-sm text-slate-600">Quality Inspection</li>
              <li className="text-sm text-slate-600">Production Monitoring</li>
              <li className="text-sm text-slate-600">Shipping Coordination</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Unit 1208, Fortune Plaza
                  <br />
                  Shenzhen, China 518000
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-primary">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+8675588881234" className="hover:text-primary">
                  +86 755 8888 1234
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                <a href="#" className="hover:text-primary">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
