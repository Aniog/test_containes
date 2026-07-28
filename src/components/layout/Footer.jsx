import { Link } from "react-router-dom"
import { ShipWheel, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

const footerNav = [
  {
    title: "Services",
    links: [
      { label: "Supplier Sourcing", to: "/services" },
      { label: "Factory Verification", to: "/services" },
      { label: "Quality Inspection", to: "/services" },
      { label: "Shipping Coordination", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", to: "/how-it-works" },
      { label: "Products We Source", to: "/products" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Get a Free Sourcing Quote", to: "/contact" },
      { label: "Contact Us", to: "/contact" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <ShipWheel className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                SSourcing China
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A China-based sourcing agent helping global buyers find reliable
              suppliers, verify factories, inspect quality, follow production,
              and coordinate shipping.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-light" />
                <span>hello@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-light" />
                <span>+86 755 0000 0000</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-light" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
