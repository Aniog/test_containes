import * as React from "react"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Supplier Sourcing", href: "/services" },
    { label: "Factory Verification", href: "/services" },
    { label: "Quality Control", href: "/services" },
    { label: "Production Follow-up", href: "/services" },
    { label: "Shipping Coordination", href: "/services" },
  ],
  company: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Products We Source", href: "/products" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-extrabold">S</span>
              <span>SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, control quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Services</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-600 hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-600" />
                <span>Shenzhen & Yiwu, China</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-brand-600">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                <a href="tel:+8613812345678" className="hover:text-brand-600">+86 138 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-800">Privacy Policy</Link>
            <Link to="/" className="text-xs text-slate-500 hover:text-slate-800">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
