import { Link } from "react-router-dom"
import { Anchor, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-footer text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Anchor className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SSourcing China
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, and coordinate
              shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-400 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white">
                  Products We Source
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white">
                  Get a Free Sourcing Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Yiwu & Shenzhen, China</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+86 579 0000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                <a href="#" className="hover:text-white">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Supplier Verification · Quality Control · Shipping Coordination</p>
        </div>
      </div>
    </footer>
  )
}
