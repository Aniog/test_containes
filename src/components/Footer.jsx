import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Supplier Sourcing", path: "/services" },
    { label: "Factory Verification", path: "/services" },
    { label: "Quality Inspection", path: "/services" },
    { label: "Production Follow-Up", path: "/services" },
    { label: "Shipping Coordination", path: "/services" },
  ],
  Company: [
    { label: "How It Works", path: "/how-it-works" },
    { label: "Products We Source", path: "/products" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand text-slate-300">
      <div className="container-main py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-white">
              SSourcing China
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>inquiry@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>+86 21 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>Shanghai, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
