import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/" },
      { label: "Services", path: "/services" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Blog", path: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "How It Works", path: "/how-it-works" },
      { label: "Products We Source", path: "/products" },
      { label: "Contact", path: "/contact" },
      { label: "FAQ", path: "/#faq" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-main py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white text-sm font-extrabold">
                SS
              </span>
              <span>SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+86 21 5555 1234</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Shanghai, China</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
