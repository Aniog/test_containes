import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Supplier Sourcing", href: "/services" },
    { label: "Factory Verification", href: "/services" },
    { label: "Quality Inspection", href: "/services" },
    { label: "Production Follow-Up", href: "/services" },
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
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block text-2xl font-extrabold tracking-tight">
              SSourcing<span className="text-accent">.</span>China
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              China sourcing agent for global buyers. We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Room 1206, Fortune Plaza, Futian District, Shenzhen, China</span>
              </li>
              <li>
                <a href="tel:+8613812345678" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span>+86 138 1234 5678</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@ssourcingchina.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span>hello@ssourcingchina.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
                  <Linkedin className="h-4 w-4 shrink-0 text-accent" />
                  <span>SSourcing China</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
