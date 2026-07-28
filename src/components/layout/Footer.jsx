import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Supplier Discovery", path: "/services" },
    { label: "Factory Verification", path: "/services" },
    { label: "Quality Inspection", path: "/services" },
    { label: "Production Monitoring", path: "/services" },
    { label: "Shipping Coordination", path: "/services" },
  ],
  company: [
    { label: "How It Works", path: "/how-it-works" },
    { label: "Products We Source", path: "/products" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-site section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-2xl font-extrabold">
              SSourcing<span className="text-blue-400">.</span>
            </Link>
            <p className="mt-4 text-slate-300">
              China sourcing agent for global buyers. We help you find reliable suppliers, verify factories, control quality, and ship with confidence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                <span>Room 1205, Block A, Fortune Plaza, Shenzhen, China 518000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="tel:+8613812345678" className="hover:text-white">+86 138 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">hello@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="#" className="hover:text-white">SSourcing China</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
