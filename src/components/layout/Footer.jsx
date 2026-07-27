import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const serviceLinks = [
  { to: "/services", label: "Supplier Sourcing" },
  { to: "/services", label: "Factory Verification" },
  { to: "/services", label: "Quality Inspection" },
  { to: "/services", label: "Production Follow-up" },
  { to: "/services", label: "Shipping & Logistics" },
  { to: "/services", label: "Custom Packaging" },
]

const companyLinks = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/contact", label: "Get a Quote" },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-x py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-navy-900 font-bold text-sm">
                SS
              </span>
              <span className="font-bold text-white text-lg">SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm text-navy-200 leading-relaxed max-w-sm">
              A China-based sourcing agent for global buyers. We help you find
              reliable suppliers, verify factories, inspect quality, follow
              production, and coordinate shipping — from inquiry to delivery.
            </p>
            <div className="mt-5 space-y-2 text-sm text-navy-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-300 shrink-0" />
                <span>
                  Rm 1208, Tower B, Coastal City, Nanshan, Shenzhen, China
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-300 shrink-0" />
                <a href="mailto:sourcing@ssourcingchina.com" className="hover:text-white">
                  sourcing@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-300 shrink-0" />
                <a href="tel:+8675588888888" className="hover:text-white">
                  +86 755 8888 8888
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-navy-100 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-navy-100 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Start Your Sourcing Project
            </h4>
            <p className="text-sm text-navy-200 mb-4">
              Send us your product requirements and target quantity. We'll come
              back with a sourcing plan and supplier shortlist within 1–3
              business days.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-md px-5 py-3 transition-colors text-sm"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy-200">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Sourcing from China with practical, on-the-ground support.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
