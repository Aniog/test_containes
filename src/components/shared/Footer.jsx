import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Sourcing",
    links: [
      { label: "Products We Source", href: "/products" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Get a Quote", href: "/contact?quote=true" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-extrabold text-white">
                SSourcing<span className="text-amber-500">.</span>China
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              China sourcing agent for overseas buyers. We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>Shenzhen & Yiwu, China</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <span>+86 755 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
